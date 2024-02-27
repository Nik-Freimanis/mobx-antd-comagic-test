import { Button, Input } from 'antd';
import { observer } from 'mobx-react';
import AppStore from '@/app/AppStore';
import { useState } from 'react';
import { nanoid } from "nanoid";
import s from './comment.module.scss';
import Icon from "../Icon";
import noComments from '@assets/svg/noComments.svg'
import Image from "next/image";

interface CommentProps {
    id: string;
}

export const Comment = observer(({ id }: CommentProps) => {
    const [comment, setComment] = useState('');

    const post = AppStore.posts.find(item => item.id === id);
    const comments = post?.comments || [];

    return (
        <div className={s.comment}>
            <h4>Комментарии</h4>
            <div className={s.comment__container}>
                <div className={s.comment__container_content}>
                    {comments.length === 0 ? (
                        <div className={s.comment__container_content_noComments}>
                            <Image src={noComments} alt={'no comments'} priority={true}/>
                            <p>Нет комментариев</p>
                        </div>
                    ) : (
                        comments.map(item => <div key={nanoid(8)}>{item.description}</div>)
                    )}
                </div>
                <div className={s.comment__container_content_item}>
                    <Input value={comment} onChange={(e) => setComment(e.target.value)} />
                    <Button onClick={() => AppStore.addComment(id, comment)}>
                        <Icon name={'send'} />
                    </Button>
                </div>
            </div>
        </div>
    );
});
