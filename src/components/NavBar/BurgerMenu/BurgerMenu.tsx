import React from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavBarLinks from '../NavBarLinks/NavBarLinks';
import classes from './BurgerMenu.module.css';

interface BurgerMenu {
    openBurgerMenu: boolean;
    closeBurgerMenu: () => void;
}

const BurgerMenu = (props: BurgerMenu) => {
    let attachedClasses = [classes.BurgerMenu, classes.Close];
    if (props.openBurgerMenu) {
        attachedClasses = [classes.BurgerMenu, classes.Open];
    }

    return (
        <React.Fragment>
            <Backdrop show={props.openBurgerMenu} backdropClicked={props.closeBurgerMenu} />
            <div className={attachedClasses.join(' ')} onClick={props.closeBurgerMenu}>
                <NavBarLinks />
            </div>
        </React.Fragment>
    );
};

export default BurgerMenu;
