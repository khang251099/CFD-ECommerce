import React, { useState } from "react";
import auth from "../../../utils/helpers/auth";
import authApi from "../../../core/api/services/auth";
import { useNavigate } from "react-router-dom";
import { set_user_info } from "../../../redux/actions/user";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./style.scss";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const schema = yup.object().shape({
  email: yup.string().email().required("Please enter your email"),
  password: yup.string().min(8).max(32).required("Please enter your password"),
  name: yup.string().required("Please enter your name"),
  retypePassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
function SignUp(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // const handleRegister = async () => {
  //   const { firebase } = props;
  //   const auth = getAuth();
  //   firebase
  //     .createUser(
  //       {
  //         email: email,
  //         password: password,
  //       },
  //       {
  //         name: name,
  //         email: email,
  //       }
  //       // await toast.success("register account is successfully"),
  //     )
  //     .then((res) => {
  //       if (res.user) {
  //         console.log("res", res);

  //         navigate("/login");
  //       }
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       console.log("error", error.message);
  //     });
  // };

  // const registerUser = async () => {
  //   // Creates an user account & login.
  //   // Returns promise.
  //   const { firebase } = props;
  //   try {
  //     const user = await firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(auth, email, password);
  //     console.log(user);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = () => {
    const { firebase } = props;

    firebase
      .auth()
      .createUserWithEmailAndPassword({ email, password })
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  return (
    <div className="form-login-wrap">
      <div className="container-fluid">
        <h2>Register</h2>
        <form onSubmit={handleSubmit(handleSignUp)} className="login-form">
          <label>Username</label>
          <br />
          <input
            {...register("name")}
            placeholder="Ex: Nguyen Duy Khang"
            type="text"
            onChange={handleName}
          />
          <p className="error-message">{errors.name?.message}</p>
          <br />
          <label>Email</label>
          <br />
          <input
            {...register("email")}
            placeholder="example@gmail.com"
            type="email"
            onChange={handleEmail}
          />
          <p className="error-message">{errors.email?.message}</p>
          <br />
          <label>Password</label>
          <br />
          <input
            {...register("password")}
            placeholder="password"
            type="password"
            onChange={handlePassword}
          />
          <p className="error-message">{errors.password?.message}</p>
          <br />

          {/* <input
            {...register("retypePassword")}
            placeholder="retype password"
            type="password"
          />
          <p className="error-message">{errors.retypePassword?.message}</p>
          <br /> */}
          <button type="submit" className="submit">
            Sign up
          </button>
          <p className="error-message">{error}</p>
        </form>
      </div>
    </div>
  );
}

export default compose(firebaseConnect())(SignUp);
