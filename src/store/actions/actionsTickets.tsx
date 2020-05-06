import * as actionsTypes from './actionTypes';
// GET TICKETS DATA FROM SERVER
export const onGetTicketsData = () => {
    return {
        type: actionsTypes.GET_TICKETS_DATA_SAGA,
    };
};
export const onGetTicketsDataOk = (tickets: {}[], ticketsBackground: string) => {
    return {
        type: actionsTypes.GET_TICKETS_DATA_OK,
        tickets: tickets,
        ticketsBackground: ticketsBackground,
    };
};
export const onGetTicketsDataFail = (err: any) => {
    return {
        type: actionsTypes.GET_TICKETS_DATA_FAIL,
        error: err,
    };
};
// TICKETS POST GET EXTRA CONTENT
export const onTicketsPostGetExtraContent = (urlId: string) => {
    return {
        type: actionsTypes.ON_TICKETS_POST_GET_EXTRA_CONTENT_SAGA,
        urlId: urlId,
    };
};
export const onTicketsPostGetExtraContentOk = (post: {}) => {
    return {
        type: actionsTypes.ON_TICKETS_POST_GET_EXTRA_CONTENT_OK,
        post: post,
    };
};
export const onTicketsPostGetExtraContentFail = (err: any) => {
    return {
        type: actionsTypes.ON_TICKETS_POST_GET_EXTRA_CONTENT_FAIL,
        err: err,
    };
};
// TICKETS POST SEARCH SERVER
export const onTicektsPostServerSearch = (urlId: string) => {
    return {
        type: actionsTypes.ON_TICKETS_POST_SEARCH_SERVER_SAGA,
        urlId: urlId,
    };
};
export const onTicektsPostServerSearchOk = (post: {}) => {
    return {
        type: actionsTypes.ON_TICKETS_POST_SEARCH_SERVER_OK,
        post: post,
    };
};
export const onTicektsPostServerSearchFail = (err: any) => {
    return {
        type: actionsTypes.ON_TICKETS_POST_SEARCH_SERVER_FAIL,
        err: err,
    };
};
// ON TICKETS NEXTPAGE HANDLER
export const onNextPageTicketsHandler = (lastPostDate: {}[]) => {
    return {
        type: actionsTypes.ON_TICKETS_NEXTPAGE_SAGA,
        lastPostDate: lastPostDate,
    };
};
export const onNextPageTicketsHandlerOk = (tickets: {}[]) => {
    return {
        type: actionsTypes.ON_TICKETS_NEXTPAGE_OK,
        tickets: tickets,
    };
};
export const onNextPageTicketsHandlerFail = (err: any) => {
    return {
        type: actionsTypes.ON_TICKETS_NEXTPAGE_FAIL,
        err: err,
    };
};
