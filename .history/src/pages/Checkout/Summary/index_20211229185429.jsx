import React from "react";

import "./style.scss";
import wishList from "../../../assets/icons/wishList.svg";
import compared from "../../../assets/icons/compare.svg";
import rate from "../../../assets/icons/rate-yellow.svg";
import remove from "../../../assets/icons/close.svg";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function OrderSummary(props) {
  return (
    <div className="order-summary">
      <h4 className="checkout-heading">Order summary</h4>
      <div className="desc-step">
        <p className="checkout-desc">
          Price can change depending on shipping method and taxes of your state.
        </p>
      </div>
      <section className="cart-popup">
        <div className="popup-middle">
          <div className="popup-left">
            <div className="popup-left-item">
              <img
                src="https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                style={{ width: "100px", height: "67px", borderRadius: "12px" }}
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
                <img src={remove} />
              </a>

              <p>Remove</p>
            </div>
          </div>
          <div className="popup-right">
            <h3 className="heading">Product title</h3>
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
                  <p>36.99 USD</p>
                </div>
                <div className="price-sale">
                  <p>48.56 USD</p>
                </div>
              </div>
              <div className="price-info-right">
                <form>
                  <input type="number" placeholder="1" />
                  <select name="type">
                    <option value="pcs">Pcs</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="summary-total-price">
          <div className="summary-price-item">
            <h4 className="summary-title">Subtotal</h4>
            <p className="summary-price">73.98 USD</p>
          </div>
          <div className="summary-price-item">
            <h4 className="summary-title">Tax</h4>
            <p className="summary-price">17% 16.53 USD </p>
          </div>
          <div className="summary-price-item">
            <h4 className="summary-title">Shipping</h4>
            <p className="summary-price">0 USD</p>
          </div>
        </div>
        <div className="summary-discount" style={{ marginTop: "32px" }}>
          <TextField
            id="outlined-discount-input"
            label="Promo code"
            type="text"
            autoComplete="current-password"
            variant="outlined"
            className="summary-discount-input"
            placeholder="Apply promo code"
          ></TextField>
          <Button variant="contained" color="primary">
            <p>Apply now</p>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default OrderSummary;
