import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../../../components/ProductCard";
import mockData from "../../../core/mockData/mock";
DetailsBottom.propTypes = {};

function DetailsBottom(props) {
  const { relate } = props;
  console.log("relate", relate);
  // const relateTo = relate.filter((element) => element.id != relate.id);

  // console.log(relateTo);
  // const relatedTo=productData.filter(elment => element.cate)
  // const relatedTo = productData.filter(
  //   (elment) => elment.id !== productData.id
  // );

  // const relatedTo = relate.map((index) => index.id);
  // console.log(relatedTo);
  return (
    <div className="detail-bottom">
      <h4>Related to</h4>
    </div>
  );
}

export default DetailsBottom;
