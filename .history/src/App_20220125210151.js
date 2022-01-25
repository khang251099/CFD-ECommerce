import React, { useState, useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { store, persistor, rrfProps } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import "./styles/app.scss";
import LayoutDefault from "./layout/default/index";
import { CombSpinner } from "react-spinners-kit";
function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <LayoutDefault />
          </ReactReduxFirebaseProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
