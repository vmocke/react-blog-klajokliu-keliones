import * as actionTypes from './actionTypes';
// ON HOME PAGE START / RELOAD HANDLER
export const onHomePageReloadTicketsHandler = () => {
    return {
        type: actionTypes.GET_TICKETS_DATA_SAGA,
    };
};
export const onHomePageReloadTripsHandler = () => {
    return {
        type: actionTypes.GET_TRIPS_DATA_SAGA,
    };
};
// SEARCH INPUT HANDLER
export const onSearchHandler = (searchInput: string) => {
    return {
        type: actionTypes.SEARCH_INPUT_SAGA,
        searchInput: searchInput,
    };
};
export const onSearchHandlerFail = (err: any) => {
    return {
        type: actionTypes.SEARCH_INPUT_FAIL,
        err: err,
    };
};
