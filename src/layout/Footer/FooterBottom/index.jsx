import React from "react";
import PropTypes from "prop-types";
FooterBottom.propTypes = {};

function FooterBottom(props) {
  return (
    <div className="footer__item-wrap --bottom">
      <div className="footer__item-heading">Product tags</div>
      <div className="footer__item-tags">
        <a href="#">
          <p>Beans</p>
        </a>
      </div>
    </div>
  );
}

export default FooterBottom;
