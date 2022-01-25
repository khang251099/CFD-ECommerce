import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../../assets/images/logo.png";
import user from "../../../assets/images/user.svg";
import cart from "../../../assets/images/cart.svg";
import heart from "../../../assets/icons/wishList.svg";
import Search from "../../Search";
import mockData from "../../../core/mockData/mock";
import SignIn from "../../../pages/Authentication/SignIn";
import PopupCart from "../../../pages/PopupCart";
import _ from "lodash";

import productApi from "../../../core/api/product";
import { Link } from "react-router-dom";

const HeaderBottom = (props) => {
  const { user } = props;
  const [data, setData] = useState([]);
  console.log("user", user._delegate.email);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const productList = await productApi.getAll();
        setData(productList);
      };
      fetchData();
    } catch (error) {
      console.log("failed to fetch data", error);
    }
  }, []);
  const cartIcon = useSelector((state) => state.cart);

  const countTotal = cartIcon.length;
  const [navBar, setNavBar] = useState(false);
  const [switchPage, setSwitchPage] = useState(false);

  const handleNavBar = () => {
    setNavBar(!navBar);
  };

  return (
    <div className="header__item-wrap --bottom">
      <div className="header__item --logo">
        <Link to="/">
          <img
            src={logo}
            alt="LOGO"
            style={{ width: "177px", height: "18px" }}
          />
          <h1 className="hidden">Freshnesecom</h1>
        </Link>
      </div>
      <Search details={data} />
      <div className="header__item --func">
        <div className="wish-list">
          <Link to="/wishlist">
            <img src={heart} alt="wish-list" />
          </Link>
        </div>
        {!_.isEmpty(user) ? (
          <p>Xin chào {user._delegate.email} </p>
        ) : (
          <div className="login" style={{ marginLeft: "40px" }}>
            <Link to="/login">
              <img src={user} alt="login" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderBottom;
