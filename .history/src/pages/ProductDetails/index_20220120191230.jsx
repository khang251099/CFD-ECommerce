import React, { useState, useEffect } from "react";
import DetailsBottom from "./DetailsBottom";
import DetailsMiddle from "./DetailsMiddle";
import DetailsTop from "./DetailsTop";
import { filterById, filterByCate } from "../../utils/helpers/index";
import { useParams } from "react-router-dom";
import mockData from "../../core/mockData/mock";
import productApi from "../../core/api/product";
import categoryApi from "../../core/api/category";
const ProductDetails = (props) => {
  const [pro, setPro] = useState([]);
  const [cate, setCate] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const productId = await productApi.getById(id);
      const cateList = await categoryApi.getAll();

      setPro(productId);

      setCate(cateList);
    };
    fetchData();
  }, []);

  const productCate = cate.find((index) => index.id);
  console.log("cate id", productCate);
  console.log("product cate", productCate);

  return (
    <div className="container-fluid">
      <DetailsTop />
      <DetailsMiddle product={pro} />
      <DetailsBottom relate={productCate} />
    </div>
  );
};

export default ProductDetails;
