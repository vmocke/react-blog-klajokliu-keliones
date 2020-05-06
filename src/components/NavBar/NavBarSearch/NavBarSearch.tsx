import React, { useState, useCallback } from 'react';
import classes from './NavBarSearch.module.css';
import SVGIcons2 from '../../../assets/SVGIcon/SVGIcons2';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actionsHome from '../../../store/actions/actionsHome';

const NavBarSearch = () => {
    const { url } = useRouteMatch();
    const { push } = useHistory();
    const [searchInput, setSearchInput] = useState('');

    const dispatch = useDispatch();
    const on_Search_Handler = useCallback((searchInput: string) => dispatch(actionsHome.onSearchHandler(searchInput)), [
        dispatch,
    ]);

    const onInputChangeHandler = (e: any) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    const onSearchSubmitHandler = (e: any, searchInput: string) => {
        e.preventDefault();
        if (url !== '/home/0') {
            push('/home/0');
        }
        on_Search_Handler(searchInput);
        setSearchInput('');
    };

    return (
        <form className={classes.NavBarSearchForm} onSubmit={(e) => onSearchSubmitHandler(e, searchInput)}>
            <input
                className={classes.NavBarSearchInput}
                type="text"
                placeholder="Ieškoti..."
                value={searchInput}
                onChange={(e) => onInputChangeHandler(e)}
            />
            <SVGIcons2
                name="search"
                className={classes.NavBarSearchSvg}
                onClick={(e) => onSearchSubmitHandler(e, searchInput)}
                type="submit"
            />
        </form>
    );
};

export default NavBarSearch;
