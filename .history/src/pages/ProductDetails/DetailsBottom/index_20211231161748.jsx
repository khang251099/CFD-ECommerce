import React from "react";
import PropTypes from "prop-types";

DetailsBottom.propTypes = {};

function DetailsBottom(props) {
  const { relate } = props;
  console.log(relate);
  return <div className="detail-bottom">this is details bottom</div>;
}

export default DetailsBottom;
