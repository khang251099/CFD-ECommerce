import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../../../components/ProductCard";
import mockData from "../../../core/mockData/mock";
DetailsBottom.propTypes = {};

function DetailsBottom(props) {
  const { relate } = props;
  console.log(relate.id);
  const productData = mockData.data.category.find((index) => index.id);
  console.log(productData);
  // const relatedTo=productData.filter(elment => element.cate)
  const relatedTo = productData.filter(
    (elment) => elment.id !== productData.id
  );
  console.log("related to", relatedTo);
  // const relatedTo = relate.map((index) => index.id);
  // console.log(relatedTo);
  return (
    <div className="detail-bottom">
      <h4>Related to</h4>
    </div>
  );
}

export default DetailsBottom;
