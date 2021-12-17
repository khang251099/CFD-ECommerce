import React from 'react'
import ProductCard from "../../../componens/ProductCard";
import { Divider } from "@material-ui/core";

const Main = (props) => {
    let { pro, page, itemsPerPage } = props;

    return (
        <div className="item-right">
            <div className="product__item-wrap">
                {pro
                    .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                    .map(item => {
                        return (
                            <>
                                <ProductCard data={item} key={item.id} />
                            </>
                        );
                    })}
            </div>
            <Divider />
            {/* <Box component="span">
                <Pagination
                    count={noOfPages}
                    page={page}
                    onChange={handleChange}
                    defaultPage={1}
                    color="primary"
                    size="large"
                    showFirstButton
                    showLastButton
                />
            </Box> */}
        </div>
    )
}

export default Main

