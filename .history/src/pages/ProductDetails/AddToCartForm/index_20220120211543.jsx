import React from "react";
import PropTypes from "prop-types";
import addToCart from "../../../assets/icons/addToCart.svg";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import "./style.scss";

AddToCartForm.propTypes = {};

function AddToCartForm({ onClick }) {
  console.log(onClick);
  return (
    <form>
      <div className="addtocart-item">
        <div className="addtocart-item-left">
          <input type="number" placeholder="1" />
          <select name="type">
            <option value="pcs">Pcs</option>
          </select>
        </div>
        <div className="addtocart-item-right">
          <img src={addToCart} />
          <a href="#">
            <p>Add to cart</p>
          </a>
        </div>
      </div>
    </form>
  );
}

export default AddToCartForm;
