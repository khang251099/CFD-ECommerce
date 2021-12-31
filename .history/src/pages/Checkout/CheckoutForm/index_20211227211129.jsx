import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../componens/InputField";

CheckoutForm.propTypes = {};

function CheckoutForm(props) {
  const { name, label, form } = props;
  return (
    <div>
      <InputField name="firstName" label="First name" form={form} />
    </div>
  );
}

export default CheckoutForm;
