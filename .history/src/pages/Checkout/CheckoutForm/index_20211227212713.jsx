import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../componens/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./style.scss";

CheckoutForm.propTypes = {};

function CheckoutForm(props) {
  const schema = yup.object().shape({
    firstName: yup.string().required("Please enter your first name."),
    lastName: yup.string().required("Please enter your last name"),
    password: yup.string().required("Please enter your password"),
    phone: yup
      .number()
      .min(10, "Must be more than 10 characters")
      .required("Please enter your phone"),
  });
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      town: "",
      address: "",
    },
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });
  return (
    <div>
      <InputField name="firstName" label="First name" form={form} />
      <InputField name="lastName" label="Last name" form={form} />
      <InputField name="email" label="Email address" form={form} />
      <InputField name="phone" label="Phone number" form={form} />
      <InputField name="address" label="Address" form={form} />
      <InputField name="town" label="Town / City" form={form} />
    </div>
  );
}

export default CheckoutForm;
