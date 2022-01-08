import React from "react";
import ProductCard from "../../../components/ProductCard";
import { Divider } from "@material-ui/core";

const Main = (props) => {
  let { pro, page, itemsPerPage } = props;
  const listCate = pro?.map((item) => console.log(item));
  console.log(listCate);

  return (
    <div className="item-right">
      <div className="product__item-wrap">
        {pro
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
