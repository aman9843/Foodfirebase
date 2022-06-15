// import {getApp, getApps, initializeApp} from 'firebase/app'
// import { getFirestore} from 'firebase/firestore/lite'
// import { getStorage } from "firebase/storage";
// import {getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider} from 'firebase/auth'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'






const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };



// const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
// const firestore = getFirestore(app);
// const storage = getStorage(app);

// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth()
// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// const facebookAuthProvider = new firebase.auth.FacebookAuthProvider(); 



// // Google Authentication
// const firebaseAuth = getAuth(app)
// const gprovider = new GoogleAuthProvider();
// const googleAuthProvider = signInWithPopup(firebaseAuth,gprovider)

// // facebook Authentication
// const fprovider = new FacebookAuthProvider()
// const facebookAuthProvider = signInWithPopup(firebaseAuth,fprovider)

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const fs = firebase.firestore();
export const storage = getStorage(app);



export default app;
