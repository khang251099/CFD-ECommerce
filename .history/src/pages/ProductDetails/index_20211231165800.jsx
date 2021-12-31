import React from "react";
import DetailsBottom from "./DetailsBottom";
import DetailsMiddle from "./DetailsMiddle";
import DetailsTop from "./DetailsTop";
import { filterById, filterByCate } from "../../utils/helpers/index";
import { useParams } from "react-router-dom";
import mockData from "../../core/mockData/mock";

const ProductDetails = (props) => {
  const { id } = useParams();
  const data = filterById(id);
  const productCate = mockData.data.category();
  console.log(productCate);
  return (
    <div className="container-fluid">
      <DetailsTop />
      <DetailsMiddle product={data} />
      <DetailsBottom relate={data} />
    </div>
  );
};

export default ProductDetails;
