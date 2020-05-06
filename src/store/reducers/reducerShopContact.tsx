import * as actionTypes from '../actions/actionTypes';

export interface stateTS {
    shop: {
        headerImgs: {
            smallIcon: string;
            imgs: string[];
        };
        content: {}[];
    };
    contact: {
        contacts: {}[];
        contactImgUrl: string;
    };
    error: any;
}

const initialState: stateTS = {
    shop: {
        headerImgs: { smallIcon: '', imgs: [] },
        content: [],
    },
    contact: {
        contacts: [],
        contactImgUrl: '',
    },
    error: '',
};
// GET CONTACT DATA FROM SERVER
const onGetContactData_ = (state: stateTS) => {
    return {
        ...state,
        error: '',
    };
};
const onGetContactDataOk_ = (state: stateTS, action: { contacts: {}[]; contactImgUrl: string }) => {
    return {
        ...state,
        error: '',
        contact: { ...state.contact, contacts: action.contacts, contactImgUrl: action.contactImgUrl },
    };
};
const onGetContactDataFail_ = (state: stateTS, action: { error: any }) => {
    return {
        ...state,
        error: action.error,
    };
};
// GET CONTACT DATA FROM SERVER
const onGetShopData_ = (state: stateTS) => {
    return {
        ...state,
        error: '',
    };
};
const onGetShopDataOk_ = (
    state: stateTS,
    action: { headerImgs: { smallIcon: string; imgs: string[] }; content: {}[] },
) => {
    return {
        ...state,
        error: '',
        shop: { ...state.shop, content: action.content, headerImgs: action.headerImgs },
    };
};
const onGetShopDataFail_ = (state: stateTS, action: { error: any }) => {
    return {
        ...state,
        error: action.error,
    };
};
// REDUCER
const reducer = (state = initialState, action: any): stateTS => {
    switch (action.type) {
        // GET CONTACT DATA FROM SERVER
        case actionTypes.GET_CONTACT_DATA_SAGA:
            return onGetContactData_(state);
        case actionTypes.GET_CONTACT_DATA_OK:
            return onGetContactDataOk_(state, action);
        case actionTypes.GET_CONTACT_DATA_FAIL:
            return onGetContactDataFail_(state, action);
        // GET SHOP DATA FROM SERVER
        case actionTypes.GET_SHOP_DATA_SAGA:
            return onGetShopData_(state);
        case actionTypes.GET_SHOP_DATA_OK:
            return onGetShopDataOk_(state, action);
        case actionTypes.GET_SHOP_DATA_FAIL:
            return onGetShopDataFail_(state, action);
        default:
            return state;
    }
};

export default reducer;
