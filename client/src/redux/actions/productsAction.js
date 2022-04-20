import { toast } from "react-toastify";
import {
  GET_PRODUCTS,
} from "../../constants/actionTypes";
import { getProducts } from "../operations/products";

export const successGetProducts = (result) => {
  return {
    type: GET_PRODUCTS,
    Products: result
  }
}

export const getAllProducts = () => {
  return function (dispatch) {
    getProducts().then(result => {
      dispatch(successGetProducts(result.data))
    }).catch(error => {
      console.log("error",error)
    })
  }
}



