import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import _ from "lodash";

const SearchItem = ({ data, title }) => {
  const isCheck = _.isEmpty(data) ? true : false;
  return (
    <div className="search__item">
      <img className="search__item-img" alt="" src={data.image} />
      <div className="search__info">
        <h2 className="search__item-title">{data.title}</h2>
        <p className="search__item-desc">{data.description}</p>
      </div>
      <Link to={`/product/${data.id}`} className="btn-detail">
        <p>Details</p>
      </Link>
    </div>
  );
};

export default SearchItem;
