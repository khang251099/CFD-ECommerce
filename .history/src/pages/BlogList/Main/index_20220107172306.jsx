import React from "react";
import PropTypes from "prop-types";

Main.propTypes = {};

function Main(props) {
  return (
    <div className="read-blog-bottom">
      <div className="blog-left" style={backGroundImage}>
        <div className="blog-thumbnail">
          <img
            src=""
            alt=""
            style={{ width: "469px", height: "195px", opacity: 0 }}
          />
          <div
            className="text-small"
            style={{
              width: "80px",
              height: "18px",
              backgroundColor: "#F4F8EC",
              borderRadius: "12px",
            }}
          >
            <p
              className="text"
              style={{
                fontSize: "12px",
                color: " #6A983C",
                fontFamily: "Poppins",
                fontWeight: 600,
              }}
            >
              Dinner tips
            </p>
          </div>
        </div>
        <div className="blog-content">
          <h4 className="heading">
            Our chef tips for a great and tasty dinner ready in 20 minutes
          </h4>
          <div className="blog-info">
            <div className="avatar">
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Author"
                style={{ width: "32px", height: "32px", borderRadius: "50%" }}
              />
            </div>
            <p className="name">Author</p>
            <p className="post-create-at">17.6.2020</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
