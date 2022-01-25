import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../../assets/images/logo.png";
import login from "../../../assets/icons/user.svg";
import heart from "../../../assets/icons/wishList.svg";
import Search from "../../Search";
import { useNavigate } from "react-router";
import _ from "lodash";

import productApi from "../../../core/api/product";
import { Link } from "react-router-dom";
import "./style.scss";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";

const HeaderBottom = (props) => {
  const { user } = props;
  const [data, setData] = useState([]);
  console.log(user);

  const navigate = useNavigate();

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

  const open = useRef(null);
  console.log("open", open.current);
  function openNav(e) {
    open.current.style.width = "300px";
  }
  function closeNav() {
    open.current.style.width = "0";
  }

  const handleSignOut = async (e) => {
    e.preventDefault();
    const { firebase } = props;
    await firebase
      .auth()
      .signOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
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
        <div>
          {_.isEmpty(user) ? (
            <div className="login" style={{ marginLeft: "40px" }}>
              <Link to="/login">
                <img src={login} alt="login" />
              </Link>
            </div>
          ) : (
            <>
              <div id="mySidenav" class="sidenav" ref={open}>
                <a
                  href="javascript:void(0)"
                  class="closebtn"
                  onClick={(e) => closeNav(e)}
                >
                  &times;
                </a>
                <Link to="/profile">Profile</Link>
                <a href="#" onClick={(e) => handleSignOut(e)}>
                  Sign Out
                </a>
              </div>
              <span onClick={(e) => openNav(e)}>
                <p className="say-hi">Chào {user._delegate.email}</p>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default compose(firebaseConnect())(HeaderBottom);
