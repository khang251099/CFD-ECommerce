import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Home from "../../pages/Home/home";
import Menu from "../Menu";
import { Routes, Route } from "react-router-dom";
import ProductList from "../../pages/ProductList";
import ProductDetails from "../../pages/ProductDetails";
import NotFound from "../NotFound";
import Cart from "../../pages/Cart";

const LayoutDefault = () => {
  return (
    <>
      <div className="layout-default">
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default LayoutDefault;
