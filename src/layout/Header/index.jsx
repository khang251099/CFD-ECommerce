import React from "react";
import PropTypes from "prop-types";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

Header.propTypes = {};

function Header(props) {
  return (
    <header className="header">
      <div className="container-fluid">
        <HeaderTop />
        <HeaderBottom />
      </div>
    </header>
  );
}

export default Header;
