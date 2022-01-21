import React from "react";
import PagnationContent from "../../../components/Pagnation";
import moreProducts from "../../../assets/icons/more-products.svg";

const MainBottom = (props) => {
  let { noOfPages, page, handleChange, handleShowMore } = props;
  console.log("no of page main bottom ", noOfPages);

  return (
    <div className="main-bottom">
      <div
        className="pagination-wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ fontFamily: "Open Sans", fontize: "12px" }}>Page</p>
        <PagnationContent
          count={noOfPages}
          page={page}
          handleChange={handleChange}
        />
      </div>

      <div className="btn-show-more" onClick={handleShowMore}>
        <a href="#">
          <p>Show more products </p>
          <img src={moreProducts} alt="" />
        </a>
      </div>
      <div className="main-bottom-right">
        <div
          className="text-small"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            className="text"
            style={{
              fontSize: "12px",
              color: " #ffff",
              fontFamily: "Poppins",
              fontWeight: 600,
              color: "#A9A9A9",
            }}
          >
            117
          </span>
        </div>
        <a href="#">
          <p>Products</p>
        </a>
      </div>
    </div>
  );
};

export default MainBottom;
