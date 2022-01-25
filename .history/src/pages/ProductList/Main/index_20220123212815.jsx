import React from "react";
import ProductCard from "../../../components/ProductCard";
import { Divider } from "@material-ui/core";
import _ from "lodash";

const Main = (props) => {
  let { product, page, itemsPerPage, totalProduct } = props;
  console.log(totalProduct);
  return (
    <div className="item-right">
      <div className="product__item-wrap">
        {!_.isEmpty(totalProduct) ? (
          product
            ?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((item) => {
              return (
                <React.Fragment>
                  <ProductCard data={item} key={item.id} />
                </React.Fragment>
              );
            })
        ) : (
          <p>No products matched</p>
        )}
      </div>
      <Divider />
    </div>
  );
};

export default Main;
