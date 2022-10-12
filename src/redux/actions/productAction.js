import { GET_ALL, ADD_PRODUCT, DELETE_PRODUCT } from "./actionType";

export const getAll = () => {
  return {
    type: GET_ALL,
  };
};

export const addProduct = (item) => {
  return {
      type: ADD_PRODUCT,
      payload: item
  };
};

export const deleteProduct = (id) => {
  return {
      type: DELETE_PRODUCT,
      payload: id
  };
};
