import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import ProductCard from '../../componens/ProductCard'
import mockData from "../../../core/mockData/mock";
import moreProducts from "../../../assets/icons/more-products.svg";
SwiperCore.use([Autoplay]);

const Headline = () => {
    const pro = mockData.data.product;
    return (
        <>
            <div className="headline-top">
                <h3 className="heading" style={{ marginBottom: "37px" }}>
                    Section Headline
                </h3>
                <div className="btn-flex">
                    <p>Button</p>
                    <a href="#">
                        <img src={moreProducts} />
                    </a>
                </div>
            </div>
            <div className="product__item-wrap">
                <Swiper slidesPerView={4} spaceBetween={30}
                    autoplay={{ delay: 3500, disableOnInteraction: false }} >
                    {pro?.map((item) => (
                        <SwiperSlide><ProductCard data={item} /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>

    )
}

export default Headline



