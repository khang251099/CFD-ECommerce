import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LeftMenu from "./LeftMenu";
import Main from "./Main";
import MainBottom from "./MainBottom";
import MainTop from "./MainTop";
import mockData from "../../core/mockData/mock";
import productApi from "../../core/api/product";

const ProductList = (props) => {
  const { id } = useParams();

  const [pro, setPro] = useState([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const productList = await productList.getAll();
        setPro(productList);
      };
      fetchData();
    } catch (error) {
      console.log("failed to fetch data", error);
    }
  }, []);
  // const pro = mockData.data.product;

  const [page, setPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [noOfPages, setNoOfPages] = useState(
    Math.ceil(pro.length / itemsPerPage)
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleShowMore = (event, value) => {
    setItemsPerPage(itemsPerPage + 9);
    setNoOfPages(noOfPages === 1 ? noOfPages : noOfPages - 1);
    event.preventDefault();
  };

  return (
    <div className="container-fluid">
      <div className="category-list">
        <MainTop />
        <div className="mainCenter__item-wrap">
          <LeftMenu />
          <Main product={pro} itemsPerPage={itemsPerPage} page={page} />
        </div>
        <MainBottom
          noOfPages={noOfPages}
          page={page}
          handleChange={handleChange}
          handleShowMore={handleShowMore}
        />
      </div>
    </div>
  );
};

export default ProductList;
