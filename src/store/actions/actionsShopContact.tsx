import * as actionTypes from './actionTypes';
// GET CONTACT DATA FROM SERVER
export const onGetContactData = () => {
    return {
        type: actionTypes.GET_CONTACT_DATA_SAGA,
    };
};
export const onGetContactDataOk = (contacts: {}[], contactImgUrl: string) => {
    return {
        type: actionTypes.GET_CONTACT_DATA_OK,
        contacts: contacts,
        contactImgUrl: contactImgUrl,
    };
};
export const onGetContactDataFail = (error: any) => {
    return {
        type: actionTypes.GET_CONTACT_DATA_FAIL,
        error: error,
    };
};
// GET SHOP DATA FROM SERVER
export const onGetShopData = () => {
    return {
        type: actionTypes.GET_SHOP_DATA_SAGA,
    };
};
export const onGetShopDataOk = (headerImgs: {}, content: {}[]) => {
    return {
        type: actionTypes.GET_SHOP_DATA_OK,
        headerImgs: headerImgs,
        content: content,
    };
};
export const onGetShopDataFail = (error: any) => {
    return {
        type: actionTypes.GET_SHOP_DATA_FAIL,
        error: error,
    };
};
// ON SHOP FORM SEND HANDLER
export const onShopFormSend = (reqForm: {}) => {
    return {
        type: actionTypes.SEND_SHOP_FORM_TO_SERVER_SAGA,
        reqForm: reqForm,
    };
};
export const onShopFormSendOk = () => {
    return {
        type: actionTypes.SEND_SHOP_FORM_TO_SERVER_OK,
    };
};
export const onShopFormSendFail = (err: any) => {
    return {
        type: actionTypes.SEND_SHOP_FORM_TO_SERVER_FAIL,
        err: err,
    };
};
