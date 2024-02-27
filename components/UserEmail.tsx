'use client'
import { useSession } from 'next-auth/react';


export const UserEmail = () => {
    const session = useSession();

    return <>{session.data?.user?.email}</>
}