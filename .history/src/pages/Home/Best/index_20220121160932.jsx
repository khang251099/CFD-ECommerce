import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../../components/ProductCard";

const BestFamer = (props) => {
  const { product } = props;
  return (
    <>
      {/* <div className="product__item-wrap">
        {product &&
          product
            .slice(-3)
            .map((item) => <ProductCard data={item} key={item.id} />)}
      </div> */}
      <Swiper slidesPerView={3} spaceBetween={24} className="customer__swiper">
        <div className="product__item-wrap">
          {product?.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductCard data={item} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default BestFamer;
