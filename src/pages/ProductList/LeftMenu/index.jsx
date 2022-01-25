import React from "react";
import mockData from "../../../core/mockData/mock";
import Categories from "./Categories";
import Brands from "./Brands";
import Rating from "./Rating";
import Range from "./Range";

const LeftMenu = (props) => {
  const data = mockData.data.category;
  let {rangeSelector, value} = props;
  return (
    <div className="item-left">
      <Categories data={data} />
      <Brands data={data} />
      <Rating />
      <Range rangeSelector={rangeSelector} value ={value}/>
    </div>
  );
};

export default LeftMenu;
