import React from 'react'

const ProductCard = (props) => {
    let { data } = props;
    const priceSale = data.price * data.discound;
    return (
        <div className="product-item">
            <div className="products-card">
                <div
                    className="product-image"
                    style={{
                        width: "237px",
                        height: "180px",
                        borderRadius: "12px",
                        backgroundColor: "#F9F9F9",
                    }}
                >
                    <img src="" />
                    <div className="sale-item">
                        <p className="sale">-{data.discound}%</p>
                    </div>
                </div>
                <div className="product-content">
                    <h3 className="product-title">{data.title}</h3>
                    <p className="desc">{data.description}</p>
                    <div className="product-button">
                        <p className="price">{data.price}USD</p>
                        <p className="price-sale">{priceSale}</p>
                        <a href="#" className="btn-buy">
                            <p>Buy now</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
