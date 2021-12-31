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
  const productCate = mockData.data.category.find((index) => index.id);

  return (
    <div className="container-fluid">
      <DetailsTop />
      <DetailsMiddle product={data} />
      <DetailsBottom relate={productCate} />
    </div>
  );
};

export default ProductDetails;
