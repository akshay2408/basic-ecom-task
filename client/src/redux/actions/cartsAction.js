import { toast } from "react-toastify";
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

export const getAllCarts = () => (dispatch) => {
    getCarts().then(result => {
        dispatch(successGetCarts(result.data))
    }).catch(error => {
        toast("something went wrong!", { type: "error" });
    })
}