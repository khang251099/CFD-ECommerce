import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from "react-redux-firebase";

// import "react-toastify/dist/ReactToastify.css";
// toast.configure();

import "./styles/app.scss";
import LayoutDefault from "./layout/default/index";
function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <PersistGate loading={null} persistor={persistor}>
          <LayoutDefault />
        </PersistGate>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
