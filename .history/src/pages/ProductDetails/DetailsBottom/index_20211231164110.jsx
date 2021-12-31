import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../../../components/ProductCard";
import mockData from "../../../core/mockData/mock";
DetailsBottom.propTypes = {};

function DetailsBottom(props) {
  const { relate } = props;
  console.log(relate.id);
  const productData = mockData.data.product.find((index) => index.id);
  console.log(productData);

  // const relatedTo = relate.map((index) => index.id);
  // console.log(relatedTo);
  return (
    <div className="detail-bottom">
      <h4>Related to</h4>
    </div>
  );
}

export default DetailsBottom;
