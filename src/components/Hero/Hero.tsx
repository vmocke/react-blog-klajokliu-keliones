import React from 'react';
import classes from './Hero.module.css';
import hero1 from '../../assets/heroImg/hero-1.jpg';

const Hero = () => {
    return (
        <div className={classes.Hero}>
            <img src={hero1} alt="hero" />
        </div>
    );
};

export default Hero;
