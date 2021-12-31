import React from "react";
import "./style.scss";

const SearchItem = ({ data }) => {
  return (
    <div className="search__item-wrap">
      <img className="search__item-img" alt="" src={data.image} />
      <div>
        <h2 className="search__item-title">{data.title}</h2>
        <p className="search__item-desc">{data.description}</p>
      </div>
    </div>
  );
};

export default SearchItem;
