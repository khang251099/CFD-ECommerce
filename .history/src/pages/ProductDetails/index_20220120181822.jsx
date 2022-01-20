import React, { useState, useEffect } from "react";
import DetailsBottom from "./DetailsBottom";
import DetailsMiddle from "./DetailsMiddle";
import DetailsTop from "./DetailsTop";
import { filterById, filterByCate } from "../../utils/helpers/index";
import { useParams } from "react-router-dom";
import mockData from "../../core/mockData/mock";
import productApi from "../../core/api/product";
const ProductDetails = (props) => {
  const [pro, setPro] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const product = await productApi.getById(id);
      console.log("product", product);
    };
    fetchData();
  }, []);
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
