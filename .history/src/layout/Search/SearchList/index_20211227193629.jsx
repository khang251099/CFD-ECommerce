import React from "react";
import SearchItem from "../SearchItem";
import _ from "lodash";
import "./style.scss";

const SearchList = ({ data }) => {
  const listItem = data.map((item) => <SearchItem key={item.id} data={item} />);
  const isCheck = !_.isEmpty(listItem) ? true : false;

  return (
    <div className="search__item-wrap">
      {isCheck ? (
        { listItem }
      ) : (
        <SearchItem title={"Your search has no results"} />
      )}
    </div>
  );
};

export default SearchList;
