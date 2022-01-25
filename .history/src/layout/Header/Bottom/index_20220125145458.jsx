import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../../assets/images/logo.png";

import heart from "../../../assets/icons/wishList.svg";
import Search from "../../Search";
//Material
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";

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

        <div className="login" style={{ marginLeft: "40px" }}>
          <Link to="/login">
            <img src={user} alt="login" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
