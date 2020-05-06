import * as actionsTypes from './actionTypes';
// GET TRIPS DATA FROM SERVER
export const onGetTripsData = () => {
    return {
        type: actionsTypes.GET_TRIPS_DATA_SAGA,
    };
};
export const onGetTripsDataOk = (trips: {}[]) => {
    return {
        type: actionsTypes.GET_TRIPS_DATA_OK,
        trips: trips,
    };
};
export const onGetTripsDataFail = (err: any) => {
    return {
        type: actionsTypes.GET_TRIPS_DATA_FAIL,
        error: err,
    };
};
// TRIPS POST GET EXTRA CONTENT
export const onTripsPostGetExtraContent = (urlId: string) => {
    return {
        type: actionsTypes.ON_TRIPS_POST_GET_EXTRA_CONTENT_SAGA,
        urlId: urlId,
    };
};
export const onTripsPostGetExtraContentOk = (post: {}) => {
    return {
        type: actionsTypes.ON_TRIPS_POST_GET_EXTRA_CONTENT_OK,
        post: post,
    };
};
export const onTripsPostGetExtraContentFail = (err: any) => {
    return {
        type: actionsTypes.ON_TRIPS_POST_GET_EXTRA_CONTENT_FAIL,
        err: err,
    };
};
// TRIPS TRIPS SEARCH SERVER
export const onTripsPostServerSearch = (urlId: string) => {
    return {
        type: actionsTypes.ON_TRIPS_POST_SEARCH_SERVER_SAGA,
        urlId: urlId,
    };
};
export const onTripsPostServerSearchOk = (post: {}[]) => {
    return {
        type: actionsTypes.ON_TRIPS_POST_SEARCH_SERVER_OK,
        post: post,
    };
};
export const onTripsPostServerSearchFail = (err: any) => {
    return {
        type: actionsTypes.ON_TRIPS_POST_SEARCH_SERVER_FAIL,
        err: err,
    };
};
// ON TRIPS NEXTPAGE HANDLER
export const onNextPageTripsHandler = (lastPostDate: {}[]) => {
    return {
        type: actionsTypes.ON_TRIPS_NEXTPAGE_SAGA,
        lastPostDate: lastPostDate,
    };
};
export const onNextPageTripsHandlerOk = (trips: {}[]) => {
    return {
        type: actionsTypes.ON_TRIPS_NEXTPAGE_OK,
        trips: trips,
    };
};
export const onNextPageTripsHandlerFail = (err: any) => {
    return {
        type: actionsTypes.ON_TRIPS_NEXTPAGE_FAIL,
        err: err,
    };
};
