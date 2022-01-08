import _ from "lodash";
import { ADD_CART, REMOVE_CART } from "../actions/cart";
const initCart = [];

const reducer = (state = initCart, action) => {
  switch (action.type) {
    case ADD_CART: {
      let newState;
      const { payload } = action;
      const product = payload.product;
      // let total=0;
      if (state.find((idx) => idx.id === product.id)) {
        newState = state.map((idx) => {
          if (idx.id === product.id) {
            idx.count++;
            idx.total = !_.isEmpty(product.discount)
              ? parseInt(product.discount * idx.count)
              : parseInt(product.price * idx.count);
          }
          console.log(idx);
          return idx;
        });
      } else {
        newState = [
          ...state,
          {
            ...product,
            count: 1,
            total: !_.isEmpty(product.discount)
              ? product.discount
              : product.price,
          },
        ];
      }
      return initCart;
    }

    case REMOVE_CART: {
      const { payload } = action;
      const product = payload.product;
      let newState;
      const findPro = state.find((idx) => idx.id === product.id);
      if (!_.isEmpty(findPro)) {
        findPro.count > 1
          ? (newState = state.map((idx) => {
              if (idx.id === product.id) {
                idx.count -= 1;
              }
              return idx;
            }))
          : (newState = _.reject(state, function (el) {
              return el.id === product.id;
            }));
      }
      return initCart;
    }
    default:
      return state;
  }
};

export default reducer;
