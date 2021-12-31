import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Checkbox,
  Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import MenuItem from "@material-ui/core/MenuItem";
// import InputLabel from "@material-ui/core/InputLabel";
// import Checkbox from "@material-ui/core/Checkbox";

import FormControlLabel from "@material-ui/core/FormControlLabel";

import "./style.scss";
BillingInfo.propTypes = {};

function BillingInfo(props) {
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
    <>
      <h4 className="checkout-heading">Billing info</h4>
      <p className="checkout-desc">Please enter your billing info</p>
      <form>
        <div className="billing-info-form">
          <div className="billing-form-item">
            <TextField
              required
              id="firstname"
              name="firstname"
              label="First Name"
              fullWidth
              margin="dense"
              {...register("firstname")}
              error={errors.firstname ? true : false}
            />
            <Typography
              variant="inherit"
              color="textSecondary"
              className="error-message"
            >
              {errors.firstname?.message}
            </Typography>
          </div>
          <div className="billing-form-item">
            <TextField
              required
              id="lastname"
              name="lastname"
              label="Last Name"
              fullWidth
              margin="dense"
              {...register("lastname")}
              error={errors.lastname ? true : false}
            />
            <Typography
              variant="inherit"
              color="textSecondary"
              className="error-message"
            >
              {errors.lastname?.message}
            </Typography>
          </div>
          <div className="billing-form-item">
            <TextField
              required
              id="email"
              name="email"
              label="Email address"
              fullWidth
              margin="dense"
              {...register("email")}
              error={errors.email ? true : false}
            />
            <Typography
              variant="inherit"
              color="textSecondary"
              className="error-message"
            >
              {errors.email?.message}
            </Typography>
          </div>

          <div className="billing-form-item">
            <TextField
              required
              id="phone"
              name="phone"
              label="Phone number"
              fullWidth
              margin="dense"
              {...register("phone")}
              error={errors.phone ? true : false}
            />

            <Typography
              variant="inherit"
              color="textSecondary"
              className="error-message"
            >
              {errors.phone?.message}
            </Typography>
          </div>
          <div className="billing-form-item">
            <TextField
              required
              id="address"
              name="address"
              label="Address"
              fullWidth
              margin="dense"
              {...register("address")}
              error={errors.address ? true : false}
            />
            <Typography
              variant="inherit"
              color="textSecondary"
              className="error-message"
            >
              {errors.address?.message}
            </Typography>
          </div>
          <div className="billing-form-item">
            <TextField
              required
              id="town"
              name="town"
              label="Town / City"
              fullWidth
              margin="dense"
              {...register("town")}
              error={errors.town ? true : false}
            />
            <Typography
              variant="inherit"
              color="textSecondary"
              className="error-message"
            >
              {errors.town?.message}
            </Typography>
          </div>

          <div className="billing-form-item">
            <InputLabel id="demo-simple-select-label">
              State / Country
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={city}
              onChange={handleChange}
              name="state"
              label="State / Country"
              {...register("state")}
              error={errors.state ? true : false}
            >
              <MenuItem value={10}>Viet Nam</MenuItem>
              <MenuItem value={20}>USA</MenuItem>
            </Select>
            <Typography
              variant="inherit"
              color="textSecondary"
              className="error-message"
            >
              {errors.state?.message}
            </Typography>
          </div>
          <div className="billing-form-item">
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              margin="dense"
              {...register("zip")}
              error={errors.zip ? true : false}
            />
          </div>
          <Typography
            variant="inherit"
            color="textSecondary"
            className="error-message"
          >
            {errors.zip?.message}
          </Typography>
          <div className="billing-form-item">
            <FormControlLabel
              value="ship"
              control={<Checkbox color="primary" />}
              label="Ship to a different address"
              labelPlacement="Ship to a different address"
              name="ship"
              {...register("ship")}
              error={errors.ship ? true : false}
            />
            <Typography
              variant="inherit"
              color="textSecondary"
              className="error-message"
            >
              {errors.ship?.message}
            </Typography>
          </div>
        </div>
        <button onClick={handleSubmit(onSubmit)} className="order">
          <p>Submit</p>
        </button>
      </form>
    </>
  );
}

export default BillingInfo;
