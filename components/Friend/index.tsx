'use client'

import React from "react";
import {observer} from "mobx-react";
import AppStore from "@/app/AppStore";
import {Button} from "antd";

interface UserProps {
    id: string,
    firstName: string,
    lastName: string
}


export const Friend = observer(({id, firstName, lastName}: UserProps) => {
    return (
        <div>
            <span>
                {firstName}
            </span>
            <span>
                {lastName}
            </span>
        </div>
    )
})