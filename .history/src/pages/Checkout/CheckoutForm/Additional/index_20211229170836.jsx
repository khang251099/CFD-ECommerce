import React from "react";
import PropTypes from "prop-types";

Additional.propTypes = {};

function Additional(props) {
  return (
    <>
      <h4 className="checkout-heading">Billing info</h4>
      <div className="desc-step">
        <p className="checkout-desc">Please enter your billing info</p>
        <p className="step">Step 1 of 5</p>
      </div>
    </>
  );
}

export default Additional;
