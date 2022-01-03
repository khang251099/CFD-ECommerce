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
          <div className="wishList__item-pro">
            <img src={remove} />
            <img src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishList;
