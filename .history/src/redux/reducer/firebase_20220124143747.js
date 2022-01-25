import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUb3Yb5YtWkVhn3ceYkp40Ad2dff76Was",
  authDomain: "cfd-ecommerce-28fc6.firebaseapp.com",
  projectId: "cfd-ecommerce-28fc6",
  storageBucket: "cfd-ecommerce-28fc6.appspot.com",
  messagingSenderId: "335587487153",
  appId: "1:335587487153:web:60d4588d8000347e862190",
  measurementId: "G-JW0ZCRT0JM",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebasere;
