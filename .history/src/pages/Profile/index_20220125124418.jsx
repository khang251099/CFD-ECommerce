import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

Profile.propTypes = {};

function Profile(props) {
  const profile = useSelector((state) => state.firebase.profile);
  console.log(profile);
  return (
    <div className="container-fluid">
      <div className="container-fluid">
        <h2>Login</h2>
        {/* <form>
          <label>Name</label>
          <br />
          <input value={profile.name} />
          <br />
          <label>Email</label>
          value={profile.email}
          <input />
          <button type="submit" className="submit">
            Sign in
          </button>
        </form> */}
        this is profile
      </div>
    </div>
  );
}

export default Profile;
