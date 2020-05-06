import React from 'react';
import classes from './PostShowCard.module.css';
import ImgInlineBorder from '../ImgInlineBorder/ImgInlineBorder';
import { convertDateFirestore, componentDecorator } from '../../shared/utility';
import PostShowExtraContent from './PostShowExtraContent/PostShowExtraContent';
import Linkify from 'react-linkify';

interface PostShowCard {
    mainImg: string;
    mainTitle: string;
    mainDate: any;
    mainText: string;
    extraContent?: any[];
}

const PostShowCard = (props: PostShowCard) => {
    return (
        <Linkify componentDecorator={componentDecorator}>
            <div className={classes.TicketsPost}>
                <div className={classes.TicketsPostMainContent}>
                    <div className={classes.TicketsPostMainImg}>
                        <img src={props.mainImg} alt="foto_" />
                        <ImgInlineBorder />
                    </div>
                    <div className={classes.TicketsPostMainText}>
                        <div className={classes.TicketsPostMainHeader}>
                            <h2>{props.mainTitle}</h2>
                            <span>{`Data: ${convertDateFirestore(props.mainDate)}`}</span>
                        </div>
                        <p>{props.mainText}</p>
                    </div>
                </div>
                {props.extraContent && (
                    <PostShowExtraContent
                        classNamePostShowExtraContent={classes.TicketsPostExtraContent}
                        classNamePostShowExtraContentImgs={classes.PostShowExtraContentImgs}
                        extraContent={props.extraContent}
                    />
                )}
            </div>
        </Linkify>
    );
};

export default PostShowCard;
