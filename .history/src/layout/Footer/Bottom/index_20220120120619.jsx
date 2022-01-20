import React, { useEffect, useState } from "react";
import mockData from "../../../core/mockData/mock";

const FooterBottom = () => {
  const [tag, setTag] = useState([]);

  useEffect(() => {
    (async () => {})();
    setTag(mockData.data.tagProducts);
    return () => {};
  }, []);

  return (
    <>
      <div className="footer__item-wrap --bottom">
        <div className="footer__item-heading">Product tags</div>
        {tag?.map((item) => (
          <div className="footer__item-tags" key={item.id}>
            <a href="#">
              <p>{item.name}</p>
            </a>
          </div>
        ))}
      </div>
      {/* <div className="cart">
          <Popup
            modal
            trigger={
              <a href="#">
                <img src={cart} alt="cart" />
              </a>
            }
          >
            {(close) => <PopupCart close={close} />}
          </Popup>
          <span className="quality">{countTotal}</span>
        </div> */}
    </>
  );
};

export default FooterBottom;
