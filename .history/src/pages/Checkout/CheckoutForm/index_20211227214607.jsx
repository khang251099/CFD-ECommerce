import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../componens/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "@material-ui/core/Select";
import * as yup from "yup";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import "./style.scss";
import BillingInfo from "./BillingInfo";

CheckoutForm.propTypes = {};

function CheckoutForm(props) {
  return (
    <div className="checkout-form">
      <BillingInfo />
    </div>
  );
}

export default CheckoutForm;
