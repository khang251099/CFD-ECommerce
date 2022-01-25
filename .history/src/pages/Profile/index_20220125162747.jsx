import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";

import "./style.scss";

Profile.propTypes = {};

function Profile(props) {
  const [user, setUser] = useState([]);
  const { firebase } = props;
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    }
  });
  console.log("user trang profile", user);
  const navigate = useNavigate();
  const profile = useSelector((state) => state.firebase.profile);
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);

  const handleSignOut = async (e) => {
    e.preventDefault();
    const { firebase } = props;
    await firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("log out");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  console.log("trang profile ne", profile);
  return (
    <div className="form-login-wrap">
      <div className="container-fluid">
        <h2>Profile</h2>
        <form className="login-form profile" onSubmit={(e) => handleSignOut(e)}>
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

export default compose(firebaseConnect())(Profile);
