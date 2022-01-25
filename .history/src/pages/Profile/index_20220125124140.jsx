import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

Profile.propTypes = {};

function Profile(props) {
  const profile = useSelector((state) => state.profile);
  return (
    <div className="container-fluid">
      <div className="container-fluid">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit(handleLogin)}>
          <label>Name</label>
          <br />
          <input value={profile.name} />
          <p className="error-message">{errors.email?.message}</p>
          <br />
          <label>Email</label>
          value={profile.email}
          <input />
          <button type="submit" className="submit">
            Sign in
          </button>
          <p className="error-message">{error}</p>
        </form>
      </div>
    </div>
  );
}

export default Profile;
