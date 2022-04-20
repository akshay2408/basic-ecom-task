import {

  GET_USER,

} from "../../constants/actionTypes";

const initialState = {
  userinfo: null,
  isLoggedIn: false
}

export default function getUser(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        userinfo: action.userinfo,
        isLoggedIn: true
      }

    default:
      return state
  }
}
