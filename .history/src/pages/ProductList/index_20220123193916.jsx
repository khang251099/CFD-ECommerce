import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import mockData from "../../core/mockData/mock";
import {
  filterByRangePrice,
  filterMaxToMinPrice,
  filterMinToMaxPrice,
  filterAtoZ,
  filterZtoA,
} from "../../utils/helpers/index";

import LeftMenu from "./LeftMenu";
import Main from "./Main";
import MainBottom from "./MainBottom";
import MainTop from "./MainTop";
import productApi from "../../core/api/product";

const ProductList = (props) => {
  const { id } = useParams();
  const [value, setValue] = useState([0, 50]);
  const [checked, setChecked] = useState(false);
  const [checkedMin, setCheckedMin] = useState(false);
  const [checkedZToA, setCheckedZToA] = useState(false);
  const [checkedAToZ, setCheckedAToZ] = useState(false);
  const [page, setPage] = useState(1);
  const [pro, setPro] = useState([]);
  const newPro;
  useEffect(() => {
    try {
      const fetchData = async () => {
        const productList = await productApi.getAll();
        // const  product = await productApi.getAll();
        setPro(productList);
      };
      fetchData();
    } catch (error) {
      console.log("failed to fetch data", error);
    }
  }, [setPro]);

  function filterByRangePrice([startPrice, endPrice]) {
    return product.filter(
      (index) => index.price >= startPrice && index.price <= endPrice
    );
  }
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [noOfPages, setNoOfPages] = useState(
    Math.ceil(pro.length / itemsPerPage)
  );
    console.log('no of page index', noOfPages);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleShowMore = (event, value) => {
    event.preventDefault();
    setItemsPerPage(itemsPerPage + 9);
    setNoOfPages(noOfPages === 1 ? noOfPages : noOfPages - 1);
  };

  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    setPro(filterByRangePrice(value));
  };

  const handleFilter = (check, name) => {
    switch (name) {
      case "max": {
        setChecked(check);
        setCheckedMin(false);
        setCheckedAToZ(false);
        setCheckedZToA(false);
        check === true
          ? setPro(filterMaxToMinPrice(pro))
          : console.log("check false");
        return pro;
      }

      case "min":
        {
          setCheckedMin(check);
          setCheckedAToZ(false);
          setCheckedZToA(false);
          setChecked(false);
          check === true
            ? setPro(filterMinToMaxPrice(pro))
            : console.log("check false");
        }
        return pro;

      case "AToZ": {
        // if(checked || checkedMin) {
        //   pro.sort(
        //     function(a, b) {
        //        if (a.title === b.title) {
        //           return b.price - a.price;
        //        }
        //        return a.city > b.city ? 1 : -1;
        //     });
        // }
        setCheckedAToZ(check);
        setCheckedZToA(false);
        setCheckedMin(false);
        setChecked(false);
        check === true ? setPro(filterAtoZ(pro)) : console.log("check false");
        return pro;
      }

      case "ZToA": {
        setCheckedZToA(check);
        setCheckedAToZ(false);
        setCheckedAToZ(false);
        setCheckedMin(false);
        setChecked(false);
        check === true ? setPro(filterZtoA(pro)) : console.log("check false");
        return pro;
      }

      default:
        return pro;
    }
  };

  return (
    <div className="container-fluid">
      <div className="category-list">
        <MainTop
          checked={checked}
          checkedMin={checkedMin}
          checkedZToA={checkedZToA}
          checkedAToZ={checkedAToZ}
          handleFilter={handleFilter}
          totalProduct={pro.length}
        />
        <div className="mainCenter__item-wrap">
          <LeftMenu rangeSelector={rangeSelector} value={value} />
          <Main product={pro} itemsPerPage={itemsPerPage} page={page} />
        </div>
        <MainBottom
          noOfPages={noOfPages}
          page={page}
          handleChange={handleChange}
          handleShowMore={handleShowMore}
          totalProduct={pro.length}
        />
      </div>
    </div>
  );
};

export default ProductList;
