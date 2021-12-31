import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

Additional.propTypes = {};

function Additional(props) {
  return (
    <>
      <h4 className="checkout-heading">Additional informations</h4>
      <div className="desc-step">
        <p className="checkout-desc">
          Need something else? We will make it for you!
        </p>
        <p className="step">Step 4 of 5</p>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="Minimum 3 rows"
        />
        ; }
      </div>
    </>
  );
}

export default Additional;
