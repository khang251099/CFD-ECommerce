import React from "react";
import DetailsBottom from "./DetailsBottom";
import DetailsMiddle from "./DetailsMiddle";
import DetailsTop from "./DetailsTop";
import { filterById } from "../../utils/helpers/index";
import { useParams } from "react-router-dom";
import mockData from "../../core/mockData/mock";

const ProductDetails = (props) => {
  const { id } = useParams();
  const data = filterById(id);
  const pro = mockData.data.category.find((item) => item.id === id);
  console.log(pro)
  // const relatedTo = mockData.data.product.filter((item) => item.id !== pro.id);
  // console.log(pro);
  // console.log(data);
  return (
    <div className="container-fluid">
      <DetailsTop />
      <DetailsMiddle product={data} />
      <DetailsBottom relate={relatedTo} />
    </div>
  );
};

export default ProductDetails;
