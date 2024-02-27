'use client'

import React, { useEffect } from "react";
import AppStore from '../AppStore';
import { observer } from "mobx-react";
import s from './friends.module.scss';
import FriendsList from "../../../components/FriendsList";

const FriendsPage = observer(() => {
    // @ts-ignore
    const handleFriendSelect = (friend) => {
        AppStore.setSelectedFriend(friend);
    };

    const selectedFriend = AppStore.getSelectedFriend();


    return (
        <div className={s.friends}>
            <h1>Друзья</h1>
            <div className={s.friends__container}>
                <FriendsList onSelectFriend={handleFriendSelect} />
                {selectedFriend && (
                    <div>
                        {/*// @ts-ignore*/}
                        Профиль: {selectedFriend.firstName} {selectedFriend.lastName}
                    </div>
                )}
            </div>
        </div>
    );
});

export default FriendsPage;