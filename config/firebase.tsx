import * as firebase from "firebase";
import "firebase/auth";
require('firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyDUD981ttaVf1jG5EMryubgS--1ajWSRs0",
    authDomain: "insta-clone-4ca02.firebaseapp.com",
    projectId: "insta-clone-4ca02",
    storageBucket: "insta-clone-4ca02.appspot.com",
    messagingSenderId: "218523679955",
    appId: "1:218523679955:web:34a483a2bd0bc3b35ae826"
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db;
