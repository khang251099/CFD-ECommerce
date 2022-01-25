import React, { useEffect, useState } from "react";
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
import SignUp from "../../pages/Authentication/SignUp";
import Checkout from "../../pages/Checkout";
import BlogList from "../../pages/BlogList";
import WishList from "../../pages/WishList";
import Profile from "../../pages/Profile";
import firebase from "firebase/compat/app";
import { useDispatch, useSelector } from "react-redux";

const LayoutDefault = () => {
  const cart = useSelector((state) => state.cart);

  const wishList = useSelector((state) => state.wl);
  const [user, setUser] = useState();

  firebase.auth().userInfo((user) => {
    if (user) {
      setUser(user);
    }
  });
  console.log("user", user);
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
          <Route path="/signup" element={<SignUp />} />
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
