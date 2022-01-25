import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import "./style.scss";

Profile.propTypes = {};

function Profile(props) {
  const profile = useSelector((state) => state.firebase.profile);
  console.log(profile);
  return (
    <div className="container-fluid">
      <h2>Login</h2>
      <form className="login-form">
        <label>Name</label>
        <br />
        <input value={profile.name} />
        <br />
        <label>Email</label>

        <input value={profile.email} />
        <button type="submit" className="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Profile;
