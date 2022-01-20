import React, { useEffect, useState } from "react";
import mockData from "../../../core/mockData/mock";
import PopupCart from "../../../pages/PopupCart";
import { add_cart } from "../../../redux/actions/cart";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import cart from "../../../assets/images/cart.svg";
import { useNavigate } from "react-router";

import Popup from "reactjs-popup";
import "./style.scss";
import "reactjs-popup/dist/index.css";

const FooterBottom = () => {
  const [tag, setTag] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {})();
    setTag(mockData.data.tagProducts);
    return () => {};
  }, []);
  const handleCart = async (e) => {
    e.preventDefault();
    setTimeout(() => {
      navigate("/cart");
    }, 1500);
  };

  return (
    <>
      <div className="footer__item-wrap --bottom">
        <div className="footer__item-heading">Product tags</div>
        {tag?.map((item) => (
          <div className="footer__item-tags" key={item.id}>
            <a href="#">
              <p>{item.name}</p>
            </a>
          </div>
        ))}
      </div>
      <div className="cart">
        <a href="#" onClick={(e) => handleCart(e)}>
          <img src={cart} alt="cart" />
        </a>
      </div>
    </>
  );
};

export default FooterBottom;
