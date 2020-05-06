import React from 'react';
import classes from './NavBarLinks.module.css';
import { NavLink } from 'react-router-dom';

const NavBarLinks = () => {
    return (
        <React.Fragment>
            <ul className={classes.NavBarList}>
                <li>
                    <NavLink
                        to="/home/0"
                        exact
                        activeClassName={classes.NavBarActive}
                        className={classes.NavBarInactive}
                    >
                        Pagrindinis
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/trips/0" activeClassName={classes.NavBarActive} className={classes.NavBarInactive}>
                        Kelionės ir patarimai
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tickets/0" activeClassName={classes.NavBarActive} className={classes.NavBarInactive}>
                        Bielietų pasiūlymai
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/shop" activeClassName={classes.NavBarActive} className={classes.NavBarInactive}>
                        Parduotuvė
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName={classes.NavBarActive} className={classes.NavBarInactive}>
                        Kontaktai
                    </NavLink>
                </li>
            </ul>
        </React.Fragment>
    );
};

export default NavBarLinks;
