import React from "react";
import Home from "./layout/default/index";
import { Routes, Route } from "react-router-dom";

import "./styles/app.scss";
import LayoutDefault from "./layout/default/index";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutDefault />} />
        <Route path="/category/:id" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
