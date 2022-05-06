import React, {useState} from 'react';
import {Input} from 'antd';
import styles from './TextInput.module.css';
import SpeechSynthesis from "./SpeechSynthesis";
import { Progress } from 'antd';

const { TextArea } = Input;

const TextInput = (props) => {
    const [ input, setInput ] = useState('');

    const handleInputText = (e) => {
        setInput(e.target.value);
    }

    // const currentTime = 0;
    // const timeline = (currentTime, duration) => {
    //
    // }

    return (
        <div className={styles.content}>
            <p>Input your content in the area below </p>
            <Progress status="active" />
            <TextArea showCount maxLength={1000} style={{height: 200}} value={input} onChange={handleInputText}/>
            <SpeechSynthesis voice={props.voice} text={input} speed={props.speed}/>
        </div>
    )
}

export default TextInput;