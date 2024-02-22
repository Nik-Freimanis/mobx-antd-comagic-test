import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {getServerSession, redirectIfNoSession} from '../../utils/auth';
import {AntdRegistry} from '@ant-design/nextjs-registry';
import {ReactNode} from "react";
import s from './layout.module.scss'
import bg from '../assets/img/bg.webp'
import Image from "next/image";


const inter = Inter({subsets: ["latin"]});

interface ProfileLayoutProps {
    children: ReactNode;
}

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};


export default async function RootLayout({children}: Readonly<ProfileLayoutProps>) {

    return (
        <html lang="en">
        <body>
        <AntdRegistry>
            <div className={s.layout}>
                <Image src={bg} alt={'background'} id={'background'}/>
                <div className={s.layout__container}>
                    <div className={s.layout__container_content}>
                        <div className={s.layout__container_content_bar}>

                        </div>
                        <div className={s.layout__container_content_children}>
                            {children}
                        </div>
                    </div>
                </div>

            </div>
        </AntdRegistry>
        </body>
        </html>
    );
}
