import React, {useState} from 'react';
import {Menu, message} from 'antd';
import { TranslationOutlined, SmileOutlined, SettingOutlined } from '@ant-design/icons';

const Sidebar = (props) => {
    const [selectedKeys, setSelectedKeys] = useState('');
    const [children, setChildren] = useState([]);
    const items = [
        {
            label: 'Languages',
            key: 'languages',
            icon: <TranslationOutlined />,
            children: [
                {label: 'Chinese', key: 'cn'},
                {label: 'English', key: 'en'},
                {label: 'German', key: 'de'}
            ]
        },
        {
            label: 'Voices',
            key: 'voices',
            icon: <SmileOutlined />,
            children: children,
        },
        {
            label: 'Playback Speed',
            key: '6',
            icon: <SettingOutlined />,
            children: [
                {label: '1x', key: '1'},
                {label: '1.5x', key: '1.5'},
                {label: '1.75x', key: '1.75'},
                {label: '2x', key: '2'},
            ]
        },
    ];

    const onSelect = (keys) => {
        switch (keys.key) {
            case 'cn':
                return setChildren([
                    {label: 'Mandarin, Female, Xiaoxuan', key: 'zh-CN-XiaoxuanNeural'},
                    {label: 'Mandarin, Female, Xiaohan', key: 'zh-CN-XiaohanNeural'},
                    {label: 'Mandarin, Male, Yunye', key: 'zh-CN-YunyeNeural'},
                    {label: 'Mandarin, Male, Yunyang', key: 'zh-CN-YunyangNeural'},
                ]);
            case 'en':
                return setChildren([
                    {label: 'US, Female, Amber', key: 'en-US-AmberNeural'},
                    {label: 'UK, Female, Libby', key: 'en-GB-LibbyNeural'},
                    {label: 'US, Male, Brandon', key: 'en-US-BrandonNeural'},
                    {label: 'UK, Male, Ryan', key: 'en-GB-RyanNeural'},
                ]);
            case 'de':
                return setChildren([
                    {label: 'Germany, Female, Katja', key: 'de-DE-KatjaNeural'},
                    {label: 'Switzerland, Female, Leni', key: 'de-CH-LeniNeural'},
                    {label: 'Germany, Male, Conrad', key: 'de-DE-ConradNeural'},
                    {label: 'Switzerland, Male, Jan', key: 'de-CH-JanNeural'},
                ]);
            default:
                break;
        }
        setSelectedKeys(keys.key);
        if (keys.key.length > 4) {
            props.selectVoice(keys.key);
        } else {
            props.selectSpeed(keys.key)
        }
    };

    const onOpenMenu = (openedMenus) => {
        if (!selectedKeys && openedMenus[0] === '5' && openedMenus.length === 1) {
            message.error('Please select a language first.', 0.8).then();
        }
    };


    return (
        <Menu
            mode="inline"
            style={{
                width: 256,
            }}
            onSelect={onSelect}
            onOpenChange={onOpenMenu}
            items={items}
        />
    );
};

export default Sidebar;