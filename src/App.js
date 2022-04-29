import React, {useState} from "react";
import {PageHeader} from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';
import styles from './App.module.css';
import TextInput from "./components/TextInput";
import Sidebar from "./components/Sidebar";

const App = () => {
    const [voice, setVoice] = useState('');

    const selectedVoice = (selectedVoice) => {
        setVoice(selectedVoice);
    };

    return (
        <div>
            <div className={styles.header}>
                <FontAwesomeIcon className={styles.logo} icon={faPodcast} />
                <PageHeader title="TTS Demo" />
            </div>
            <div className={styles.container}>
                <Sidebar select={selectedVoice}/>
                <TextInput voice={voice}/>
            </div>
        </div>
    )
}

export default App;