import React, { useState, useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { store, persistor, rrfProps } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import "./styles/app.scss";
import LayoutDefault from "./layout/default/index";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 60000);
  }, []);

  return (
    <>
      {loading === false ? (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ReactReduxFirebaseProvider {...rrfProps}>
              <LayoutDefault />
            </ReactReduxFirebaseProvider>
          </PersistGate>
        </Provider>
      ) : (
        <div id="value">100</div>
      )}
    </>
  );
}

export default App;
