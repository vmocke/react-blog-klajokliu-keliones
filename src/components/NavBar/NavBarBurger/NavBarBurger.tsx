import React from 'react';
import classes from './NavBarBurger.module.css';

interface NavBarDrawer {
    onClickBurger: () => void;
}

const NavBarBurger = (props: NavBarDrawer) => {
    return (
        <div onClick={props.onClickBurger} className={classes.NavBarBurger}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default NavBarBurger;
