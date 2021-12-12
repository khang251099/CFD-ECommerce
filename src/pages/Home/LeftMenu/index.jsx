import React from 'react'
import moreProducts from "../../../assets/icons/more-products.svg";

const LeftMenu = (props) => {
    let { listCate, title, btn } = props;
    return (
        <aside className="item__left">
            <h3 className="heading">{title}</h3>
            <ul className="list-cate">
                {listCate?.slice(-4).map((val) => (
                    <li className="cate-item" key={val.id}>
                        <a href="javascript-void(0)">
                            <p>{val.name}</p>
                        </a>
                    </li>
                ))}
            </ul>
            <div className="more-cates">
                <a href="#">
                    <p>{btn}</p>
                </a>
                <img src={moreProducts} alt="" />
            </div>
        </aside>
    )
}

export default LeftMenu
