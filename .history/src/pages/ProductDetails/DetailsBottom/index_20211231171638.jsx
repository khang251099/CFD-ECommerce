import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../../../components/ProductCard";
import mockData from "../../../core/mockData/mock";
DetailsBottom.propTypes = {};

function DetailsBottom(props) {
  const { relate } = props;

  const mapProduct = relate.product.map((element) => element);
  console.log("map product", mapProduct);

  return (
    <div className="detail-bottom">
      <h4>Related to</h4>
    </div>
  );
}

export default DetailsBottom;
