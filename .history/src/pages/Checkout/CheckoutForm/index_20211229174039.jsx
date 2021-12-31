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
import BillingMethod from "./BillingMethod";
import PaymentMethod from "./PaymentMethod";
import Additional from "./Additional";
import Confirmation from "./Confirmation";

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
