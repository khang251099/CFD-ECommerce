import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../componens/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

CheckoutForm.propTypes = {};

function CheckoutForm(props) {
  const schema = yup.object().shape({
    identifier: yup
      .string()
      .required("Please enter your email.")
      .email("Please enter an valid email address."),
    password: yup.string().required("Please enter your password."),
  });
  const form = useForm({
    defaultValues: {
      firstName: "",
    },
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });
  return (
    <div>
      <InputField name="firstName" label="First name" form={form} />
    </div>
  );
}

export default CheckoutForm;
