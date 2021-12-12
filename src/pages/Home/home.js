import React, { useEffect, useState } from "react";
import mockData from "../../core/mockData/mock";
import labels from "../../utils/label";
import CustomerCard from "../componens/CustomerCard";
import BannerCate from "./BannerCate";
import BestFamer from "./BestFamer";
import BestSell from "./BestSale";
import Headline from "./Headline";
import LeftMenu from "./LeftMenu";
import OurCustomer from "./OurCustomer";

const Home = () => {
  // const [cate, setCate] = useState([]);

  // useEffect(() => {
  //   (async () => {})();
  //   setCate(mockData.data.category);
  //   return () => {};
  // }, []);
  const listCate = mockData.data.category;
  return (
    <section className="home-wrapper">
      <div className="container-fluid">
        <div className="home__item-wrap">
          <section className="category-menu">
            <LeftMenu
              listCate={listCate}
              title={labels.LEFT_MENU.CATE_MENU}
              btn={labels.LEFT_MENU.BTN_CATE}
            />
            <BannerCate />
            <BannerCate />
          </section>
          <section className="best-selling --from">
            <LeftMenu
              listCate={listCate}
              title={labels.LEFT_MENU.BEST_SALE}
              btn={labels.LEFT_MENU.BTN_PRO}
            />
            <BestSell />
          </section>
          <section className="best-selling --from">
            <LeftMenu
              listCate={listCate}
              title={labels.LEFT_MENU.BEST_FAMER}
              btn={labels.LEFT_MENU.BTN_PRO}
            />
            <BestFamer />
          </section>
          <section className="customer">
            <OurCustomer />
          </section>
          <section className="headline">
            <Headline />
          </section>
        </div>
      </div>
    </section>
  );
};

export default Home;
