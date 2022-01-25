import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import ProductCard from "../../../components/ProductCard";

const BestFamer = (props) => {
  const { product } = props;
  return (
    <>
      <Swiper navigation={true} className="mySwiper">
        <div className="product__item-wrap">
          {product?.map((item) => (
            <SwiperSlide key={item.id}>
              <CustomerCard data={item} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default BestFamer;
