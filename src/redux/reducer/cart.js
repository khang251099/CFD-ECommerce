import { ADD_CART } from "../actions/cart";
const initCart = [
  {
    id: "pro1",
    productName: "prodct one",
    price: 100,
    img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    count: 1,
  },
  {
    id: "pro2",
    productName: "prodct two",
    price: 100,
    img: "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    count: 1,
  },
];

const reducer = (state = initCart, action) => {
  switch (action.type) {
    case ADD_CART: {
      const { payload } = action;
      let newState;
      if (state.find((idx) => idx.id === payload.id)) {
        newState = state.map((idx) => {
          if (idx.id === payload.id) {
            idx.count += 1;
          }
          return idx;
        });
      } else {
        newState = [...state, { ...payload, count: 1 }];
      }
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
