import React from "react";
import "./style.scss";

const SearchItem = ({ data }) => {
  return (
    <div className="search__item-wrap">
      <img className="search__item-img" alt="" src={data.image} />
      <div>
        <h2 className="search__item-img">{data.title}</h2>
        <p className="search__item-img">{data.description}</p>
      </div>
    </div>
  );
};

export default SearchItem;
