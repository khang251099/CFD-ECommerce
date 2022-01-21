import React from "react";
import ProductCard from "../../../components/ProductCard";
import { Divider } from "@material-ui/core";

const Main = (props) => {
  let { product, page, itemsPerPage } = props;

  return (
    <div className="item-right">
      <div className="product__item-wrap">
        {product
          ?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((item) => {
            return (
              <>
                <ProductCard data={item} key={item.id} />
              </>
            );
          })}
      </div>
      <Divider />
    </div>
  );
};

export default Main;
