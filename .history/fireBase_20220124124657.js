// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // <- needed if using firestore

const firebaseConfig = {};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
firebase.firestore();

export default firebase;
