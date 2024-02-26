import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {getServerSession, redirectIfNoSession} from '../../utils/auth';
import {AntdRegistry} from '@ant-design/nextjs-registry';
import {ReactNode} from "react";
import s from './layout.module.scss'
import bg from '../assets/img/bg.webp'
import Image from "next/image";
import {SessionProvider} from "next-auth/react";
import {Providers} from "../../components/Providers";
import {redirect} from "next/navigation";
import {NavBar} from "../../components/NavBar";
import FriendsList from "../../components/FriendsList";


const inter = Inter({subsets: ["latin"]});

interface ProfileLayoutProps {
    children: ReactNode;
}

export const metadata: Metadata = {
    title: "Comagic Test Mobx Antd",
    description: "Social",
};

const navList = [
    {id: 0, label: "Лента новостей", href: "/", icon: 'main-page'},
    {id: 1, label: "Друзья", href: "friends", icon: 'friends'},
    {id: 2, label: "Сообщения", href: "messages", icon: 'messages'},
];

export default async function RootLayout({children}: Readonly<ProfileLayoutProps>) {
    const serverSession = await getServerSession()
    if (!serverSession?.user.email) {
        redirect('/api/auth/signin');
        return null
    }



    return (
        <html lang="ru">
        <body>
        <Providers>
                <div className={s.layout}>
                    <Image src={bg} alt={'background'} id={'background'}/>
                    <div className={s.layout__container}>
                        <div className={s.layout__container_content}>
                            <aside>
                                {navList.map((nav, id) => (
                                    <NavBar key={id} {...nav} />
                                ))}
                            </aside>
                            <div className={s.layout__container_content_children}>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
        </Providers>
        </body>
        </html>
    );
}
