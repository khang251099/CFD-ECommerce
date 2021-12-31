import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../../../components/ProductCard";
import mockData from "../../../core/mockData/mock";
import { useParams } from "react-router-dom";
DetailsBottom.propTypes = {};

function DetailsBottom(props) {
  const { id } = useParams;
  const { relate } = props;
  console.log("id", id);
  const mapProduct = relate.product.map((element) => element);
  const filterProduct = mapProduct.filter((element) => element.id !== id);
  console.log("filter product", filterProduct);

  return (
    <div className="detail-bottom">
      <h4>Related to</h4>
    </div>
  );
}

export default DetailsBottom;
