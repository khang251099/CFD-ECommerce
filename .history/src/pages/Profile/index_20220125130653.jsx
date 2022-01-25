import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./style.scss";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
Profile.propTypes = {};

function Profile(props) {
  toast.configure({ autoClose: 1500 });
  const navigate = useNavigate();

  const profile = useSelector((state) => state.firebase.profile);
  const [error, setError] = useState("");
  // console.log(profile);
  // const handleSignOut = async () => {
  //   const { firebase } = props;
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       setTimeout(() => {
  //         navigate("/cart");
  //       }, 500);
  //     });
  // };
  const handleSignOut = async () => {
    const { firebase } = props;
    try {
      await firebase.auth().signOut();
      navigate("/cart");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form-login-wrap">
      <div className="container-fluid">
        <h2>Profile</h2>
        <form className="login-form profile" onSubmit={handleSignOut}>
          <label>Name</label>
          <br />
          <input value={profile.name} type="text" />

          <br />
          <label>Email</label>
          <br />
          <input value={profile.email} type="text" />

          <button type="submit" className="submit">
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
