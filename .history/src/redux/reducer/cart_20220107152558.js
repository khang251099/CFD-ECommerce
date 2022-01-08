import _ from "lodash";
import {
  ADD_CART,
  REMOVE_CART,
  DELETE_CART,
  UPDATE_QUANTITY_CART,
} from "../actions/cart";
const initCart = [];

const reducer = (state = initCart, action) => {
  switch (action.type) {
    case ADD_CART: {
      let newState;
      const { payload } = action;
      const product = payload.product;

      //let total=0;
      if (state.find((idx) => idx.id === product.id)) {
        newState = state.map((idx) => {
          if (idx.id === product.id) {
            idx.count++;
            //idx.total=total;
            console.log("reducer cart", typeof product.price);
            idx.total = !_.isEmpty(product.discount)
              ? parseInt(product.discount * idx.count)
              : parseInt(product.price * idx.count);
          }
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
      return newState;
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
                idx.total = !_.isEmpty(product.discount)
                  ? parseInt(product.discount * idx.count)
                  : parseInt(product.price * idx.count);
              }
              return idx;
            }))
          : (newState = _.reject(state, function (el) {
              return el.id === product.id;
            }));
      }
      return newState;
    }
    case DELETE_CART: {
      const { payload } = action;
      const product = payload.product;
      let newState;
      newState = _.reject(state, function (el) {
        return el.id === product.id;
      });
      return newState;
    }
    case UPDATE_QUANTITY_CART: {
      const { payload } = action;
      const product = payload.product;
      const number = payload.number;
      let newState;
      const findPro = state.find((idx) => idx.id === product.id);
      if (!_.isEmpty(findPro)) {
        return (newState = [...state]);
      } else {
        newState = [
          ...state,
          {
            ...product,
            count: number,
            total: !_.isEmpty(product.discount)
              ? product.discount
              : product.price,
          },
        ];
      }
    }
    default:
      return state;
  }
};

export default reducer;
