import {observer} from 'mobx-react';
import s from './post.module.scss'
import Icon from "../Icon";
import Image from "next/image";
import {Comment} from "../Comment";

interface PostProps {
    id: string,
    text: string,
    author: string,
    avatar: string,
    img: string
}

export const Post = observer(({id, text, author, img, avatar}: PostProps) => {


    return (
        <div className={s.post}>
            <div className={s.post__container}>
                <div className={s.post__container_title}>
                    <div className={s.post__container_title_avatar}>
                        {avatar ? (
                            <Image src={avatar} alt={id} width={42} height={42} />
                        ) : (
                            <Icon name={'dude'} width={23} height={24} />
                        )}
                    </div>
                    <div className={s.post__container_title_author}>
                        <h3>{author}</h3>
                        <span>{id}</span>
                    </div>
                </div>
                <div className={s.post__container_content}>
                    <div className={s.post__container_content_img}>
                        <Image src={img} alt={id} width={640} height={480}/>
                    </div>
                    <p>{text}</p>
                    <Comment id={id}/>
                </div>
            </div>
        </div>
    );
});