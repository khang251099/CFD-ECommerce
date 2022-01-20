import React from "react";
import PropTypes from "prop-types";
import MiddleLeft from "./MiddleLeft";
import MiddleRight from "./MiddleRight";
import "./style.scss";
DetailsMiddle.propTypes = {};

function DetailsMiddle(props) {
  const { pro } = props;
  console.log("pro", pro);
  return (
    <div className="detail-middle">
      <MiddleLeft />
      <MiddleRight data={pro} />
    </div>
  );
}

export default DetailsMiddle;
