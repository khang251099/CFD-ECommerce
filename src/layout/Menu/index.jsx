import React, { useEffect, useState } from "react";
import mockData from "../../core/mockData/mock";

const Menu = () => {
  const [cate, setCate] = useState([]);

  useEffect(() => {
    (async () => {
    })();
    setCate(mockData.data.category);
    return () => {
    };
  }, []);

  return (
    <section className="menu">
      <div className="menu__item-wrap">
        {cate?.map((item) => (
          <div className="menu__item" key={item.id}>
            <a href="#">
              <span>{item.name}</span>
            </a>
            <div className="menu__item--icon">
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;

