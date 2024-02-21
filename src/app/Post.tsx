import { useForm } from 'react-hook-form';
import { Button, Input } from 'antd';
import { observer } from 'mobx-react';
import AppStore from './AppStore';
import { useState } from 'react';
import Image from "next/image";

interface PostProps {
    id: string,
    text: string,
    author: string
}

export const Post = observer(({ id, text, author }: PostProps) => {
    const [comment, setComment] = useState('');

    return <div className={'flex flex-col'}>
        <h1 className={'text-[24px]'}>Пост #{id}</h1>
        <span>{author}</span>
        <p>{text}</p>
        <Input value={comment} onChange={(e) => setComment(e.target.value)}/>
        <Button onClick={() => AppStore.addComment(id, comment)}>Отправить комментарий</Button>
        <h1 className={'text-[24px]'}>Комментарии</h1>
        {AppStore.posts.find(item => item.id === id)?.comments.map(item => <div>{item.description}</div>)}
    </div>;

});