import _ from "lodash";
import { ADD_WL, REMOVE_WL } from "../actions/wishList";
const initWl = [];

const reducer = (state = initWl, action) => {
  switch (action.type) {
    case ADD_WL: {
      let newState;
      const { payload } = action;
      // console.log(payload);
      if (state.find((idx) => idx.id === product.id)) {
        newState = state.map((idx) => {
          if (idx.id === product.id) {
            return state;
          }
        });
      } else {
        newState = [...state, { ...payload.product }];
      }
      // newState = [...state, { ...payload.product }];
      return newState;
    }

    case REMOVE_WL: {
      const { payload } = action;
      const product = payload.product;
      let newState;
      newState = _.reject(state, function (el) {
        return el.id === product.id;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
