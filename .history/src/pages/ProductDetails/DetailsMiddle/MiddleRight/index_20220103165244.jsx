import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import rate from "../../../../assets/icons/rate-yellow.svg";
import AddToCartForm from "../../AddToCartForm";
import mockData from "../../../../core/mockData/mock";
import wishList from "../../../../assets/icons/wishList-color.svg";
import compare from "../../../../assets/icons/compare-color.svg";
import TabContent from "./Tab";
import { add_wl } from "../../../../redux/actions/wishList";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import "./style.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MiddleRight(props) {
  toast.configure({ autoClose: 1000 });

  let { data } = props;
  const dispatch = useDispatch();

  const handleAddToCart = (formValues) => {
    console.log("form submit");
  };
  const navigate = useNavigate();
  const addToWishList = async (e) => {
    e.preventDefault();

    await dispatch(add_wl(data));
    toast.success("Add to wish list successfully");

    setTimeout(() => {
      navigate("/wishlist");
    }, 1500);
  };
  return (
    <React.Fragment>
      {data?.map((item) => (
        <div className="detail-middle-item --right">
          <h2 className="title">{item.title}</h2>
          <div className="cus-vote">
            <div className="rate">
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
              <img src={rate} />
            </div>
            <p>(1 customer review)</p>
          </div>
          <div className="desc">
            <p>{item.description}</p>
          </div>
          <div className="info-parameter">
            <div className="--left">
              <div className="info-parameter-item ">
                <p>SKU:</p>
                <span>76645</span>
              </div>
              <div className="info-parameter-item">
                <p>Category:</p>
                <a href="#">Vegetables</a>
              </div>
              <div className="info-parameter-item">
                <p>Stock:</p>
                <a href="#">In Stock</a>
              </div>
              <div className="info-parameter-item">
                <p>Farm:</p>
                <span>Grocerry Tarm Fields</span>
              </div>
            </div>
            <div className="--right">
              <div className="info-parameter-item">
                <p>Freshness:</p>
                <span>1 days old</span>
              </div>
              <div className="info-parameter-item">
                <p>Buy by:</p>
                <span>pcs,kgs,box,pack</span>
              </div>
              <div className="info-parameter-item">
                <p>Delivery:</p>
                <span>in 2 days</span>
              </div>
              <div className="info-parameter-item">
                <p>Delivery area:</p>
                <span>Czech republic</span>
              </div>
            </div>
          </div>
          <div className="addToCart-wrap" style={{ paddingTop: "16px" }}>
            <div className="addToCart-wrap-left">
              {parseInt(item.discount) > 0 ? (
                <h4>{parseInt(item.price * item.discount) / 100} USD</h4>
              ) : (
                `${0} USD`
              )}
              <p>{item.price} USD</p>
            </div>
            <div className="addToCart-wrap-right">
              <AddToCartForm onSubmit={handleAddToCart} />
            </div>
          </div>
          <div className="option-wrap">
            <div className="wish-list">
              <a href="#">
                {" "}
                <img src={wishList} />
              </a>

              <a href="#" onClick={(e) => addToWishList(e)}>
                <p>Add to my wish list</p>
              </a>
            </div>
            <div className="compare">
              <a href="#">
                {" "}
                <img src={compare} />
              </a>

              <a href="#">
                <p>Compare</p>
              </a>
            </div>
          </div>
          <TabContent />
        </div>
      ))}
    </React.Fragment>
  );
}

export default MiddleRight;
