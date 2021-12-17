import React from "react";
import MainTop from "../TopMain/Filter";
import LeftMenu from "../LeftMenu";
import MainBottom from "../MainBottom";


const CategoryMain = (props) => {
  return (
    <div className="category-main">
      <MainTop />
      <LeftMenu />
      <MainBottom />
    </div>
  );
}

export default CategoryMain;
