'use client'

import React, { useEffect } from "react";
import AppStore from '../../src/app/AppStore';
import { observer } from "mobx-react";
import { Friend } from "../Friend";
import s from './friendsList.module.scss';
import notFound from '@assets/svg/notFound.svg'
import Image from "next/image";

const FriendsList = observer(() => {
    useEffect(() => {
        AppStore.generateUsers();
    }, []);



    const friends = AppStore.getUserListByFriendIds();

    return (
        <div className={s.friendsList}>
            <div className={s.friendsList__container}>
                <div className={s.friendsList__container_content}>
                    {friends.length === 0 ? (
                        <div className={s.friendsList__container_content_noFriends}>
                            <Image src={notFound} alt={'not found'} />
                            <p>Добавьте друзей</p>
                        </div>
                    ) : (
                        friends.map(friend => <Friend key={friend.id} {...friend} />)
                    )}
                </div>
            </div>
        </div>
    );
});

export default FriendsList;
