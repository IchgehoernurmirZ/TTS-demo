import React, {useState} from 'react';
import {Menu, message} from 'antd';
import { TranslationOutlined, SmileOutlined, SettingOutlined } from '@ant-design/icons';

const Sidebar = (props) => {
    const [selectedKeys, setSelectedKeys] = useState('');
    const [children, setChildren] = useState([]);
    const items = [
        {
            label: 'Languages',
            key: '1',
            icon: <TranslationOutlined />,
            children: [
                {label: 'Chinese', key: '2'},
                {label: 'English', key: '3'},
                {label: 'German', key: '4'}
            ]
        },
        {
            label: 'Voices',
            key: '5',
            icon: <SmileOutlined />,
            children: children,
        },
        {
            label: 'Playback Speed',
            key: '6',
            icon: <SettingOutlined />,
            children: [
                {label: '1x', key: '7'},
                {label: '1.5x', key: '8'},
                {label: '1.75x', key: '9'},
                {label: '2x', key: '10'},
            ]
        },
    ];

    const onSelect = (keys) => {
        switch (keys.key) {
            case '2':
                return setChildren([
                    {label: 'Mandarin, Female, Xiaoxuan', key: 'zh-CN-XiaoxuanNeural'},
                    {label: 'Mandarin, Female, Xiaohan', key: 'zh-CN-XiaohanNeural'},
                    {label: 'Mandarin, Male, Yunye', key: 'zh-CN-YunyeNeural'},
                    {label: 'Mandarin, Male, Yunyang', key: 'zh-CN-YunyangNeural'},
                ]);
            case '3':
                return setChildren([
                    {label: 'US, Female, Amber', key: 'en-US-AmberNeural'},
                    {label: 'UK, Female, Libby', key: 'en-GB-LibbyNeural'},
                    {label: 'US, Male, Brandon', key: 'en-US-BrandonNeural'},
                    {label: 'UK, Male, Ryan', key: 'en-GB-RyanNeural'},
                ]);
            case '4':
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
        props.select(keys.key);
    };

    const onOpenMenu = (openedMenus) => {
        if (!selectedKeys && openedMenus[0] === '5' && openedMenus.length === 1) {
            message.error('Please select a language first.', 0.8)
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