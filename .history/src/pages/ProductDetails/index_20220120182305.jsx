import React, { useState, useEffect } from "react";
import DetailsBottom from "./DetailsBottom";
import DetailsMiddle from "./DetailsMiddle";
import DetailsTop from "./DetailsTop";
import { filterById, filterByCate } from "../../utils/helpers/index";
import { useParams } from "react-router-dom";
import mockData from "../../core/mockData/mock";
import productApi from "../../core/api/product";
import categoryApi from "../../core/api/product";
const ProductDetails = (props) => {
  const [product, setProduct] = useState([]);
  const [cate, setCate] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const productId = await productApi.getById(id);
      const cateList = await categoryApi.getAll();
      setProduct(product);
      setCate(cateList);
    };
    fetchData();
  }, []);
  console.log("pro", pro);

  const productCate = cate.find((index) => index.id);
  console.log("cate list", mockData.data.category);

  return (
    <div className="container-fluid">
      <DetailsTop />
      <DetailsMiddle product={product} />
      <DetailsBottom relate={productCate} />
    </div>
  );
};

export default ProductDetails;
