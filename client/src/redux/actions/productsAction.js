import {
    GET_PRODUCTS,
} from "../../constants/actionTypes";
import {getProductsApi} from "../opretions/apiCalls";

export const successProducts = (result) => {
    return {
        type: GET_PRODUCTS,
        Products: result
    }
}

export const getProducts = () => {
    return function (dispatch) {
        getProductsApi().then(result => {
            dispatch(successProducts(result.data))
        }).catch(error => {
           
        })
    }
}



