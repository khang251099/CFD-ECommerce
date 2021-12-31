import React from "react";
import PropTypes from "prop-types";

BillingMethod.propTypes = {};

function BillingMethod(props) {
  return (
    <>
      <h4 className="checkout-heading">Billing method</h4>
      <p className="checkout-desc">Please enter your payment method</p>
    </>
  );
}

export default BillingMethod;
