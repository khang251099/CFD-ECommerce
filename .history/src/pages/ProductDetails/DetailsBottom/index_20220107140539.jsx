import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../../../components/ProductCard";
import mockData from "../../../core/mockData/mock";
import { useParams } from "react-router-dom";
import "./style.scss";
DetailsBottom.propTypes = {};

function DetailsBottom(props) {
  const { id } = useParams();
  const { relate } = props;
  console.log("id", id);
  const mapProduct = relate.product.map((element) => element);
  const filterProduct = mapProduct.filter((element) => element.id !== id);
  console.log("filter product", filterProduct);

  return (
    <div className="detail-bottom">
      <h4>Related to</h4>
      <div className="product__item-wrap">
        {filterProduct?.slice(-4).map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
export default DetailsBottom;
