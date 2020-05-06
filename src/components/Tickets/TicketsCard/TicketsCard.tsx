import React from 'react';
import classes from './TicketsCard.module.css';
import { limitTitle } from '../../../shared/utility';

interface TicketsCard {
    src: string;
    title: string;
    srcBackground: string;
    onClick: any;
}

const TicketsCard = (props: TicketsCard) => {
    return (
        <div className={classes.TicketsCard} onClick={props.onClick}>
            <div className={classes.TicketsCardImg}>
                <img src={props.src} alt="foto_" />
            </div>
            <div className={classes.TicketsCardImgDesc}>
                <h6>{limitTitle(props.title, 50)}</h6>
            </div>
            <div className={classes.DescBackground}>
                <img src={props.srcBackground} alt="background_" />
            </div>
        </div>
    );
};

export default TicketsCard;
