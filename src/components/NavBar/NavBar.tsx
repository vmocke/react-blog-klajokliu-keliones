import React from 'react';
import classes from './NavBar.module.css';
import NavBarSearch from './NavBarSearch/NavBarSearch';
import NavBarLinks from './NavBarLinks/NavBarLinks';
import NavBarBurger from './NavBarBurger/NavBarBurger';

interface NavBar {
    onClickBurger: () => void;
}

const NavBar = (props: NavBar) => {
    return (
        <nav>
            <div className={classes.NavBar}>
                <NavBarBurger onClickBurger={props.onClickBurger} />
                <div className={classes.NavBarLinks}>
                    <NavBarLinks />
                </div>
                <NavBarSearch />
            </div>
        </nav>
    );
};

export default NavBar;
