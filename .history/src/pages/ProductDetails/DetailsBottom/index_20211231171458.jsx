import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../../../components/ProductCard";
import mockData from "../../../core/mockData/mock";
DetailsBottom.propTypes = {};

function DetailsBottom(props) {
  const { relate } = props;
  console.log("relate", relate);

  return (
    <div className="detail-bottom">
      <h4>Related to</h4>
    </div>
  );
}

export default DetailsBottom;
