import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import "./style.scss";

Profile.propTypes = {};

function Profile(props) {
  const profile = useSelector((state) => state.firebase.profile);
  // console.log(profile);
  return (
    <div className="form-login-wrap">
      <div className="container-fluid">
        <h2>Login</h2>
        <form className="login-form profile">
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
