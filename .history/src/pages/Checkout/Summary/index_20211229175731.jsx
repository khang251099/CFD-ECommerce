import React from "react";
import PropTypes from "prop-types";

OrderSummary.propTypes = {};

function OrderSummary(props) {
  return (
    <>
      {" "}
      <h4 className="checkout-heading">Order summary</h4>
      <div className="desc-step">
        <p className="checkout-desc">
          {" "}
          Price can change depending on shipping method and taxes of your state.
        </p>
      </div>
    </>
  );
}

export default OrderSummary;
