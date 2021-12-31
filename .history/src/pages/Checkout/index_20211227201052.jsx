import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./Summary";

Checkout.propTypes = {};

function Checkout(props) {
  return (
    <div className="checkout__item-wrap">
      <CheckoutForm />
      <OrderSummary />
    </div>
  );
}

export default Checkout;
