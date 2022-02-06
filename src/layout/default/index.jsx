import React, { useEffect, useState, useRef } from "react";
<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
=======
import { Routes, Route, Navigate } from "react-router-dom";
>>>>>>> dffbb8bb4d59bae7018b6a001cfbc9468737b159
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
import { useSelector } from "react-redux";
import { GuardSpinner } from "react-spinners-kit";
import "./style.scss";
<<<<<<< HEAD
=======
import { isLoaded, isEmpty } from "react-redux-firebase";

export function PrivateRoute({ children, ...rest }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (auth?.stsTokenManager?.accessToken) {
    return <Route path="/blog">children</Route>;
  }

  return <Route path="/login">children</Route>;
  // return (
  //   <Route
  //     {...rest}
  //     render={({ location }) =>
  //       isLoaded(auth) && !isEmpty(auth) ? (
  //         children
  //       ) : (
  //         <Navigate
  //           to={{
  //             pathname: "/login",
  //             state: { from: location },
  //           }}
  //         />
  //       )
  //     }
  //   />
  // );
}
>>>>>>> dffbb8bb4d59bae7018b6a001cfbc9468737b159

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
    setTimeout(() => setLoading(false), 1000);
  }, []);
<<<<<<< HEAD
=======
  const auth = useSelector((state) => state.firebase.auth);

>>>>>>> dffbb8bb4d59bae7018b6a001cfbc9468737b159
  const topRef = useRef(null);

  const handleClickToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        topRef.current.classList.add("show");
      } else {
        topRef.current.classList.remove("show");
      }
    });
  }, []);

  return (
    <>
      <div className="layout-default">
        {loading === false ? (
          <>
            <Header
              user={user}
              className={scroll ? "top-btn show" : "top-btn "}
            />
            <Menu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:id" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart cart={cart} />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/wishlist"
                element={<WishList wishList={wishList} />}
              />

              <Route path="/profile" element={<Profile />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
            <div
              className="top-btn"
              ref={topRef}
              onClick={(e) => handleClickToTop(e)}
            >
              <i className="fas fa-arrow-up"></i>
            </div>
          </>
        ) : (
          <div className="loading-page">
            <GuardSpinner
              size={100}
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
