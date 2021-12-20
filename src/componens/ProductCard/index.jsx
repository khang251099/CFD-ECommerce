import React from "react";
// import rate from "../../../assets/images/rate.svg";
import {
  Link,
} from "react-router-dom";

const ProductCard = (props) => {
  let { data } = props;
  const priceSale =
    parseInt(data.discount) > 0 ? data.price * data.discount : 0;
  return (
    <div className="product-item">
      <div className="products-card">
        <div className="product-image">
          <Link
            to={`/product/${data.id}`}>
            <img
              src={data.image}
              style={{
                width: "237px",
                height: "180px",
                borderRadius: "12px",
              }}
              alt=""
            />
          </Link>
          {parseInt(data.discount) > 0 ? (
            <div className="sale-item">
              <p className="sale">-{data.discount}%</p>
            </div>
          ) : null}
        </div>
        <div className="product-content">
          <h3 className="product-title">{data.title}</h3>
          <p className="desc">{data.description}</p>
          <div className="rate  ">
            {/* <img src={rate} alt="" />
            <img src={rate} alt="" />
            <img src={rate} alt="" />
            <img src={rate} alt="" />
            <img src={rate} alt="" /> */}
          </div>
          <div className="product-button">
            <p className="price">{data.price} USD</p>
            {priceSale > 0 ? <p className="price-sale">{priceSale}</p> : null}
            <a href="./" className="btn-buy">
              <p>Buy now</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
