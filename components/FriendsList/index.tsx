import React from "react";
import { observer } from "mobx-react";
import s from './friendsList.module.scss';
import { Friend } from "../Friend";
import AppStore from "@/app/AppStore";

interface FriendData {
    id: string;
    firstName: string;
    lastName: string;
}
interface FriendsListProps {
    onSelectFriend?: (friend: FriendData) => void;
}

const FriendsList: React.FC<FriendsListProps> = ({ onSelectFriend }) => {
    const friends = AppStore.getUserListByFriendIds();


    const handleFriendSelect = (friend: FriendData) => {
        if (onSelectFriend) {
            onSelectFriend(friend);
        }
    };

    return (
        <div className={s.friendsList}>
            <div className={s.friendsList__container}>
                <div className={s.friendsList__container_content}>
                    {friends.map(friend => (
                        <Friend key={friend.id} {...friend} onClick={() => handleFriendSelect(friend)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default observer(FriendsList);
