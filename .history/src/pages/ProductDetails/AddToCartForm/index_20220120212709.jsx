import React, { useNavigate } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_cart } from "../../../redux/actions/cart";
import PropTypes from "prop-types";
import addToCart from "../../../assets/icons/addToCart.svg";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import "./style.scss";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
AddToCartForm.propTypes = {};

function AddToCartForm(props) {
  const { data } = props;
  toast.configure({ autoClose: 1000 });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCart = async () => {
    await dispatch(add_cart(data));
    toast.success("Add to cart list successfully");
    setTimeout(() => {
      navigate("/cart");
    }, 1500);
  };
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
          <img src={addToCart} onClick={addToCart} />
          <a href="#">
            <p>Add to cart</p>
          </a>
        </div>
      </div>
    </form>
  );
}

export default AddToCartForm;
