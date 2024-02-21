'use client';
import Image from "next/image";
import { observer } from 'mobx-react';
import AppStore from './AppStore';
import { Button } from 'antd';
import { Post } from '@/app/Post';
import { useEffect } from 'react';
import { getUsersList } from '../../data/UserManager';

const Home = observer(() => {

  useEffect(() => {
    getUsersList().then(res => AppStore.setUsers(res));

  }, [])

  return (
      <div className={'flex flex-col gap-[30px]'}>
        {AppStore.posts.map(item => <Post key={item.id} id={item.id} text={item.text} author={item.author}/>)}
        <Button onClick={() => AppStore.addPost()}>Добавить Пост</Button>
      </div>
  );
});

export default Home;
