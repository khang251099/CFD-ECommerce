import React from "react";
import { useParams } from "react-router-dom";
import { filterByCate } from "../../utils/helpers/index";
import CategoryMain from "./CategoryMain";
import CategoryTop from "./CategoryTop";

const ProductList = (props) => {
    const { id } = useParams();
    const cate = filterByCate(id);
    if (!id) {
    }
    return (
        <div className="container-fluid">
            <div className="category-list">
                <CategoryTop />
                <CategoryMain />
            </div>
        </div>
    );
};

export default ProductList;
