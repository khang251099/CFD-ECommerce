import React, { useState } from "react";
import auth from "../../../utils/helpers/auth";
import authApi from "../../../core/api/services/auth";

import { set_user_info } from "../../../redux/actions/user";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./style.scss";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";

const schema = yup.object().shape({
  email: yup.string().email().required("Please enter your email"),
  password: yup.string().min(8).max(32).required("Please enter your password"),
  name: yup.string().required("Please enter your name"),
});
function SignUp(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [error, setError] = useState("");

  const handleRegister = ({ e, email, password, name }) => {
    const { firebase } = props;
    firebase
      .createUser(
        {
          email,
          password,
        },
        {
          name,
          email,
        }
      )
      .then((authenticatedUser) => {
        console.log(authenticatedUser);
      })
      .catch((error) => {
        setError(error.message);
        console.log("error", error.message);
      });
  };

  return (
    <div className="form-login-wrap">
      <div className="container-fluid">
        <h2>Register</h2>
        <form onSubmit={handleSubmit()} className="login-form">
          <label>Username</label>
          <br />
          <input
            {...register("name")}
            placeholder="Di khang day ne"
            type="text"
          />
          <p className="error-message">{errors.name?.message}</p>
          <br />
          <label>Email</label>
          <br />
          <input
            {...register("email")}
            placeholder="example@gmail.com"
            type="email"
          />
          <p className="error-message">{errors.email?.message}</p>
          <br />
          <label>Password</label>
          <br />
          <input
            {...register("password")}
            placeholder="password"
            type="password"
          />
          <p className="error-message">{errors.password?.message}</p>
          <br />

          <button
            type="submit"
            className="submit"
            onClick={(e) => handleRegister(e)}
          >
            Sign up
          </button>
          <p className="error-message">{error}</p>
        </form>
      </div>
    </div>
  );
}

export default compose(firebaseConnect())(SignUp);
