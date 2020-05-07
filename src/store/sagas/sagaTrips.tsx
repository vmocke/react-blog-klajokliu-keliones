import * as actionsTrips from '../actions/actionsTrips';
import { put } from 'redux-saga/effects';
import firebase from '../../firebase';

const db = firebase.firestore();
const tripsRef = db.collection('tripsPosts');
// GET TRIPS DATA FROM SERVER
export function* onGetTripsDataSaga() {
    try {
        const trips: {}[] = [];
        yield tripsRef
            .orderBy('date', 'desc')
            .limit(5)
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => trips.push({ ...doc.data() }));
            });
        if (trips.length === 0) {
            throw Error('Failed to get document because the client is offline.');
        }
        yield put(actionsTrips.onGetTripsDataOk(trips));
    } catch (error) {
        yield put(actionsTrips.onGetTripsDataFail(error));
    }
}
// TRIPS POST GET EXTRA CONTENT
export function* onTripsPostGetExtraContentSaga(urlId: { type: string; urlId: string }) {
    const id = urlId.urlId;
    try {
        const post: any = { id: id, extraContent: [] };
        yield tripsRef
            .doc(id)
            .collection('extraContent')
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    Object.assign(post.extraContent.push(doc.data()));
                });
            });
        yield put(actionsTrips.onTripsPostGetExtraContentOk(post));
    } catch (error) {
        yield put(actionsTrips.onTripsPostGetExtraContentFail(error));
    }
}
// TRIPS POST SEARCH SERVER
export function* onTripsPostServerSearchSaga(urlId: { type: string; urlId: string }) {
    const id = urlId.urlId;

    try {
        const post: any = { extraContent: [] };
        yield tripsRef
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    Object.assign(post, doc.data());
                } else {
                    throw Error(`Toks postas nerastas: ${id}.`);
                }
            });
        yield tripsRef
            .doc(id)
            .collection('extraContent')
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    Object.assign(post.extraContent.push(doc.data()));
                });
            });
        yield put(actionsTrips.onTripsPostServerSearchOk(post));
    } catch (error) {
        yield put(actionsTrips.onTripsPostServerSearchFail(error));
    }
}
// ON TRIPS NEXTPAGE HANDLER
export function* onNextPageTripsHandlerSaga(lastPostDate: { type: string; lastPostDate: {}[] }) {
    const postDate: {}[] = lastPostDate.lastPostDate;
    try {
        const trips: {}[] = [];
        yield tripsRef
            .orderBy('date', 'desc')
            .startAfter(postDate[0])
            .limit(4)
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => trips.push({ ...doc.data() }));
            });
        yield put(actionsTrips.onNextPageTripsHandlerOk(trips));
    } catch (error) {
        yield put(actionsTrips.onNextPageTripsHandlerFail(error));
    }
}
