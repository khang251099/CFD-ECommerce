import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

Confirmation.propTypes = {};

function Confirmation(props) {
  return (
    <>
      <h4 className="checkout-heading">Confirmation </h4>

      <div className="desc-step">
        <p className="checkout-desc">
          We are getting to the end. Just few clicks and your order si ready!
        </p>
        <p className="step">Step 5 of 5</p>
      </div>
    </>
  );
}

export default Confirmation;
