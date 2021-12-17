import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LeftMenu from "./LeftMenu";
import Main from "./Main";
import MainBottom from "./MainBottom";
import MainTop from "./MainTop";
import mockData from '../../core/mockData/mock';

const ProductList = (props) => {
    const { id } = useParams();
    if (!id) {
    }
    const pro = mockData.data.product;
    const itemsPerPage = 9;
    const [page, setPage] = useState(1);
    const [noOfPages] = useState(
        Math.ceil(pro.length / itemsPerPage)
    );
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <div className="container-fluid">
            <div className="category-list">
                <MainTop />
                <div className="mainCenter__item-wrap">
                    <LeftMenu />
                    <Main pro={pro} itemsPerPage={itemsPerPage} page={page} />
                </div>
                <MainBottom noOfPages={noOfPages} page={page} handleChange={handleChange} />
            </div>
        </div>
    );
};

export default ProductList;
