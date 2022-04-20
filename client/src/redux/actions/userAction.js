import {
  GET_USER,
} from "../../constants/actionTypes";
import { getUserApi } from "../opretions/user";

export const successGetUser = (result) => {
  return {
    type: GET_USER,
    userinfo: result
  }
}

export const getUser = (token) => {
  return function (dispatch) {
    getUserApi(token).then(result => {
      dispatch(successGetUser(result.data))
    }).catch(error => {
    })
  }
}