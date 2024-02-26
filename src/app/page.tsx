'use client';
import Image from "next/image";
import {observer} from 'mobx-react';
import AppStore from './AppStore';
import {Button} from 'antd';
import {Post} from '../../components/Post/Post'
import {useEffect} from 'react';
import {getUsersList} from '../../data/UserManager';
import s from './page.module.scss'
import {useSession} from "next-auth/react";

const Home = observer(() => {

    const session = useSession()
    console.log(session)


    useEffect(() => {
        AppStore.generatePosts();
    }, [])

    return (
        <div className={s.page}>
            <div className={s.page__title}>
                <h1>Лента новостей</h1>
                <Button onClick={() => AppStore.addPost()}>Добавить Пост</Button>
            </div>
            <div className={s.page__content}>
                {AppStore.posts.map(item => <Post key={item.id} {...item}/>)}
            </div>
        </div>
    );
});

export default Home;
