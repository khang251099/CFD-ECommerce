import React from "react";
import ProductCard from "../../../components/ProductCard";
import mockData from "../../../core/mockData/mock";

const BestFamer = () => {
  const pro = mockData.data.product;
  console.log(pro);
  // console.log(pro);
  // console.log(pro.quantity);
  return (
    <div className="product__item-wrap">
      {pro?.slice(-3).map((item) => (
        <ProductCard data={item} key={item.id} />
      ))}
    </div>
  );
};

export default BestFamer;
