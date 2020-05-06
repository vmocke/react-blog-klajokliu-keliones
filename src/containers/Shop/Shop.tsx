import React, { useEffect, useCallback } from 'react';
import classes from './Shop.module.css';
import HeaderSpacer from '../../components/Header/HeaderSpacer/HeaderSpacer';
import PageTopTwoLines from '../../components/PageTopTwoLines/PageTopTwoLines';
import ShopCard from '../../components/Shop/ShopCard/ShopCard';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../..';
import * as actionsShopContact from '../../store/actions/actionsShopContact';
import ImgComp from '../../components/ImgComp/ImgComp';
import { useHistory } from 'react-router-dom';
import { redirecting } from '../../shared/utility';

const Shop = () => {
    const { push } = useHistory();
    const imgs = useSelector((state: AppState) => state.reducerShopContact.shop.headerImgs.imgs);
    const smallIcon = useSelector((state: AppState) => state.reducerShopContact.shop.headerImgs.smallIcon);
    const content = useSelector((state: AppState) => state.reducerShopContact.shop.content);
    const error = useSelector((state: AppState) => state.reducerShopContact.error);

    const dispatch = useDispatch();
    const on_Get_Shop_Data = useCallback(() => dispatch(actionsShopContact.onGetShopData()), [dispatch]);

    useEffect(() => {
        if (content.length === 0) {
            on_Get_Shop_Data();
        }
    }, [on_Get_Shop_Data, content.length]);

    const headerIMGS =
        imgs.length !== 0 &&
        imgs.map((item: string, i: number) => {
            return <ImgComp key={i} ImgInlineBorder={true} src={item} />;
        });

    const headerIcon = smallIcon && (
        <div className={classes.ShopWater}>
            <img src={smallIcon} alt="smallIcon" />
        </div>
    );

    const shopContent =
        content.length !== 0 &&
        content.map((item: any) => {
            return (
                <ShopCard
                    key={item.title}
                    id={item.title}
                    title={item.title}
                    price={item.price}
                    text={item.text}
                    src={item.img}
                />
            );
        });

    return (
        <div className={classes.Shop}>
            <HeaderSpacer />
            <PageTopTwoLines />
            <div className={classes.ShopImgs}>
                {headerIMGS}
                {headerIcon}
            </div>
            {error && redirecting(error, push, 5000)}
            {shopContent}
        </div>
    );
};

export default Shop;
