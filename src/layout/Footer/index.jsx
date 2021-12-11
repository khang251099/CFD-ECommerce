import React from "react";
import PropTypes from "prop-types";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

Footer.propTypes = {};

function Footer(props) {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <FooterTop />
        <FooterBottom />
        <p
          style={{
            marginTop: "48px",
            fontFamily: "Open Sans",
            fontWeight: "400",
            lineHeight: "19px",
            color: "#151515",
          }}
        >
          Copyright &copy; 2020 petrbilek.com{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
