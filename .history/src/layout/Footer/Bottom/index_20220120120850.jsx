import React, { useEffect, useState } from "react";
import mockData from "../../../core/mockData/mock";
import PopupCart from "../../../pages/PopupCart";
import { add_cart } from "../../../redux/actions/cart";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import cart from "../../../assets/images/cart.svg";

import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";

const FooterBottom = () => {
  const [tag, setTag] = useState([]);

  const cartIcon = useSelector((state) => state.cart);

  const countTotal = cartIcon.length;

  useEffect(() => {
    (async () => {})();
    setTag(mockData.data.tagProducts);
    return () => {};
  }, []);

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
        <span className="quality">{countTotal}</span>
      </div>
    </>
  );
};

export default FooterBottom;
