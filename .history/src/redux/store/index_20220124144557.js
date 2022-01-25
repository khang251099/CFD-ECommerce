import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cart from "../reducer/cart";
import wl from "../reducer/wishList";
import history from "../reducer/history";
import rate from "../reducer/rate";

//firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import { createFirestoreInstance } from "redux-firestore";

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

const persistConfig = {
  key: "root",
  storage,
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const initialState = {};
const rootReducer = combineReducers({
  cart,
  wl,
  history,
  rate,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
  initialState
);

export const store = createStore(persistedReducer);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export const persistor = persistStore(store);
