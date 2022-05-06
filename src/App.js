import React, {useState} from "react";
import {PageHeader} from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';
import styles from './App.module.css';
import TextInput from "./components/TextInput";
import Sidebar from "./components/Sidebar";

const App = () => {
    const [voice, setVoice] = useState('');
    const [speed, setSpeed] = useState('');

    const selectedVoice = (selectedVoice) => {
        setVoice(selectedVoice);
    };

    const selectedSpeed = (selectedSpeed) => {
        setSpeed(selectedSpeed);
    };

    return (
        <>
            <div className={styles.header}>
                <FontAwesomeIcon className={styles.logo} icon={faPodcast} />
                <PageHeader title="TTS Demo" />
            </div>
            <div className={styles.container}>
                <Sidebar selectVoice={selectedVoice} selectSpeed={selectedSpeed}/>
                <TextInput voice={voice} speed={speed}/>
            </div>
        </>
    )
}

export default App;