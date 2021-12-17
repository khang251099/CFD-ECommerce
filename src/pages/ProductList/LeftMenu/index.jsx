import React from "react";
import ProductCard from "../../../componens/ProductCard";
import mockData from "../../../core/mockData/mock";
import Categories from "./Categories";
import Brands from "./Brands";
import Rating from "./Rating";


const LeftMenu = () => {
  const pro = mockData.data.product;
  const data = mockData.data.category;
  return (
    <div className="mainCenter__item-wrap">
      <div className="item-left">
        <Categories data={data} />
        <Brands data={data} />
        <Rating />


        <div className="range-slider">
          <h3 className="title">Price</h3>
          <form>
            <input type="hidden" name="min-value" value="" />
            <input type="hidden" name="max-value" value="" />
          </form>
        </div>
      </div>
      <div className="item-right">
        {/* <div className="product__item-list">
          <div className="product-item">
            <img
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              style={{ width: "268px", height: "280px", borderRadius: "12px" }}
            />
            <div className="product-info">
              <div className="info-left">
                <h3 className="title"> Product title</h3>
                <p className="desc">Space for a small product description</p>
                <div className="rate">
                  <img src={rate} />
                  <img src={rate} />
                  <img src={rate} />
                  <img src={rate} />
                  <img src={rate} />
                </div>
                <div className="info-main">
                  <div className="main-item fresh">
                    <p>Fresheness</p>
                    <p>
                      <strong>New</strong>(Extra fresh)
                    </p>
                  </div>
                  <div className="main-item">
                    <p>Farm</p>
                    <p>Grocery Tarm Fields</p>
                  </div>
                  <div className="main-item">
                    <p>Delivery</p>
                    <p>Europe</p>
                  </div>
                  <div className="main-item">
                    <p>Stock</p>
                    <p>320 pcs</p>
                  </div>
                </div>
              </div>
              <div className="info-right">
                <h3 className="title">36.99 USD</h3>
                <p className="price-sale">48.56</p>
                <p className="free-ship">Free shipping</p>
                <p className="delivery">Delivery in 1 day</p>
                <a href="#" className="detail">
                  <p>Product Detail</p>
                  <img src={moreProducts} />
                </a>
                <a href="#" className="wish-list">
                  <img src={wishList} />
                  <p>Add to wish list</p>
                </a>
              </div>
            </div>
          </div>
        </div> */}
        <div className="product__item-wrap">
          {pro?.map((item) => (
            <ProductCard data={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;
