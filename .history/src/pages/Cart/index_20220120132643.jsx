import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import {
  remove_cart,
  add_cart,
  update_quantity,
  delete_cart,
} from "../../redux/actions/cart";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import remove from "../../assets/icons/close.svg";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.scss";

const Cart = () => {
  toast.configure({ autoClose: 1000 });
  const cart = useSelector((state) => state.cart);

  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  // const [value, setValue] = useState("");
  const removeCart = async (e, item) => {
    e.preventDefault();
    dispatch(remove_cart(item));
  };

  const updateQuantity = (e, item) => {
    e.preventDefault();

    dispatch(add_cart(item));
  };

  const cartTotal = !_.isEmpty(cart)
    ? cart.reduce(function (total, item) {
        return total + parseInt(item.total);
      }, 0)
    : 0;

  const handleOnChange = (e, item) => {
    // setValue(e.target.value);
    dispatch(update_quantity(item, e.target.value));
  };
  const handleCart = (e, item) => {};
  const deleteCart = async (item) => {
    toast.warning("Do u wanna delete this product from cart");
    await dispatch(delete_cart(item));
    // setTimeout(() => {
    //   toast.success("This product deleted from cart successfully");
    // }, 1500);
  };
  return (
    <div className="container-fluid">
      <div className="cart__item-wrap">
        <h2 className="title">Shopping cart</h2>

        {!_.isEmpty(cart) ? (
          <div className="cart-box">
            <div className="cart-box-top">
              <h4>Name product</h4>
              <h4>Price</h4>
              <h4>Quantity</h4>
              <h4>Total</h4>
            </div>
            {cart?.map((item) => (
              <>
                <div className="cart-box-bottom" key={item.id}>
                  <div className="cart__item-bottom">
                    <Link to={`/product/${item.id}`}>
                      <img src={item.image} />
                    </Link>
                    <div className="cart-info">
                      <h5>{item.title}</h5>
                      <p className="desc">{item.description}</p>
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
                      <input
                        type="text"
                        value={item.count}
                        onChange={(e) => handleOnChange(e, item)}
                      />
                      <a
                        className="plus"
                        href="#"
                        onClick={(e) => updateQuantity(e, item)}
                      >
                        +
                      </a>
                    </div>
                  </div>
                  <div className="cart__item-bottom">
                    <p>{item.total} USD</p>
                  </div>
                  <div className="cart__item-bottom">
                    <a
                      href="#"
                      className="remove"
                      onClick={() => deleteCart(item)}
                    >
                      <img src={remove} />
                    </a>
                  </div>
                </div>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Do you want to remove this product from wish list?"}
                  </DialogTitle>

                  <DialogActions>
                    <a href="#" className="btn-cancel">
                      Cancel
                    </a>
                    <a href="#" className="btn-delete">
                      Delete
                    </a>
                  </DialogActions>
                </Dialog>
              </>
            ))}
            <div className="cart-sub">
              <>
                <h5>
                  Subtotal : <p> {cartTotal} USD</p>
                </h5>

                <Link to="/checkout" className="process">
                  <p>Checkout process</p>
                </Link>
              </>
            </div>
          </div>
        ) : (
          <p className="error-message">Không có sản phẩm trong giỏ hàng</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
