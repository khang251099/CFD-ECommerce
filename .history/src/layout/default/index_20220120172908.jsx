import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Home from "../../pages/Home/home";
import Menu from "../Menu";
import ProductList from "../../pages/ProductList";
import ProductDetails from "../../pages/ProductDetails";
import NotFound from "../NotFound";
import Cart from "../../pages/Cart";
import SignIn from "../../pages/Authentication/SignIn";
import Checkout from "../../pages/Checkout";
import BlogList from "../../pages/BlogList";
import WishList from "../../pages/WishList";
import Profile from "../../pages/Profile";

import { useDispatch, useSelector } from "react-redux";

const LayoutDefault = () => {
  const cart = useSelector((state) => state.cart);
  console.log("cart", cart);

  const wishList = useSelector((state) => state.wl);
  console.log("wl", wishList);
  return (
    <>
      <div className="layout-default">
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/wishlist" element={<WishList wishList={wishList} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default LayoutDefault;
