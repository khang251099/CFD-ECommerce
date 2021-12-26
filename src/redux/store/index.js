import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cart from "../reducer/cart";
import wl from "../reducer/wishList";
import user from "../reducer/user";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cart,
  wl,
  user,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);

export const persistor = persistStore(store);
