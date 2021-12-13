import React from 'react'
import {
    useParams
} from "react-router-dom";
import { filterByCate } from '../../utils/helpers/index';

const ProductList = (props) => {
    const { id } = useParams();
    const cate = filterByCate(id);
    if (!id) {
        //   return <NoMatch />;
    }
    return (
        <div>
            {cate.product?.map((e) => (
                <div key={e.id}>
                    This is ProductList with {e.id}  page
                </div>
            ))}
        </div>
    )
}

export default ProductList


