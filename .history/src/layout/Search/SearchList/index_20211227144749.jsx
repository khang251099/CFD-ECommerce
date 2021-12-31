import React from "react";
import SearchItem from "../SearchItem";

const SearchList = ({ data }) => {
  const listItem = data.map((item) => <SearchItem key={item.id} data={item} />);
  return <div className="search__item-wrap">{listItem}</div>;
};

export default SearchList;
