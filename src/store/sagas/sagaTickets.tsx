import { put } from 'redux-saga/effects';
import firebase from '../../firebase';
import * as actionsTickets from '../actions/actionsTickets';
import descBackground from '../../assets/img/ticketsImg/descBackground.png';

const db = firebase.firestore();
const ticketsPostsRef = db.collection('ticketsPosts');
// GET TICKETS DATA FROM SERVER
export function* onGetTicketsDataSaga() {
    try {
        const tickets: {}[] = [];
        const ticketsObjBackground: any = {};
        let ticketsBackground: any | string;

        yield ticketsPostsRef
            .doc('ticketsBackground')
            .get()
            .then((doc) => {
                Object.assign(ticketsObjBackground, doc.data());
                ticketsBackground = ticketsObjBackground.backgroundImg;
            });
        if (!ticketsBackground) {
            ticketsBackground = `${descBackground}`;
        }

        yield ticketsPostsRef
            .orderBy('date', 'desc')
            .limit(5)
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    tickets.push({
                        ...doc.data(),
                    });
                });
            });
        yield put(actionsTickets.onGetTicketsDataOk(tickets, ticketsBackground));
    } catch (error) {
        yield put(actionsTickets.onGetTicketsDataFail(error));
    }
}
// TICKETS POST GET EXTRA CONTENT
export function* onTicketsPostGetExtraContentSaga(urlId: { type: string; urlId: string }) {
    const id = urlId.urlId;
    try {
        const post: any = { id: id, extraContent: [] };
        yield ticketsPostsRef
            .doc(id)
            .collection('extraContent')
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    Object.assign(post.extraContent.push(doc.data()));
                });
            });
        yield put(actionsTickets.onTicketsPostGetExtraContentOk(post));
    } catch (error) {
        yield put(actionsTickets.onTicketsPostGetExtraContentFail(error));
    }
}
// TICKETS POST SEARCH SERVER
export function* onTicektsPostServerSearchSaga(urlId: { type: string; urlId: string }) {
    const id = urlId.urlId;

    try {
        const post: any = { extraContent: [] };
        yield ticketsPostsRef
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    Object.assign(post, doc.data());
                } else {
                    throw Error(`Toks postas nerastas: ${id}.`);
                }
            });
        yield ticketsPostsRef
            .doc(id)
            .collection('extraContent')
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    Object.assign(post.extraContent.push(doc.data()));
                });
            });
        yield put(actionsTickets.onTicektsPostServerSearchOk(post));
    } catch (error) {
        yield put(actionsTickets.onTicektsPostServerSearchFail(error));
    }
}
// ON TICKETS NEXTPAGE HANDLER
export function* onNextPageTicketsHandlerSaga(lastPostDate: { type: string; lastPostDate: {}[] }) {
    const postDate: {}[] = lastPostDate.lastPostDate;
    try {
        const tickets: {}[] = [];
        yield ticketsPostsRef
            .orderBy('date', 'desc')
            .startAfter(postDate[0])
            .limit(4)
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => tickets.push({ ...doc.data() }));
            });
        yield put(actionsTickets.onNextPageTicketsHandlerOk(tickets));
    } catch (error) {
        yield put(actionsTickets.onNextPageTicketsHandlerFail(error));
    }
}
