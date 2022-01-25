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
    setTimeout(() => setLoading(false), 6000);
  }, []);

  // function animateValue(obj, start, end, duration) {
  //   let startTimestamp = null;
  //   const step = (timestamp) => {
  //     if (!startTimestamp) startTimestamp = timestamp;
  //     const progress = Math.min((timestamp - startTimestamp) / duration, 1);
  //     obj.innerHtml = Math.floor(progress * (end - start) + start);
  //     if (progress < 1) {
  //       window.requestAnimationFrame(step);
  //     }
  //   };
  //   window.requestAnimationFrame(step);
  // }
  const open = useRef(null);
  const obj = open;
  // console.log("ref", open);

  // animateValue(obj, 100, 0, 5000);
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
        <div id="value" ref={open}>
          100
        </div>
      )}
    </>
  );
}

export default App;
