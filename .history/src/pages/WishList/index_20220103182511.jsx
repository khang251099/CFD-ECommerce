import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { remove_wl } from "../../redux/actions/wishList";
import { useSelector } from "react-redux";

import heart from "../../assets/icons/wishList.svg";
import remove from "../../assets/icons/close.svg";
import { toast } from "react-toastify";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import "./style.scss";
import "react-toastify/dist/ReactToastify.css";

function WishList(props) {
  toast.configure({ autoClose: 1000 });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addToCart = async (e) => {
    e.preventDefault();
    toast.success("Add to cart list successfully");
    setTimeout(() => {
      navigate("/cart");
    }, 1500);
  };

  //   const removeWishList = async (e) => {
  //     e.preventDefault();
  //     await dispatch(remove_wl(wishList));

  //     toast.success("Remove this product from wish list successfully");
  //   };
  //   const removeWishList=(item)=>{
  //       const newItems=item.id;

  //   }
  const [open, setOpen] = useState(false);
  const [wl, setWl] = useState("");

  const handleClickOpen = (item) => {
    setOpen(true);
    setWl(item);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const wishList = useSelector((state) => state.wl);
  const removeWishList = async () => {
    dispatch(remove_wl(wl));
    handleClose();
    await toast.success("Remove this product from wish list successfully");
  };

  return (
    <>
      <div className="container-fluid">
        <div className="wishList__item-wrap">
          <img src={heart} className="icon-heart" />
          <h2 className="title">My Wish List</h2>
          <div className="wishList__item-top">
            <h4 className="heading">Product name</h4>
            <h4 className="heading">Unit price</h4>
            <h4 className="heading">Stock status</h4>
          </div>
          {Number(wishList) > 0 ? (
            wishList.map((item) => (
              <div className="wishList__item-bottom">
                <div className="wishList__item">
                  <div className="wishList__item-pro">
                    <a href="#" onClick={() => handleClickOpen(item)}>
                      <img src={remove} />
                    </a>
                    <img src={item.image} />
                  </div>
                </div>
                <div className="wishList__item">
                  <div className="wishList__item-price">
                    <p className="price-sale">{item.discount} USD</p>
                    <p className="price">{item.price} USD</p>
                  </div>
                </div>

                <div className="wishList__item">
                  <div className="product-button">
                    <a
                      href="#"
                      className="btn-buy"
                      onClick={(e) => addToCart(e)}
                    >
                      <p>Add to cart</p>
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Wish list is empty</p>
          )}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Do you want to remove this product from wish list?"}
            </DialogTitle>
            <DialogContent></DialogContent>
            <DialogActions>
              <a href="#" onClick={handleClose} className="btn-cancel">
                Cancel
              </a>
              <a href="#" onClick={removeWishList} className="btn-delete">
                Delete
              </a>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
}

export default WishList;
