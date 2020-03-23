import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA2IO1ZS0lsPNvficYUtIW6sfJvlnF6QbA",
    authDomain: "crown-db-3f790.firebaseapp.com",
    databaseURL: "https://crown-db-3f790.firebaseio.com",
    projectId: "crown-db-3f790",
    storageBucket: "crown-db-3f790.appspot.com",
    messagingSenderId: "330484817953",
    appId: "1:330484817953:web:b91c7ce390d52b42124360",
    measurementId: "G-QD6R6D4T7T"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc( ` users/${userAuth.uid} ` );

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
            email,
            createdAt,
            ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;