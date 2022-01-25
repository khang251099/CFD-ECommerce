import React from "react";
import { useParams } from "react-router-dom";
import Filter from "./Filter";
import View from "./View";

const MainTop = (props) => {
  const { id } = useParams();
  console.log("id", id);
  const {
    handleFilter,
    checked,
    checkedMin = { checkedMin },
    checkedZToA,
    checkedAToZ,
  } = props;
  if (!id) {
  }
  return (
    <div className="category-list">
      <View />
      <Filter
        handleFilter={handleFilter}
        checked={checked}
        checkedMin={checkedMin}
        checkedZToA={checkedZToA}
        checkedAToZ={checkedAToZ}
      />
    </div>
  );
};

export default MainTop;
