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

  // const mapProduct = relate.product.map((el) => console.log(el));
  console.log("map product", relate);
  const mapProduct = relate.product.map((element) => console.log(element));

  // const filterProduct = mapProduct.filter((el) => el.id !== id);

  return (
    <div className="detail-bottom">
      <h4>Related to</h4>
      <div className="product__item-wrap">
        {/* {filterProduct?.slice(-4).map((item) => (
          <ProductCard key={item.id} data={item} />
        ))} */}
        hihi
      </div>
    </div>
  );
}
export default DetailsBottom;
