import React from "react";
import SearchItem from "../SearchItem";
import "./style.scss";

const SearchList = ({ data }) => {
  return (
    <div className="search__item-wrap">
      {item > 0 ? (
        <SearchItem key={item.id} data={item} />
      ) : (
        "Không có sản phẩm phù hợp"
      )}
    </div>
  );
};

export default SearchList;
