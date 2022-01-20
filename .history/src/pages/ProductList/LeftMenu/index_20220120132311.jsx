import React from "react";
import mockData from "../../../core/mockData/mock";
import Categories from "./Categories";
import Brands from "./Brands";
import Rating from "./Rating";
import Range from "./Range";

const LeftMenu = () => {
  const data = mockData.data.category;
  return (
    <div className="item-left">
      <Categories data={data} />
      <Brands data={data} />
      <Rating />
      <Range product={data} />
    </div>
  );
};

export default LeftMenu;
