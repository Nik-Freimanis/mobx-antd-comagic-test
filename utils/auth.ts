import { getServerSession as NotInjectedServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { RedirectType } from 'next/dist/client/components/redirect';
import { useSession } from 'next-auth/react';
import { authOptions } from '@lib/auth';

type Nullable<T> = T | null
type ExtendedSession = {user: {name: Nullable<string>, email: Nullable<string>, image: Nullable<string>}, userId: number};

export async function redirectIfNoSession(to: string = '/api/auth/signin') {
    'use server';
    const session = await getServerSession();
    if (!session)
        redirect(to, RedirectType.push)
}

export function redirectToSignIn() {
    redirect('/api/auth/signin', RedirectType.push);
    return null
}

export function redirectIfNoSessionClient(to: string = '/api/auth/signin') {
    const session = useSession();

    if (session.status === 'unauthenticated')
        redirect(to, RedirectType.push)

}

export async function getServerSession(): Promise<Nullable<ExtendedSession>> {
    return NotInjectedServerSession(authOptions)
}