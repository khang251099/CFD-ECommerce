import React, { useState } from "react";
import PropTypes from "prop-types";

import Select from "@material-ui/core/Select";

import BillingInfo from "./BillingInfo";
import BillingMethod from "./BillingMethod";
import PaymentMethod from "./PaymentMethod";
import Additional from "./Additional";
import Confirmation from "./Confirmation";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./style.scss";

CheckoutForm.propTypes = {};

function CheckoutForm(props) {
  return (
    <div className="checkout-form">
      <form>
        <BillingInfo />
        <BillingMethod />
        <PaymentMethod />
        <Additional />
        <Confirmation />
        <button className="order">
          <p>Complete order</p>
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
