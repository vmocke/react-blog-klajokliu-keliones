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
