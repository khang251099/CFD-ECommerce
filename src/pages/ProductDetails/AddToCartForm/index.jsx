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
  console.log("data", data);
  toast.configure({ autoClose: 1000 });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const addToCart = async (e) => {
  //   e.preventDefault();
  //   await dispatch(add_cart(data));
  //   toast.success("Add to cart list successfully");
  //   setTimeout(() => {
  //     navigate("/cart");
  //   }, 1500);
  // };
  return <>hihi</>;
}

export default AddToCartForm;
