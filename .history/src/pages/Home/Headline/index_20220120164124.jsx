import React from "react";
import ProductCard from "../../../components/ProductCard";
import mockData from "../../../core/mockData/mock";
import moreProducts from "../../../assets/icons/more-products.svg";

const Headline = (props) => {
  const { product } = props;

  return (
    <>
      <div className="headline-top">
        <h3 className="heading" style={{ marginBottom: "37px" }}>
          Section Headline
        </h3>
        <div className="btn-flex">
          <p>Button</p>
          <a href="./">
            <img src={moreProducts} alt="" />
          </a>
        </div>
      </div>
      <div className="product__item-wrap">
        {product?.slice(-4).map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Headline;
