import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cart from "../reducer/cart";
import wl from "../reducer/wishList";
import history from "../reducer/history";
import rate from "../reducer/rate";

//firebase
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

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
import firebase from "../../../firebase";
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export const persistor = persistStore(store);
