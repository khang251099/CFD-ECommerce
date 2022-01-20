import React from "react";
import ProductCard from "../../../components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/scss";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import "./style.scss";
SwiperCore.use([Pagination, Navigation]);

const BestFamer = (props) => {
  const { product } = props;
  return (
    <div className="product__item-wrap">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        className="mySwiper"
      >
        {" "}
        <SwiperSlide>
          {product?.map((item) => (
            <ProductCard data={item} key={item.id} />
          ))}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BestFamer;
