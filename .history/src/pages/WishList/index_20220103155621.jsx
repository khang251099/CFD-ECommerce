import React from "react";
import remove from "../../assets/icons/close.svg";
import "./style.scss";

function WishList(props) {
  return (
    <div className="container-fluid">
      <div className="wishList__item-wrap">
        <h2 className="title">My Wish List</h2>
        <div className="wishList__item">
          <h4 className="heading">Product name</h4>
          <h4 className="heading">Unit price</h4>
          <h4 className="heading">Stock status</h4>
        </div>
        <div className="wishList__item">
          <div className="wishList__item-price">
            <p className="price-sale">20 USD</p>
            <p className="price">15 USD</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishList;
