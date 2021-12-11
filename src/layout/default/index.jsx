import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Home from "../../pages/Home/home";
import Menu from "../Menu";

LayoutDefault.propTypes = {};

function LayoutDefault(props) {
  return (
    <React.Fragment>
      <div className="layout-default">
        <Header />
        <Menu />
        <Home />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default LayoutDefault;
