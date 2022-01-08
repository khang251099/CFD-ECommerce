import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import "./style.scss";

MainTop.propTypes = {};

function handleClick(event) {
  event.preventDefault();
  // console.info("You clicked a breadcrumb.");
}
function MainTop(props) {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          Home page
        </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          onClick={handleClick}
        >
          Fruit and vagetable
        </Link>
        <Typography color="textPrimary">Product title</Typography>
      </Breadcrumbs>
    </>
  );
}

export default MainTop;
