import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { remove_cart, add_cart } from "../../redux/actions/cart";
import remove from "../../assets/icons/close.svg";
import "./style.scss";

const Cart = () => {
  //get data from redux
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeCart = (e, item) => {
    e.preventDefault();
    dispatch(remove_cart(item));
  };

  const updateQuantity = (e, item) => {
    e.preventDefault();
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

          <React.Fragment>
            {cart?.map((item) => (
              <div className="cart-box-bottom" key={item.id}>
                <div className="cart__item-bottom">
                  <img src={item.image} />
                  <div className="cart-info">
                    <h5>{item.title}</h5>
                    <p className="desc">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Perspiciatis adipisci .
                    </p>
                  </div>
                </div>
                <div className="cart__item-bottom">
                  <div className="cart__item-price">
                    <p className="price-sale">{item.discount} USD</p>
                    <p className="price">{item.price} USD</p>
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

                <div className="cart__item-bottom">392 USD</div>
                <div className="cart__item-bottom">
                  <a href="#" className="remove">
                    <img src={remove} />
                  </a>
                </div>
              </div>
            ))}
          </React.Fragment>
        </div>
        <div className="cart-total">
          <h4>Cart Totals</h4>
          <h5>
            Subtotal: <span>15 USD</span>
          </h5>
          <h5>
            Toal: <span>15 USD</span>
          </h5>
          <a href="#">
            <p>Proceed to checkout</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
