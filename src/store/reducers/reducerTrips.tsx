import * as actionsTypes from '../actions/actionTypes';

export interface stateTS {
    trips: {}[];
    error: any;
}

const initialState: stateTS = {
    trips: [],
    error: '',
};
// GETTING TRIPS DATA FROM SERVER
const onGetTripsData_ = (state: stateTS) => {
    return {
        ...state,
        error: '',
    };
};
const onGetTripsDataOk_ = (state: stateTS, action: { trips: {}[] }) => {
    return {
        ...state,
        error: '',
        trips: action.trips,
    };
};
const onGetTripsDataFail_ = (state: stateTS, action: { error: any }) => {
    return {
        ...state,
        error: action.error,
    };
};
// TRIPS POST GET EXTRA CONTENT
const onTripsPostGetExtraContent_ = (state: stateTS) => {
    return {
        ...state,
        error: '',
    };
};
const onTripsPostGetExtraContentOk_ = (state: stateTS, action: { post: { id: string; extraContent: [] } }) => {
    const copyStateTrips: {}[] = [...state.trips];
    const elIndex: number = copyStateTrips.findIndex((el: any) => el.id === action.post.id);
    const postByElIndex: {} = copyStateTrips[elIndex];
    Object.assign(postByElIndex, { extraContent: action.post.extraContent });
    copyStateTrips[elIndex] = { ...postByElIndex };

    return {
        ...state,
        error: '',
        trips: copyStateTrips,
    };
};
const onTripsPostGetExtraContentFail_ = (state: stateTS, action: { err: any }) => {
    return {
        ...state,
        error: action.err,
    };
};
// TRIPS POST SEARCH SERVER
const onTripsPostServerSearch_ = (state: stateTS) => {
    return {
        ...state,
        error: '',
    };
};
const onTripsPostServerSearchOk_ = (state: stateTS, action: { post: {} }) => {
    return {
        ...state,
        error: '',
        trips: [action.post],
    };
};
const onTripsPostServerSearchFail_ = (state: stateTS, action: { err: any }) => {
    return {
        ...state,
        error: action.err,
    };
};
// ON TRIPS NEXTPAGE HANDLER
const onNextPageTripsHandler_ = (state: stateTS) => {
    return {
        ...state,
        error: '',
    };
};
const onNextPageTripsHandlerOk_ = (state: stateTS, action: { trips: {}[] }) => {
    return {
        ...state,
        error: '',
        trips: [...state.trips, ...action.trips],
    };
};
const onNextPageTripsHandlerFail_ = (state: stateTS, action: { err: any }) => {
    return {
        ...state,
        error: action.err,
    };
};
// REDUCER
const reducer = (state = initialState, action: any): stateTS => {
    switch (action.type) {
        // GETTING TRIPS DATA FROM SERVER
        case actionsTypes.GET_TRIPS_DATA_SAGA:
            return onGetTripsData_(state);
        case actionsTypes.GET_TRIPS_DATA_OK:
            return onGetTripsDataOk_(state, action);
        case actionsTypes.GET_TRIPS_DATA_FAIL:
            return onGetTripsDataFail_(state, action);
        // TRIPS POST GET EXTRA CONTENT
        case actionsTypes.ON_TRIPS_POST_GET_EXTRA_CONTENT_SAGA:
            return onTripsPostGetExtraContent_(state);
        case actionsTypes.ON_TRIPS_POST_GET_EXTRA_CONTENT_OK:
            return onTripsPostGetExtraContentOk_(state, action);
        case actionsTypes.ON_TRIPS_POST_GET_EXTRA_CONTENT_FAIL:
            return onTripsPostGetExtraContentFail_(state, action);
        // TRIPS POST SEARCH SERVER
        case actionsTypes.ON_TRIPS_POST_SEARCH_SERVER_SAGA:
            return onTripsPostServerSearch_(state);
        case actionsTypes.ON_TRIPS_POST_SEARCH_SERVER_OK:
            return onTripsPostServerSearchOk_(state, action);
        case actionsTypes.ON_TRIPS_POST_SEARCH_SERVER_FAIL:
            return onTripsPostServerSearchFail_(state, action);
        // ON TRIPS NEXTPAGE HANDLER
        case actionsTypes.ON_TRIPS_NEXTPAGE_SAGA:
            return onNextPageTripsHandler_(state);
        case actionsTypes.ON_TRIPS_NEXTPAGE_OK:
            return onNextPageTripsHandlerOk_(state, action);
        case actionsTypes.ON_TRIPS_NEXTPAGE_FAIL:
            return onNextPageTripsHandlerFail_(state, action);
        default:
            return state;
    }
};

export default reducer;
