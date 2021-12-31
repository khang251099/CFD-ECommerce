import React from "react";

const SearchItem = ({ data }) => {
  return (
    <div className="search__item-wrap">
      <img className="br-100 h3 w3 dib" alt="" src={data.image} />
      <div>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default SearchItem;
