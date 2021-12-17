import React from "react";
import Home from "./layout/default/index";
import { Routes, Route, Router, Redirect, Navigate } from "react-router-dom";

import "./styles/app.scss";
import LayoutDefault from "./layout/default/index";
function App() {
  return (
    <React.Fragment>
      <LayoutDefault />
    </React.Fragment>
  );
}

export default App;
