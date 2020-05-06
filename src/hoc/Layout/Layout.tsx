import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import BurgerMenu from '../../components/NavBar/BurgerMenu/BurgerMenu';

interface Layout {
    children: any;
}

const Layout = (props: Layout) => {
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);

    const burgerMenuOpenHandler = () => {
        setShowBurgerMenu(!showBurgerMenu);
    };
    const burgerMenuCloseHandler = () => {
        setShowBurgerMenu(false);
    };

    return (
        <React.Fragment>
            <Header />
            <NavBar onClickBurger={burgerMenuOpenHandler} />
            <BurgerMenu openBurgerMenu={showBurgerMenu} closeBurgerMenu={burgerMenuCloseHandler} />
            {props.children}
            <Footer />
        </React.Fragment>
    );
};

export default Layout;
