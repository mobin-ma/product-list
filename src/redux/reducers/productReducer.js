import { GET_ALL, ADD_PRODUCT, DELETE_PRODUCT } from "../actions/actionType";

const initcalState = {
  items: [
    { name: "ProductA", price: 1000000, id: 1 },
    { name: "ProductB", price: 2000000, id: 2 },
    { name: "ProductC", price: 3000000, id: 3 },
    { name: "ProductD", price: 4000000, id: 4 },
    { name: "ProductE", price: 5000000, id: 5 },
  ],
};
export const productReducer = (state = initcalState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        items: state.items,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        items: state.items.concat([action.payload]),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        items: state.items.filter((q) => q.id !== action.payload),
      };
    default:
      return state;
  }
};
