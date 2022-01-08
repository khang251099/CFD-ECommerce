import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { add_cart, remove_cart } from "../../redux/actions/cart";

import "./style.scss";

import wishList from "../../assets/icons/wishList.svg";
import rate from "../../assets/icons/rate-yellow.svg";
import closed from "../../assets/icons/close.svg";
import compared from "../../assets/icons/compare.svg";

function PopupCart({ close }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const updateQuantity = (e, item) => {
    e.preventDefault();
    dispatch(add_cart(item));
  };
  const removeCart = (e, item) => {
    e.preventDefault();
    dispatch(remove_cart(item));
  };

  const cartTotal = cart.reduce((a, b) => {
    return a.total + b.total;
  });
  return (
    <section className="cart-popup">
      <div className="popup-top">
        <h3 className="heading">Shopping cart</h3>
        <div className="close">
          <p>Close</p>
          <a href="#" onClick={close}>
            <img src={closed} />
          </a>
        </div>
      </div>
      <>
        {cart?.map((item) => (
          <>
            <div className="popup-middle">
              <div className="popup-left">
                <div className="popup-left-item">
                  <img
                    src={item.image}
                    style={{
                      width: "100px",
                      height: "67px",
                      borderRadius: "12px",
                    }}
                  />
                </div>

                <div className="popup-left-item">
                  <a href="#">
                    <img src={wishList} />
                  </a>

                  <p>Wish list</p>
                </div>

                <div className="popup-left-item">
                  <a href="#">
                    <img src={compared} />
                  </a>

                  <p>Compare</p>
                </div>

                <div className="popup-left-item">
                  <a href="#">
                    <img src={closed} />
                  </a>

                  <p>Remove</p>
                </div>
              </div>
              <div className="popup-right">
                <h3 className="heading">{item.title}</h3>
                <p className="title">
                  Farm : <span>Tharamis Farm </span>
                </p>
                <p className="title">
                  Freshness : <span>1 day old </span>
                </p>

                <div className="rate">
                  <img src={rate} />
                  <img src={rate} />
                  <img src={rate} />
                  <img src={rate} />
                  <img src={rate} />
                </div>
                <div className="price-info">
                  <div className="price-info-left">
                    <div className="price">
                      <p>{item.discount} USD</p>
                    </div>
                    <div className="price-sale">
                      <p>{item.price} USD</p>
                    </div>
                  </div>
                  <div className="cart__item-bottom">
                    <div className="number">
                      <a
                        className="minus"
                        href="#"
                        onClick={(e) => removeCart(e, item)}
                      >
                        -
                      </a>
                      <input type="text" value={item.count} />
                      <a
                        className="plus"
                        href="#"
                        onClick={(e) => updateQuantity(e, item)}
                      >
                        +
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
        <div className="popup-bottom">
          <h4 className="text-sub">Subtotal</h4>
          <h5 className="sum">{cartTotal}</h5>
          <div className="shopping">
            <a href="#" className="continue">
              <p>Continue shopping</p>
            </a>

            <a href="#" className="checkout">
              <p>Go to checkout</p>
            </a>
          </div>
        </div>
      </>
    </section>
  );
}

export default PopupCart;
