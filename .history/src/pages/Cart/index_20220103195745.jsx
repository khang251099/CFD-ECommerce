import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { remove_cart, add_cart } from "../../redux/actions/cart";
import "./style.scss";
import "./index.js";

const Cart = () => {
  //get data from redux
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeCart = (item) => {
    dispatch(remove_cart(item));
  };

  const updateQuantity = (item) => {
    dispatch(add_cart(item));
  };

  return (
    <div className="container-fluid">
      <div className="cart__item-wrap">
        <h2 className="title">Shopping cart</h2>
        <div className="cart-box">
          <div className="cart-box-top">
            <h4>Name product</h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4>Total</h4>
          </div>
          <div className="cart-box-bottom">
            <div className="cart__item-bottom">
              <img src="https://images.unsplash.com/photo-1641192611638-e8b2cb090978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
              <div className="cart-info">
                <h5>Wooden Chair</h5>
                <p className="desc">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perspiciatis adipisci .
                </p>
              </div>
            </div>
            <div className="cart__item-bottom">
              <div className="cart__item-price">
                <p className="price-sale">15 USD</p>
                <p className="price">20 USD</p>
              </div>
            </div>
            <div className="cart__item-bottom">
              <div class="number">
                <span class="minus">-</span>
                <input type="text" value="1" />
                <span class="plus">+</span>
              </div>
            </div>
            <div className="cart__item-bottom">392 USD</div>
          </div>
        </div>
      </div>
      {/* {cart.map((item) => (
        <div key={item.id}>
          {item.title} - {item.count}
          <button onClick={() => removeCart(item)}> - </button>
          <button onClick={() => updateQuantity(item)}> + </button>
        </div>
      ))} */}
    </div>
  );
};

export default Cart;
