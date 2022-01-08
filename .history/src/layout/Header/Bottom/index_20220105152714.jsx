import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import user from "../../../assets/images/user.svg";
import cart from "../../../assets/images/cart.svg";
import heart from "../../../assets/icons/wishList.svg";
import Search from "../../Search";
import mockData from "../../../core/mockData/mock";
import SignIn from "../../../pages/Authentication/SignIn";
import { add_cart } from "../../../redux/actions/cart";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import PopupCart from "../../../pages/PopupCart";

import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";

const HeaderBottom = (props) => {
  const data = mockData.data.product;
  const [navBar, setNavBar] = useState(false);
  const [switchPage, setSwitchPage] = useState(false);

  const countItems = useSelector((state) => state.cart);
  console.log(countItems.count);

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
        <div className="login" style={{ marginLeft: "40px" }}>
          <Link to="/login">
            <img src={user} alt="login" />
          </Link>
        </div>
        <div className="cart">
          <Popup
            modal
            trigger={
              <a href="#">
                <img src={cart} alt="cart" />
              </a>
            }
          >
            {(close) => <PopupCart close={close} />}
          </Popup>
          <span className="quality">4</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
