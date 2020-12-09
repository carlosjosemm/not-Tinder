// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//install firebase with npm i firebase

import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDgNr_FFXFwCxthM76WkOeL81A1S_2-IHU",
    authDomain: "tinder-cm.firebaseapp.com",
    projectId: "tinder-cm",
    storageBucket: "tinder-cm.appspot.com",
    messagingSenderId: "197665461705",
    appId: "1:197665461705:web:871c1d332ee133a8224418",
    measurementId: "G-VXC6QF2ZJQ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};