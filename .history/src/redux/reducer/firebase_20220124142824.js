import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
