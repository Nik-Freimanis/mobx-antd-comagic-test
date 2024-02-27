'use client'

import { signOut } from 'next-auth/react';
import {Button} from "antd";

export const SignOutButton = () => {
    return (
        <Button onClick={() => signOut()}>Выйти</Button>
    )
}