import {
    GET_CARTS,
} from "../../constants/actionTypes";

import { getCarts } from "../operations/carts";



export const successGetCarts = (result) => {
    return {
        type: GET_CARTS,
        CartList: result
    }
}

export const getAllCarts = () => {
    return function (dispatch) {
        getCarts().then(result => {
            dispatch(successGetCarts(result.data))
        }).catch(error => {
        })
    }
}