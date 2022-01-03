import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { remove_cart, add_cart } from "../../redux/actions/cart";
import "./style.scss";

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
            <React.Fragment>
              {cart?.map((item) => (
                <React.Fragment>
                  <div className="cart__item-bottom">
                    <img src={item.image} />
                    <div className="cart-info">
                      <h5>{item.title}</h5>
                      <p className="desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Perspiciatis adipisci .
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
                    <div class="number">
                      <a class="minus" href="#">
                        -
                      </a>
                      <input type="text" value="1" />
                      <a class="plus" href="#">
                        +
                      </a>
                    </div>
                  </div>
                  <div className="cart__item-bottom">392 USD</div>
                </React.Fragment>
              ))}
            </React.Fragment>
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
