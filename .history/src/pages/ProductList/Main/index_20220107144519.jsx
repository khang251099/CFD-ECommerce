import React from "react";
import ProductCard from "../../../components/ProductCard";
import { Divider } from "@material-ui/core";

const Main = (props) => {
  let { product, page, itemsPerPage } = props;
  // const listCate = product.map((item) => console.log(item));
  // console.log("product list cate", product);

  return (
    <div className="item-right">
      <div className="product__item-wrap">
        {product
          ?.slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((item) => {
            console.log("item", item);
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
