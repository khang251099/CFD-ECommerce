import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated or if auth is not
// yet loaded

export default PrivateRoute;
