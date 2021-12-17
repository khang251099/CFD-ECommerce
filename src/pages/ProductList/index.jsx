import React from "react";
import { useParams } from "react-router-dom";
import LeftMenu from "./LeftMenu";
import MainBottom from "./MainBottom";
import MainTop from "./MainTop";

const ProductList = (props) => {
    const { id } = useParams();
    if (!id) {
    }
    return (
        <div className="container-fluid">
            <div className="category-list">
                <MainTop />
                <LeftMenu />
                <MainBottom />
            </div>
        </div>
    );
};

export default ProductList;
