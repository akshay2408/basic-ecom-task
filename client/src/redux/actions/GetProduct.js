import {
    REQUEST_PRODUCTS,
    SUCCESS_PRODUCTS,
    FAILURE_PRODUCTS,
} from "../../constants/actionTypes";
import Api from "../apis/apiCalls";

export const requestProducts = () => {
    return {
        type: REQUEST_PRODUCTS,
        Products: []
    }
}

export const successProducts = (result) => {
    return {
        type: SUCCESS_PRODUCTS,
        Products: result
    }
}

export const failureProducts = (error) => {
    console.log("errro")
    return {
        type: FAILURE_PRODUCTS,
        Products: []
    }
}

export const getProducts = () => {
    return function (dispatch) {
        Api.getProducts().then(result => {
            dispatch(successProducts(result.data.result))
        }).catch(error => {
            dispatch(failureProducts(error))
        })
    }
}