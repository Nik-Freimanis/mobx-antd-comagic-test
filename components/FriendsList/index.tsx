'use client'

import React, { useEffect } from "react";
import AppStore from '../../src/app/AppStore';
import { observer } from "mobx-react";
import { Friend } from "../Friend";
import s from './friendsList.module.scss'

const FriendsList = observer(() => {
    useEffect(() => {
        AppStore.generateUsers();
    }, []);

    const friends = AppStore.getUserListByFriendIds();

    return (
        <div className={s.friendsList}>
            <div className={s.friendsList__container}>
                <h2>В друзьях</h2>
                {friends.map(friend => <Friend key={friend.id} {...friend} />)}
            </div>
        </div>
    );
});

export default FriendsList;
