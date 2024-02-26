import React from "react";
import { observer } from "mobx-react";
import AppStore from "@/app/AppStore";
import { Button } from "antd";
import s from './user.module.scss'
import Icon from "../Icon";

interface UserProps {
    id: string;
    firstName: string;
    lastName: string;
}

export const User = observer(({ id, firstName, lastName }: UserProps) => {
    const isFriend = AppStore.friendIds.includes(id);

    const handleAddToFriends = () => {
        if (isFriend) {
            AppStore.unfriend(id);
            console.log("Removed from friends:", firstName, lastName);
        } else {
            AppStore.addToFriends(id);
            console.log("Added to friends:", firstName, lastName);
        }
    };

    return (
        <div className={s.user}>
            <div className={s.user__container}>
                <div className={s.user__container_iconBox}>
                    <Icon name={'dude'} width={22}/>
                </div>
                <div className={s.user__container_userName}>
                    <h2>{firstName}</h2>
                    <h3>{lastName}</h3>
                </div>
            </div>

            <div className={s.user__btnBox}>
                <Button onClick={handleAddToFriends}>
                    {isFriend ? "Удалить" : "Добавить"}
                </Button>
            </div>
        </div>
    );
});
