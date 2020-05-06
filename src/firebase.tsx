import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: 'AIzaSyDwH9yZfJVpzZrmNb6ZQH7L5njww6_1Bmo',
    authDomain: 'react-blog-klajokliu-keliones.firebaseapp.com',
    databaseURL: 'https://react-blog-klajokliu-keliones.firebaseio.com',
    projectId: 'react-blog-klajokliu-keliones',
    storageBucket: 'react-blog-klajokliu-keliones.appspot.com',
    messagingSenderId: '321128335501',
    appId: '1:321128335501:web:90d75d826ae2095ae0bac4',
    measurementId: 'G-WR4KE0HHG7',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
