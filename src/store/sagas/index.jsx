import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { onGetContactDataSaga, onGetShopDataSaga } from './sagaShopContact';
import {
    onGetTicketsDataSaga,
    onTicektsPostServerSearchSaga,
    onNextPageTicketsHandlerSaga,
    onTicketsPostGetExtraContentSaga,
} from './sagaTickets';
import {
    onGetTripsDataSaga,
    onTripsPostServerSearchSaga,
    onNextPageTripsHandlerSaga,
    onTripsPostGetExtraContentSaga,
} from '../sagas/sagaTrips';
import { onSearchHandlerSaga } from '../sagas/sagaHome';

export function* watchShopContact() {
    yield all([
        takeLatest(actionTypes.GET_CONTACT_DATA_SAGA, onGetContactDataSaga),
        takeLatest(actionTypes.GET_SHOP_DATA_SAGA, onGetShopDataSaga),
    ]);
}
export function* watchTickets() {
    yield all([
        takeLatest(actionTypes.GET_TICKETS_DATA_SAGA, onGetTicketsDataSaga),
        takeEvery(actionTypes.ON_TICKETS_POST_GET_EXTRA_CONTENT_SAGA, onTicketsPostGetExtraContentSaga),
        takeEvery(actionTypes.ON_TICKETS_POST_SEARCH_SERVER_SAGA, onTicektsPostServerSearchSaga),
        takeEvery(actionTypes.ON_TICKETS_NEXTPAGE_SAGA, onNextPageTicketsHandlerSaga),
    ]);
}
export function* watchTrips() {
    yield all([
        takeLatest(actionTypes.GET_TRIPS_DATA_SAGA, onGetTripsDataSaga),
        takeEvery(actionTypes.ON_TRIPS_POST_GET_EXTRA_CONTENT_SAGA, onTripsPostGetExtraContentSaga),
        takeLatest(actionTypes.ON_TRIPS_POST_SEARCH_SERVER_SAGA, onTripsPostServerSearchSaga),
        takeLatest(actionTypes.ON_TRIPS_NEXTPAGE_SAGA, onNextPageTripsHandlerSaga),
    ]);
}
export function* watchHome() {
    yield all([takeEvery(actionTypes.SEARCH_INPUT_SAGA, onSearchHandlerSaga)]);
}
