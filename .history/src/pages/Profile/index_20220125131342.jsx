import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./style.scss";

Profile.propTypes = {};

function Profile(props) {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.firebase.profile);
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  // const [error, setError] = useState("");
  // console.log(profile);
  const handleSignOut = async () => {
    const { firebase } = props;
    firebase
      .auth()
      .signOut()
      .then(async () => {
        navigate("/cart");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  return (
    <div className="form-login-wrap">
      <div className="container-fluid">
        <h2>Profile</h2>
        <form className="login-form profile" onSubmit={handleSignOut}>
          <label>Name</label>
          <br />
          <input value={name} type="text" />

          <br />
          <label>Email</label>
          <br />
          <input value={email} type="text" />

          <button type="submit" className="submit">
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
