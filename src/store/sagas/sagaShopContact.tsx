import { put } from 'redux-saga/effects';
import * as actionsShopContact from '../actions/actionsShopContact';
import firebase from '../../firebase';

const db = firebase.firestore();
const shopRef = db.collection('pageData').doc('shop');
const contactRef = db.doc('pageData/contact');

export function* onGetContactDataSaga() {
    try {
        const res = yield contactRef.get().then((doc) => doc.data());
        const contacts: {}[] = res.contacts;
        const contactImgUrl: string = res.contactImgUrl;
        yield put(actionsShopContact.onGetContactDataOk(contacts, contactImgUrl));
    } catch (err) {
        yield put(actionsShopContact.onGetContactDataFail(err));
    }
}

export function* onGetShopDataSaga() {
    try {
        const res = yield shopRef.get().then((doc) => doc.data());
        const headerImgs: {} = res.headerImgs;
        const content: {}[] = res.content;
        yield put(actionsShopContact.onGetShopDataOk(headerImgs, content));
    } catch (err) {
        yield put(actionsShopContact.onGetShopDataFail(err));
    }
}
