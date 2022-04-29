import React, {useState} from 'react';
import {Input} from 'antd';
import styles from './TextInput.module.css';
import SpeechSynthesis from "./SpeechSynthesis";

const { TextArea } = Input;

const TextInput = (props) => {
    const [ input, setInput ] = useState('');

    const handleInputText = (e) => {
        setInput(e.target.value);
    }



    return (
        <div className={styles.content}>
            <p>Input your content in the area below </p>
            <TextArea showCount maxLength={1000} style={{height: 200}} value={input} onChange={handleInputText}/>
            <SpeechSynthesis voice={props.voice} text={input}/>
        </div>
    )
}

export default TextInput;