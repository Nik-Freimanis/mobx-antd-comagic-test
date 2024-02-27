'use client'

import React, {useEffect} from "react";
import AppStore from '../AppStore';
import {observer} from "mobx-react";
import {User} from "../../../components/User";
import s from './friends.module.scss'
import FriendsList from "../../../components/FriendsList";

const FriendsPage = observer(() => {


    return (
        <div className={s.friends}>
            <h1>Друзья</h1>
            <div className={s.friends__container}>
                <FriendsList/>
            </div>
        </div>
    )
})

export default FriendsPage