'use client'

import React from "react";
import {observer} from "mobx-react";
import s from './friend.module.scss'
import Icon from "../Icon";
import {Button} from "antd";
import AppStore from "@/app/AppStore";

interface FriendProps {
    id: string,
    firstName: string,
    lastName: string,
    onClick?: () => void;
}


export const Friend = observer(({id, firstName, lastName, onClick}: FriendProps) => {
    return (
        <div className={s.friend} onClick={onClick}>
            <div className={s.friend__container}>
                <div className={s.friend__container_content}>
                    <div className={s.friend__container_content_iconBox}>
                        <Icon name={'dude'} width={22}/>
                    </div>
                    <div className={s.friend__container_content_friendName}>
                        <h2>{firstName}</h2>
                        <h3>{lastName}</h3>
                    </div>
                </div>

                <div className={s.friend__btnBox}>
                    {/*<Button onClick={() => AppStore.unfriend(id)}>Удалить из друзей</Button>*/}
                </div>
            </div>
        </div>
    )
})