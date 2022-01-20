import React from "react";
import mockData from "../../core/mockData/mock";
import labels from "../../utils/label";
import Cart from "../Cart";
import BannerCate from "./BannerCate";
import Best from "./Best";
import BlogPost from "./BlogPosts";
import Headline from "./Headline";
import LeftMenu from "./LeftMenu";
import OurCustomer from "./OurCustomer";
import categoryApi from "../";

const Home = () => {
  // const [cate, setCate] = useState([]);

  // useEffect(() => {
  //   (async () => {})();
  //   setCate(mockData.data.category);
  //   return () => {};
  // }, []);
  const listCate = mockData.data.category;

  const pro = mockData.data.product;
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
            <Best product={pro} />
          </section>
          <section className="best-selling --from">
            <LeftMenu
              listCate={listCate}
              title={labels.LEFT_MENU.BEST_FAMER}
              btn={labels.LEFT_MENU.BTN_PRO}
            />
            <Best product={pro} />
          </section>
          <section className="customer">
            <OurCustomer />
          </section>
          <section className="headline">
            <Headline />
          </section>
          <section className="read-blog">
            <BlogPost />
          </section>
        </div>
      </div>
    </section>
  );
};

export default Home;
