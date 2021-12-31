import React, { useState } from "react";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

BillingMethod.propTypes = {};

function BillingMethod(props) {
  const [value, setValue] = useState(["Fedex", "DHL"]);
  return (
    <>
      <h4 className="checkout-heading">Billing method</h4>
      <p className="checkout-desc">Please enter your payment method</p>
    </>
  );
}

export default BillingMethod;
