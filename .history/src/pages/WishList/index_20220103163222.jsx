import React from "react";
import remove from "../../assets/icons/close.svg";
import "./style.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { remove_wl } from "../../redux/actions/wishList";

function WishList(props) {
  toast.configure({ autoClose: 1000 });
  let navigate = useNavigate();
  const addToCart = async (e) => {
    e.preventDefault();
    toast.success("Remove wish list successfully");
    setTimeout(() => {
      navigate("/cart");
    }, 1500);
  };

  const removeWishList = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="container-fluid">
      <div className="wishList__item-wrap">
        <h2 className="title">My Wish List</h2>
        <div className="wishList__item-top">
          <h4 className="heading">Product name</h4>
          <h4 className="heading">Unit price</h4>
          <h4 className="heading">Stock status</h4>
        </div>
        <div className="wishList__item-bottom">
          <div className="wishList__item">
            <div className="wishList__item-pro">
              <a href="#" onClick={(e) => removeWishList(e)}>
                <img src={remove} />
              </a>

              <img src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
            </div>
          </div>
          <div className="wishList__item">
            <div className="wishList__item-price">
              <p className="price-sale">20 USD</p>
              <p className="price">15 USD</p>
            </div>
          </div>

          <div className="wishList__item">
            <div className="product-button">
              <a href="#" className="btn-buy" onClick={(e) => addToCart(e)}>
                <p>Add to cart</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishList;
