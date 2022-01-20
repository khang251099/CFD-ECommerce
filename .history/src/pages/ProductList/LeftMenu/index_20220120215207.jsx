import React, { useEffect } from "react";
import mockData from "../../../core/mockData/mock";
import Categories from "./Categories";
import Brands from "./Brands";
import Rating from "./Rating";
import Range from "./Range";
import categoryApi from "../../../core/api/category";

const LeftMenu = () => {
  const data = mockData.data.category;
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const cateList = await categoryApi.getAll();
        setData(cateList);
      };
      fetchData();
    } catch (error) {
      console.log("Failed to fetch data", error);
    }
  }, []);
  return (
    <div className="item-left">
      <Categories data={data} />
      <Brands data={data} />
      <Rating />
      <Range product={data} />
    </div>
  );
};

export default LeftMenu;
