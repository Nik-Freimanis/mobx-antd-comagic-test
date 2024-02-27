'use client'

import React, {useEffect, useState} from "react";
import {observer} from "mobx-react";
import s from './messages.module.scss';
import FriendsList from "../../../components/FriendsList";
import {Button, Input, List} from "antd";
import AppStore, {user, message} from "@/app/AppStore";
import Icon from "../../../components/Icon";

const MessagesPage = observer(() => {
    const [messageInput, setMessageInput] = useState('');
    const [selectedFriend, setSelectedFriend] = useState<user | null>(null);
    const [friendMessages, setFriendMessages] = useState<message[]>([]);

    useEffect(() => {
        if (selectedFriend) {
            const messages = AppStore.getMessagesByRecipientId(selectedFriend.id);
            setFriendMessages(messages);
        }
    }, [selectedFriend]);

    const handleSendMessage = () => {
        if (selectedFriend && messageInput.trim() !== '') {
            AppStore.sendMessage(selectedFriend.id, messageInput);
            setMessageInput('');
            setFriendMessages(AppStore.getMessagesByRecipientId(selectedFriend.id));
        }
    };


    return (
        <div className={s.messages}>
            <h1>Сообщения</h1>
            <div className={s.messages__container}>
                <FriendsList onSelectFriend={setSelectedFriend}/>
                <div className={s.messages__container_content}>
                    <div className={s.messages__container_content_messenger}>
                        <h2>{selectedFriend ? `Сообщения с ${selectedFriend.firstName}` : "Выберите друга"}</h2>
                        <div className={s.messages__container_content_messenger_messages}>
                            {friendMessages.map(item => (
                                <div className={s.messages__container_content_messenger_messages_item} key={item.id}>
                                    <p>
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                        {selectedFriend && (
                            <div className={s.messages__container_content_input}>
                                <Input
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    onPressEnter={handleSendMessage}
                                    placeholder="Введите сообщение"
                                />
                                <Button
                                    onClick={handleSendMessage}
                                    icon={<Icon name={'send'}/>}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default MessagesPage;

