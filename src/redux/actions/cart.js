export const ADD_CART = "ADD_CART";

export const add_cart = (id, productName, price, img) => {
  return {
    type: ADD_CART,
    payload: {
      id,
      productName,
      price,
      img,
    },
  };
};
