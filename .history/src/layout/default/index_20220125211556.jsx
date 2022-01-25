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
import { GuardSpinner } from "react-spinners-kit";
import "./style.scss";
const LayoutDefault = () => {
  const cart = useSelector((state) => state.cart);

  const wishList = useSelector((state) => state.wl);
  const [user, setUser] = useState();

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    }
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
      <div className="layout-default">
        {loading === false ? (
          <>
            <Header user={user} />
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
              <Route
                path="/wishlist"
                element={<WishList wishList={wishList} />}
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </>
        ) : (
          <div className="loading-page">
            <GuardSpinner
              size={200}
              color="#00ff89"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            />
            <h2 data-text="Loading...">Loading...</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default LayoutDefault;
