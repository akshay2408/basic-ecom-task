import { toast } from "react-toastify";
import {
  GET_USER,
  CLEAR_USER
} from "../../constants/actionTypes";
import { getUserApi } from "../operations/user";

export const successGetUser = (result) => {
  return {
    type: GET_USER,
    userinfo: result
  }
}

export const getUser = (token) => {
  return function (dispatch) {
    getUserApi(token).then(result => {
      if (result && result.data)
        dispatch(successGetUser(result.data))
      else {
      }
    }).catch(error => {
    console.log(error)
    })
  }
}

export const clearUser = () => {
  return {
    type: CLEAR_USER
  }
}