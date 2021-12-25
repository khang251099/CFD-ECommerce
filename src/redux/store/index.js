import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cart from "../reducer/cart";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cart,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
