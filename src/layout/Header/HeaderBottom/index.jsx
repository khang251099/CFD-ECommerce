import React from "react";
import PropTypes from "prop-types";
import logo from "../../../assets/images/logo.png";
import arrowDown from "../../../assets/images/arrow-down.svg";
import searchIcon from "../../../assets/images/search.svg";
import user from "../../../assets/images/user.svg";
import cart from "../../../assets/images/cart.svg";


import "./style.scss";

HeaderBottom.propTypes = {};

function HeaderBottom(props) {
  return (
    <div className="header__item-wrap --bottom">
      <div className="header__item --logo">
        <a href="./">
          <img
            src={logo}
            alt="LOGO"
            style={{ width: "177px", height: "18px" }}
          />
          <h1 className="hidden">Freshnesecom</h1>
        </a>
      </div>

      <div className="header__item --search">
        <form className="search-form">
          <div
            className="search-input"
            style={{
              fontWeight: "700",
              fontSize: "15px",
              lineHeight: "22.5px",
              fontWeight: "bold",
              color: "#151515",
            }}
          >
            <div className="search-label">
              <span>All categories</span>
            </div>
            <a href="#">
              <img src={arrowDown} alt="" className="icon --down" />
            </a>

            <input type="text" placeholder="Search products,categories..." />
            <div className="icon --search">
              <img src={searchIcon} alt="" />
            </div>
          </div>
        </form>
      </div>
      <div className="header__item --func">
        <div className="login">
          <a href="#">
            <img src={user} alt="login" />
          </a>
        </div>
        <div className="cart">
          <a href="#">
            <img src={cart} alt="cart" />
          </a>
          <span className="quality">4</span>
        </div>
      </div>
    </div>
  );
}

export default HeaderBottom;
