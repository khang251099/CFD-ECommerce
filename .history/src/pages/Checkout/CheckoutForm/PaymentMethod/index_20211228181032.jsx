import React from "react";
import PropTypes from "prop-types";

PaymentMethod.propTypes = {};

function PaymentMethod(props) {
  return (
    <>
      <h4 className="checkout-heading">Payment method</h4>
      <p className="checkout-desc">Please enter your payment method</p>
    </>
  );
}

export default PaymentMethod;
