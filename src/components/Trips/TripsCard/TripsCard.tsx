import React from 'react';
import classes from './TripsCard.module.css';
import { limitTitle } from '../../../shared/utility';

interface TripsCard {
    src: string;
    title: string;
    onClick: any;
}

const TripsCard = (props: TripsCard) => {
    return (
        <div className={classes.TripsCard} onClick={props.onClick}>
            <div className={classes.TripsCardImg}>
                <img src={props.src} alt="foto_" />
            </div>
            <div className={classes.TripsCardImgDesc}>
                <h6>{limitTitle(props.title, 50)}</h6>
            </div>
        </div>
    );
};

export default TripsCard;
