import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // <- needed if using firestore

const firebaseConfig = {};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

firebase.firestore(); // <- needed if using firestore

export default firebase;
