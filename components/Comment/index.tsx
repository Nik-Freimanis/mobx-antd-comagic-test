import {Button, Input} from 'antd';
import {observer} from 'mobx-react';
import AppStore from '@/app/AppStore';
import {useState} from 'react';
import {nanoid} from "nanoid";

interface CommentProps {
    id: string,
}

export const Comment = observer(({id}: CommentProps) => {
    const [comment, setComment] = useState('');

    return (
        <div>
            <h4 className={'text-[24px]'}>Комментарии</h4>
            {AppStore.posts.find(item => item.id === id)?.comments.map(item => <div
                key={nanoid(8)}>{item.description}</div>)}
            <Input value={comment} onChange={(e) => setComment(e.target.value)}/>
            <Button onClick={() => AppStore.addComment(id, comment)}>Отправить комментарий</Button>
        </div>
    );
});