import { put } from 'redux-saga/effects';
import * as actionsShopContact from '../actions/actionsShopContact';
import firebase from '../../firebase';
import imgMap from '../../assets/img/contactImg/contact.png';
import vanduo from '../../assets/img/shopImg/vanduo.png';
import shopImg_1 from '../../assets/img/shopImg/shopImg_1.png';
import shopImg_2 from '../../assets/img/shopImg/shopImg_2.png';
import shopImg_3 from '../../assets/img/shopImg/shopImg_3.png';
import shopMap from '../../assets/img/shopImg/shopMap.png';

const db = firebase.firestore();
const shopRef = db.collection('pageData').doc('shop');
const contactRef = db.doc('pageData/contact');

export function* onGetContactDataSaga() {
    try {
        const res = yield contactRef.get().then((doc) => doc.data());
        const contacts: {}[] = res.contacts;
        let contactImgUrl: string = res.contactImgUrl;
        if (!contactImgUrl) {
            contactImgUrl = `${imgMap}`;
        }
        yield put(actionsShopContact.onGetContactDataOk(contacts, contactImgUrl));
    } catch (err) {
        yield put(actionsShopContact.onGetContactDataFail(err));
    }
}

export function* onGetShopDataSaga() {
    try {
        const res = yield shopRef.get().then((doc) => doc.data());
        const headerImgs: any = res.headerImgs;
        const content: { img: string; title: string }[] = res.content;
        if (!headerImgs.smallIcon) {
            Object.assign(headerImgs, { smallIcon: `${vanduo}` });
        }
        const testBigHeaderImgs = headerImgs.imgs.filter((item: string) => item === '');
        if (testBigHeaderImgs.length !== 0) {
            Object.assign(headerImgs, { imgs: [`${shopImg_1}`, `${shopImg_2}`, `${shopImg_3}`] });
        }
        if (content.length !== 0) {
            content.map((item) => {
                if (item.img === '') {
                    switch (item.title) {
                        case 'Žemėlapio sudarymas':
                            Object.assign(item, { img: `${shopMap}` });
                            break;
                        case 'Pigių bilietų suradimas':
                            Object.assign(item, { img: `${shopMap}` });
                            break;
                        case 'Paketo sudarymas':
                            Object.assign(item, { img: `${shopMap}` });
                            break;
                        default:
                            break;
                    }
                }
                return null;
            });
        }
        yield put(actionsShopContact.onGetShopDataOk(headerImgs, content));
    } catch (err) {
        yield put(actionsShopContact.onGetShopDataFail(err));
    }
}
