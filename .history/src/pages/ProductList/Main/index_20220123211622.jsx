import React from "react";
import ProductCard from "../../../components/ProductCard";
import { Divider } from "@material-ui/core";

const Main = (props) => {
  let { product, page, itemsPerPage, totalProduct } = props;
  const isCheck = totalProduct <= 0 ? true : false;
  return (
    <div className="item-right">
      <div className="product__item-wrap">
        {product
          ?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((item) => {
            return (
              <React.Fragment>
                <ProductCard data={item} key={item.id} />
              </React.Fragment>
            );
          })}
      </div>
      <Divider />
    </div>
  );
};

export default Main;
