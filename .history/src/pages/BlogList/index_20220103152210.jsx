import React from "react";
import PropTypes from "prop-types";
import LeftMenu from "./LeftMenu";
import Main from "./Main";
import MainBottom from "./MainBottom";

BlogList.propTypes = {};

function BlogList(props) {
  return (
    <div className="container-fluid">
      <LeftMenu />
      <Main />
      <MainBottom />
    </div>
  );
}

export default BlogList;
