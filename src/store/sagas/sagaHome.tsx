import * as actionsHome from '../actions/actionsHome';
import * as actionsTickets from '../actions/actionsTickets';
import * as actionsTrips from '../actions/actionsTrips';
import { put } from 'redux-saga/effects';
import firebase from '../../firebase';
import descBackground from '../../assets/img/ticketsImg/descBackground.png';

const db = firebase.firestore();
const ticketsPostsRef = db.collection('ticketsPosts');
const tripsPostsRef = db.collection('tripsPosts');
// SEARCH INPUT HANDLER
export function* onSearchHandlerSaga(searchInput: { type: string; searchInput: string }) {
    const keyword: string = searchInput.searchInput;
    try {
        const tickets: {}[] = [];
        const ticketsObjBackground: any = {};
        let ticketsBackground: any | string;
        const trips: {}[] = [];
        yield ticketsPostsRef
            .where('title', '<=', `${keyword}`)
            .limit(5)
            .get()
            .then((snapshot) => {
                /*if (snapshot.empty) {
                    throw Error('snaphot tickets empty');
                }*/
                snapshot.forEach((doc) => tickets.push(doc.data()));
            });
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
        yield tripsPostsRef
            .where('title', '<=', `${keyword}`)
            .limit(5)
            .get()
            .then((snapshot) => {
                /*if (snapshot.empty) {
                    throw Error('snaphot trips empty');
                }*/
                snapshot.forEach((doc) => trips.push(doc.data()));
            });
        if (tickets.length !== 0) {
            yield put(actionsTickets.onGetTicketsDataOk(tickets, ticketsBackground));
        }
        if (trips.length !== 0) {
            yield put(actionsTrips.onGetTripsDataOk(trips));
        }
    } catch (error) {
        //console.error(error);
        yield put(actionsHome.onSearchHandlerFail(error));
    }
}
