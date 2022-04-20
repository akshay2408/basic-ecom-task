import {

  GET_USER,

} from "../../constants/actionTypes";

const initilizeState = {
  userinfo: null,
  isLoggedIn: false
}

export default function getUser(state = initilizeState, action) {
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
