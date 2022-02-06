import React from "react";
import { add_cart } from "../../redux/actions/cart";
// import rate from "../../../assets/images/rate.svg";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { add_history } from "../../redux/actions/history";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.scss";

const ProductCard = (props) => {
  toast.configure({ autoClose: 1000 });

  let { data } = props;

  const dispatch = useDispatch();

  const addToHistory = (e) => {
    dispatch(add_history(data));
  };

  const addCart = async (e) => {
    e.preventDefault();

    await dispatch(add_cart(data));
    toast.success("Add to cart successfully");
  };

  return (
    <div className="product-item">
      <div className="products-card">
        <div className="card">
          <div className="product-image">
            <Link to={`/product/${data.id}`} onClick={addToHistory}>
<<<<<<< HEAD
              <img
                src={data.image}
                style={{
                  width: "237px",
                  height: "180px",
                  borderRadius: "12px",
                }}
                alt=""
              />
=======
              <img src={data.image} alt="" />
>>>>>>> dffbb8bb4d59bae7018b6a001cfbc9468737b159
            </Link>
            {parseInt(data.discount) > 0 ? (
              <div className="sale-item">
                <p className="sale">-{data.discount}%</p>
              </div>
            ) : null}
          </div>
<<<<<<< HEAD

          <div className="product-content">
            <h3 className="product-title">{data.title}</h3>
            <p className="desc">{data.description}</p>
=======
          <div className="product-content">
            <h3 className="product-title">{data.title}</h3>
            <p className="desc">{data.description}</p>
            <div className="rate  "></div>
>>>>>>> dffbb8bb4d59bae7018b6a001cfbc9468737b159
            <div className="product-button">
              {parseInt(data.discount) > 0 ? (
                <p className="price">
                  {parseInt(data.price * data.discount) / 100} USD
                </p>
              ) : (
                <p className="price">{data.price} USD</p>
              )}
              {parseInt(data.discount) > 0 ? (
                <p className="price-sale">{data.price} USD</p>
              ) : (
                " "
              )}

<<<<<<< HEAD
              <Link to="" onClick={(e) => addCart(e, data)} className="btn-buy">
                <p>Buy now</p>
              </Link>

              {/* {data?.quantity > 0 ? (
              <Link to="" onClick={(e) => addCart(e, data)} className="btn-buy">
                <p>Buy now</p>
              </Link>
            ) : (
              <Link to="" className="btn-buy-disable">
                <p>Buy now</p>
              </Link>
            )} */}
=======
              <Link to="" onClick={(e) => addCart(e, data)} className="btn-buy">
                <p>Buy now</p>
              </Link>
>>>>>>> dffbb8bb4d59bae7018b6a001cfbc9468737b159
            </div>
          </div>
        </div>
        <div className="back-card"></div>
        <div className="thid-card"></div>
      </div>
    </div>
  );
};

export default ProductCard;
