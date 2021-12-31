import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

PaymentMethod.propTypes = {};

function PaymentMethod(props) {
  return (
    <>
      <h4 className="checkout-heading">Payment method</h4>
      <div className="desc-step">
        <p className="checkout-desc"> Please enter your payment method</p>
        <p className="step">Step 3 of 5</p>
      </div>
    </>
  );
}

export default PaymentMethod;
