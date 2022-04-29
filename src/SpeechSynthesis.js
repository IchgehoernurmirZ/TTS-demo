import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import React from 'react';
import styles from "./components/TextInput.module.css";
import {Button, message} from "antd";
import {PauseCircleOutlined, PlayCircleOutlined, StepForwardOutlined} from "@ant-design/icons";


const SpeechSynthesis = (props) => {
    const {text, voice} = props;
    let currentTime = 0;
    let player;
    const speechConfig = sdk.SpeechConfig.fromSubscription("36a2385d602d40a6ae6bb3331c13917f", "eastasia");
    speechConfig.speechSynthesisVoiceName = voice;

    const play = () => {
        player = new sdk.SpeakerAudioDestination();
        const audioConfig = sdk.AudioConfig.fromSpeakerOutput(player);
        const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
        synthesizer.speakTextAsync(
            text,
            result => {
                if (result) {
                    synthesizer.close();
                    currentTime = player.currentTime;
                    return result.audioData;
                }
            },
            error => {
                console.log(error);
                synthesizer.close();
            }
        )
        player.onAudioEnd = (_) => {
            currentTime = 0;
        }
    }

    const onStart = () => {
        if (!voice) {
            message.error('Please select a language and a voice first.', 0.8).then();
        } else if (!text) {
            message.error('Please input something first.', 0.8).then();
        } else if (currentTime === 0) {
            play();
        } else if (currentTime > 0) {
            onPause();
            play();
        }
    }

    const onPause = () => {
        currentTime = 0;
        player.pause();
    }

    const onResume = () => {
        player.resume();
    }

    return (
        <div className={styles.buttons}>
            <Button type="primary" shape="round" icon={<StepForwardOutlined />} onClick={onStart}>Start</Button>
            <Button type="primary" shape="round" icon={<PauseCircleOutlined />} onClick={onPause}>Pause</Button>
            <Button type="primary" shape="round" icon={<PlayCircleOutlined />} onClick={onResume}>Resume</Button>
        </div>
    )
}

export default SpeechSynthesis;