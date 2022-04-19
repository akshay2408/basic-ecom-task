import {
    REQUEST_VIEWCART,
    SUCCESS_VIEWCART,
    FAILURE_VIEWCART,
} from "../../constants/actionTypes";
import Api from "../apis/apiCalls";

export const requestViewCart = () =>{
    return{
        type: REQUEST_VIEWCART,
        CartList : []
    }
}

export const successViewCart = (result) =>{
   return{
       type: SUCCESS_VIEWCART,
       CartList : result
    }
}

export const failureViewCart = (error) =>{
   return{
       type:  FAILURE_VIEWCART,
       CartList : []
   }
}

export const ViewCart = () => {
   return function(dispatch){
    Api.ViewCarts().then(result=>{   
        dispatch(successViewCart(result.data))
    }).catch(error=>{
        dispatch(failureViewCart(error))
    })
   }
}