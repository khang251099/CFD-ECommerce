import React, { useState } from "react";
import PropTypes from "prop-types";
import InputField from "../../../componens/InputField";

import { yupResolver } from "@hookform/resolvers/yup";
import Select from "@material-ui/core/Select";
import * as yup from "yup";

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
  const schema = yup.object().shape({
    firstname: yup.string().required("Please enter your first name."),
    lastname: yup.string().required("Please enter your last name"),

    phone: yup
      .string()
      .required("Please enter your phone")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ),
    email: yup
      .string()
      .email("Incorrect format email is @")
      .required("Please enter your email"),
    address: yup
      .string()
      .required("Please enter your address")
      .min(4, "Address must be at least 4 characters"),
    town: yup
      .string()
      .required("Please enter your address")
      .min(4, "Address must be at least 4 characters"),
    state: yup.string().required("Please select your option"),
    ship: yup
      .boolean()
      .oneOf([true], "Required terms of use")
      .required("Required terms of use"),
    zip: yup.string().required("Please enter your postal code"),
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      state: "",
      zip: "",
      ship: false,
    },
    resolver: yupResolver(schema),
  });

  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };
  return (
    <div className="checkout-form">
      <form>
        <BillingInfo />
        <BillingMethod />
        <PaymentMethod />
        <Additional />
        <Confirmation />
        <button className="order" onClick={handleSubmit(onSubmit)}>
          <p>Complete order</p>
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
