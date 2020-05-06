import React from 'react';
import classes from './ImgComp.module.css';
import ImgInlineBorder from '../ImgInlineBorder/ImgInlineBorder';

interface ImgComp {
    src: string;
    ImgInlineBorder: boolean;
}

const ImgComp = (props: ImgComp) => {
    return (
        <React.Fragment>
            <div className={classes.ImgComp}>
                <img src={props.src} alt="foto_" width="200" height="300" />
                {props.ImgInlineBorder && <ImgInlineBorder />}
            </div>
        </React.Fragment>
    );
};

export default ImgComp;
