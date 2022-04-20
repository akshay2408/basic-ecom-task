import {
  GET_USER,
  CLEAR_USER
} from "../../constants/actionTypes";

const initialState = {
  userinfo: null,
  isLoggedIn: false
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        userinfo: action.userinfo,
        isLoggedIn: true
      }
    case CLEAR_USER:
      return {
        ...state,
        userinfo: null,
        isLoggedIn: false
      }
    default:
      return state
  }
}

