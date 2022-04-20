import {
  REQUEST_LOGIN,
  SUCCESS_LOGIN,
  FAILURE_LOGIN,
} from "../../constants/actionTypes";
import Api from "../operations/apiCalls";

export const requestLogin = () => {
  return {
      type: REQUEST_LOGIN,
      user: []
  }
}

export const successLogin = (result) => {
  return {
      type: SUCCESS_LOGIN,
      user: result
  }
}

export const failureLogin = (error) => {
  console.log("errro")
  return {
      type: FAILURE_LOGIN,
      user: []
  }
}

export const getLogin = () => {
  return function (dispatch) {
      Api.Login().then(result => {
          dispatch(successLogin(result.data))
      }).catch(error => {
          dispatch(failureLogin(error))
      })
  }
}