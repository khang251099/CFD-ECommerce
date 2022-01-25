import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../../assets/images/logo.png";
import login from "../../../assets/icons/user.svg";
import heart from "../../../assets/icons/wishList.svg";
import Search from "../../Search";
//Material
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import _ from "lodash";

import productApi from "../../../core/api/product";
import { Link } from "react-router-dom";
import "./style.scss";
// import "./dropdown";

const HeaderBottom = (props) => {
  const { user } = props;
  const [data, setData] = useState([]);
  console.log(user);
  // console.log("user", user._delegate.email);
  const trigger = (e) => {
    e.target.classList.add("active").focus();
  };
  const dropdown = (e) => {
    e.target.classList.remove("active");
  };
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

  const [navBar, setNavBar] = useState(false);

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

        {/* <div className="login" style={{ marginLeft: "40px" }}>
          <Link to="/login">
            <img src={login} alt="login" />
          </Link>
        </div> */}
        <div class="drop">
          <a class="drop-trigger" href="#dropdown1" onClick={(e) => trigger(e)}>
            😋 Meyveler
            <ArrowDownwardIcon />
          </a>
          <div
            class="drop-down"
            id="dropdown1"
            tabindex="-1"
            onFocus={(e) => dropdown(e)}
          >
            <ul>
              <li>
                <a href="">🍏 Elma</a>
              </li>
              <li>
                <a href="">🍌 Muz</a>
              </li>
              <li>
                <a href="">🥕 Havuç</a>
              </li>
              <li>
                <a href="">🍊 Portakal</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
