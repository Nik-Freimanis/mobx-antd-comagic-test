'use client'

import React, {useEffect} from "react";
import AppStore from '../../src/app/AppStore';
import {observer} from "mobx-react";
import {User} from "../User";
import s from './friendsRequests.module.scss'

export const FriendsRequests = observer(() => {

    useEffect(() => {
        AppStore.generateUsers();
    }, [])

    return (
        <div className={s.friends}>
            <h1>Заявки в друзья</h1>
            <div className={s.friends__container}>
                <div className={s.friends__container_content}>
                    {AppStore.users.map(e => <User key={e.id} {...e}/>)}
                </div>
            </div>
        </div>
    )
})