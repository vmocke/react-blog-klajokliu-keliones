import React from 'react';
import classes from './PostsCard.module.css';
import ImgInlineBorder from '../../ImgInlineBorder/ImgInlineBorder';
import { limitTitle, componentDecorator } from '../../../shared/utility';
import Linkify from 'react-linkify';

interface PostsCard {
    title: string;
    date: string;
    text: string;
    onClick: any;
    src: string;
}

const PostsCard = (props: PostsCard) => {
    return (
        <Linkify componentDecorator={componentDecorator}>
            <div className={classes.PostsCard}>
                <div className={classes.PostsDesc}>
                    <h2>{limitTitle(props.title, 50)}</h2>
                    <span>{props.date}</span>
                    <p>{limitTitle(props.text, 200)}</p>
                    <a href="none" onClick={props.onClick} className={classes.PostsDescRead}>
                        Skaityti...
                    </a>
                </div>
                <div className={classes.PostsImg}>
                    <img src={props.src} alt="foto_" />
                    <ImgInlineBorder />
                </div>
            </div>
        </Linkify>
    );
};

export default PostsCard;
