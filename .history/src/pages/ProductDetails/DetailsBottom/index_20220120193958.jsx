import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../../../components/ProductCard";
import mockData from "../../../core/mockData/mock";
import { useParams } from "react-router-dom";
import _ from "lodash";
import "./style.scss";
DetailsBottom.propTypes = {};

function DetailsBottom(props) {
  const { id } = useParams();

  const { relate } = props;
  const mapProduct = _.values(relate)[3];

  const filterProduct = _.filter(mapProduct, function (el) {
    return el.id != id;
  });

  return (
    <div className="detail-bottom">
      <h4>Related to</h4>
      <div className="product__item-wrap">
        {filterProduct?.slice(-4).map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
export default DetailsBottom;
