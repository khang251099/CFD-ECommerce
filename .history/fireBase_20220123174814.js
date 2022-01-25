// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
​​import {
    ​ GoogleAuthProvider,
    ​​ getAuth,
    ​​  signInWithPopup,
    ​​  signInWithEmailAndPassword,
    ​​  createUserWithEmailAndPassword,
    ​​  sendPasswordResetEmail,
    ​​  signOut,
    ​​} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
​​import {
    ​​  getFirestore,
    ​​  query,
    ​​  getDocs,
    ​​  collection,
    ​​  where,
    ​​  addDoc,
    ​​} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1goXySrgJfhDmotmGgsL5sEq0nqtQ5uk",
  authDomain: "cfd-ecommerce.firebaseapp.com",
  projectId: "cfd-ecommerce",
  storageBucket: "cfd-ecommerce.appspot.com",
  messagingSenderId: "271780743060",
  appId: "1:271780743060:web:20ab4de90746c9616cb181",
  measurementId: "G-XY0PF9C9ZS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
