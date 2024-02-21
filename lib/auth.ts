import * as bcrypt from 'bcrypt';
import CredentialsProvider from 'next-auth/providers/credentials';
import { isExists } from '@utils/functions';
import type { NextAuthOptions } from 'next-auth';
import { getUserByLogin } from '../data/UserManager';


export const authOptions: NextAuthOptions = {
    secret: 'secret',
    session: {
        maxAge: 60 * 24 * 60 * 60 * 365 * 10, // 10years
        strategy: 'jwt',
    },
    callbacks: {
        async session({ session, user }) {
            if (session && !user?.id) {
                // @ts-ignore
                const user = await getUserByLogin(credentials.email)
                if (user) {
                    return { ...session, userId: user?.id };
                }
                return {};
            }
            return { ...session, userId: user?.id };
        },

        async signIn({ user, email, credentials, profile, account }) {
            console.log('LOGIN', email, credentials, profile, account, user);


            if (user.email === null || user.email === undefined) {
                return '/sign-up';
            }
            const dbUser = await getUserByLogin(credentials.email as string)
            if (dbUser)
                return credentials?.password === dbUser.password;
                // тут лучше через хэширование делать, но для нашего кейса так норм
            return '/sign-up';
        },
    },
    providers: [
        CredentialsProvider({
            name: 'Sign in',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'example@example.com',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                isExists(email);
                isExists(password);
                const user = await getUserByLogin(email);
                console.log('USER,', user);
                if (user) {
                    return user;
                }
                throw 'can not find user';

            },
        }),],
    cookies: {
        sessionToken: {
            name: `sessionid`,
            options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: true,
            },
        },
        callbackUrl: {
            name: `__tst-auth.callback-url`,
            options: {
                sameSite: 'lax',
                path: '/',
                secure: true,
            },
        },
        csrfToken: {
            name: `__tst.csrf-token`,
            options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: true,
            },
        },
        pkceCodeVerifier: {
            name: 'next-auth.pkce.code_verifier',
            options: {
                httpOnly: true,
                sameSite: 'none',
                path: '/',
                secure: true,
            },
        },
    },
};




