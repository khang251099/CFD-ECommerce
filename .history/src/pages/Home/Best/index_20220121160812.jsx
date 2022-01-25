import React from "react";
import ProductCard from "../../../components/ProductCard";

const BestFamer = (props) => {
  const { product } = props;
  return (
    <>
      <div className="product__item-wrap">
        {product &&
          product
            .slice(-3)
            .map((item) => <ProductCard data={item} key={item.id} />)}
      </div>
    </>
  );
};

export default BestFamer;
