import React, { useEffect, useCallback } from 'react';
import classes from './Contact.module.css';
import HeaderSpacer from '../../components/Header/HeaderSpacer/HeaderSpacer';
import PageTopTwoLines from '../../components/PageTopTwoLines/PageTopTwoLines';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../..';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import * as actionsShopContact from '../../store/actions/actionsShopContact';
import { redirecting } from '../../shared/utility';
import { useHistory } from 'react-router-dom';

const Contact = () => {
    const { push } = useHistory();
    const contact = useSelector((state: AppState) => state.reducerShopContact.contact.contacts);
    const contactImgUrl = useSelector((state: AppState) => state.reducerShopContact.contact.contactImgUrl);
    const error = useSelector((state: AppState) => state.reducerShopContact.error);

    const dispatch = useDispatch();
    const on_Get_Contact_Data = useCallback(() => dispatch(actionsShopContact.onGetContactData()), [dispatch]);

    useEffect(() => {
        if (contact.length === 0) {
            on_Get_Contact_Data();
        }
    }, [on_Get_Contact_Data, contact.length]);

    const contactInfo =
        contact &&
        contact.map((item: any) => {
            return <ContactInfo key={item.title} title={item.title} urlTitle={item.urlTitle} url={item.url} />;
        });

    const contactIMG = contactImgUrl && (
        <div className={classes.ContactImg}>
            <img src={contactImgUrl} alt="foto_" />
        </div>
    );

    return (
        <div className={classes.ContactDiv}>
            <HeaderSpacer />
            <PageTopTwoLines />
            {error && redirecting(error, push, 5000)}
            <div className={classes.Contact}>
                <div className={classes.ContactInfo}>
                    <div className={classes.ContactInfoHeader}>
                        <h1>Kontaktai</h1>
                    </div>
                    <div className={classes.ContactInfoHeaderDesc}>{contactInfo}</div>
                </div>
                {contactIMG}
            </div>
        </div>
    );
};

export default Contact;
