import React from "react";
import remove from "../../assets/icons/close.svg";
import "./style.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { remove_wl } from "../../redux/actions/wishList";

import { useSelector } from "react-redux";

import heart from "../../assets/icons/wishList.svg";

function WishList(props) {
  toast.configure({ autoClose: 1000 });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addToCart = async (e) => {
    e.preventDefault();
    toast.success("Add to cart list successfully");
    setTimeout(() => {
      navigate("/cart");
    }, 1500);
  };

  const removeWishList = async (e) => {
    e.preventDefault();
    await dispatch(remove_wl(props));
    toast.success("Remove wish list successfully");
  };
  const wishList = useSelector((state) => state.wl);
  console.log(wishList);

  return (
    <>
      <div className="container-fluid">
        <div className="wishList__item-wrap">
          <img src={heart} className="icon-heart" />
          <h2 className="title">My Wish List</h2>
          <div className="wishList__item-top">
            <h4 className="heading">Product name</h4>
            <h4 className="heading">Unit price</h4>
            <h4 className="heading">Stock status</h4>
          </div>
          {wishList.map((item) => (
            <div className="wishList__item-bottom">
              <div className="wishList__item">
                <div className="wishList__item-pro">
                  <a href="#" onClick={(e) => removeWishList(e)}>
                    <img src={remove} />
                  </a>
                  <img src={item.image} />
                </div>
              </div>
              <div className="wishList__item">
                <div className="wishList__item-price">
                  <p className="price-sale">{item.discount} USD</p>
                  <p className="price">{item.price} USD</p>
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
          ))}
        </div>
      </div>
    </>
  );
}

export default WishList;
