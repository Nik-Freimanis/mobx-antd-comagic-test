import React from "react";
import {UserEmail} from "../UserEmail";
import {SignOutButton} from "../SignOutButton";
import s from './userTab.module.scss'
import Icon from "../Icon";


export const UserTab = () => {


    return (
        <div className={s.userTab}>
            <div className={s.userTab__container}>
                <div className={s.userTab__container_iconBox}>
                    <Icon name={'dude'}/>
                </div>
                <UserEmail/>
            </div>
            <SignOutButton/>
        </div>
    );
};
