import React from "react";
import ProductCard from "../../../components/ProductCard";

import "./style.scss";
import _ from "lodash";

const Main = (props) => {
  let { product, page, itemsPerPage, totalProduct } = props;

  return (
    <div className="item-right">
      {totalProduct > 1 ? (
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
      ) : (
        <p className="no-match">No products matched</p>
      )}
    </div>
  );
};

export default Main;
