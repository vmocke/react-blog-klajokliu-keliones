import * as actionsTypes from '../actions/actionTypes';

export interface stateTS {
    tickets: {}[];
    ticketsBackground: string;
    error: any;
}

const initialState: stateTS = {
    tickets: [],
    ticketsBackground: '',
    error: '',
};
// GET TICKETS DATA FROM SERVER
const getTicketsData_ = (state: stateTS) => {
    return {
        ...state,
        error: '',
    };
};
const getTicketsOk_ = (state: stateTS, action: { tickets: {}[]; ticketsBackground: string }) => {
    return {
        ...state,
        error: '',
        tickets: action.tickets,
        ticketsBackground: action.ticketsBackground,
    };
};
const getTicketsFail_ = (state: stateTS, action: { error: any }) => {
    return {
        ...state,
        error: action.error,
    };
};
// TICKETS POST GET EXTRA CONTENT
const onTicketsPostGetExtraContent_ = (state: stateTS) => {
    return {
        ...state,
        error: '',
    };
};
const onTicketsPostGetExtraContentOk_ = (state: stateTS, action: { post: { id: string; extraContent: [] } }) => {
    const copyStateTickets: {}[] = [...state.tickets];
    const elIndex: number = copyStateTickets.findIndex((el: any) => el.id === action.post.id);
    const postByElIndex: {} = copyStateTickets[elIndex];
    Object.assign(postByElIndex, { extraContent: action.post.extraContent });
    copyStateTickets[elIndex] = { ...postByElIndex };

    return {
        ...state,
        error: '',
        tickets: copyStateTickets,
    };
};
const onTicketsPostGetExtraContentFail_ = (state: stateTS, action: { err: any }) => {
    return {
        ...state,
        error: action.err,
    };
};
// TICKETS POST SEARCH SERVER
const onTicektsPostServerSearch_ = (state: stateTS) => {
    return {
        ...state,
        error: '',
    };
};
const onTicektsPostServerSearchOk_ = (state: stateTS, action: { post: {} }) => {
    return {
        ...state,
        error: '',
        tickets: [action.post],
    };
};
const onTicektsPostServerSearchFail_ = (state: stateTS, action: { err: any }) => {
    return {
        ...state,
        error: action.err,
    };
};
// ON TICKETS NEXTPAGE HANDLER
const onNextPageTicketsHandler_ = (state: stateTS) => {
    return {
        ...state,
        error: '',
    };
};
const onNextPageTicketsHandlerOk_ = (state: stateTS, action: { tickets: {}[] }) => {
    return {
        ...state,
        error: '',
        tickets: [...state.tickets, ...action.tickets],
    };
};
const onNextPageTicketsHandlerFail_ = (state: stateTS, action: { err: any }) => {
    return {
        ...state,
        error: action.err,
    };
};
// REDUCER
const reducer = (state = initialState, action: any): stateTS => {
    switch (action.type) {
        // GET TICKETS DATA FROM SERVER
        case actionsTypes.GET_TICKETS_DATA_SAGA:
            return getTicketsData_(state);
        case actionsTypes.GET_TICKETS_DATA_OK:
            return getTicketsOk_(state, action);
        case actionsTypes.GET_TICKETS_DATA_FAIL:
            return getTicketsFail_(state, action);
        // TICKETS POST GET EXTRA CONTENT
        case actionsTypes.ON_TICKETS_POST_GET_EXTRA_CONTENT_SAGA:
            return onTicketsPostGetExtraContent_(state);
        case actionsTypes.ON_TICKETS_POST_GET_EXTRA_CONTENT_OK:
            return onTicketsPostGetExtraContentOk_(state, action);
        case actionsTypes.ON_TICKETS_POST_GET_EXTRA_CONTENT_FAIL:
            return onTicketsPostGetExtraContentFail_(state, action);
        // TICKETS POST SEARCH SERVER
        case actionsTypes.ON_TICKETS_POST_SEARCH_SERVER_SAGA:
            return onTicektsPostServerSearch_(state);
        case actionsTypes.ON_TICKETS_POST_SEARCH_SERVER_OK:
            return onTicektsPostServerSearchOk_(state, action);
        case actionsTypes.ON_TICKETS_POST_SEARCH_SERVER_FAIL:
            return onTicektsPostServerSearchFail_(state, action);
        // ON TICKETS NEXTPAGE HANDLER
        case actionsTypes.ON_TICKETS_NEXTPAGE_SAGA:
            return onNextPageTicketsHandler_(state);
        case actionsTypes.ON_TICKETS_NEXTPAGE_OK:
            return onNextPageTicketsHandlerOk_(state, action);
        case actionsTypes.ON_TICKETS_NEXTPAGE_FAIL:
            return onNextPageTicketsHandlerFail_(state, action);
        default:
            return state;
    }
};

export default reducer;
