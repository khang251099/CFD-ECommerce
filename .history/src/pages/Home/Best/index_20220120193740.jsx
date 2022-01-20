import React from "react";
import ProductCard from "../../../components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

// import "swiper/css";
// import "swiper/css/navigation";

import "./style.scss";
SwiperCore.use([Navigation]);

const BestFamer = (props) => {
  const { product } = props;
  return (
    <>
      <div className="product__item-wrap">
        {product &&
          product
            .slice(-3)
            .map((item) => <ProductCard data={item} key={item.id} />)}
      </div>
    </>
  );
};

export default BestFamer;
