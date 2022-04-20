import {
  REQUEST_LOGIN,
  SUCCESS_LOGIN,
  FAILURE_LOGIN,
} from "../../constants/actionTypes";
const initilizeState = {
  user: [],
};

export default function getLoginReducer(state = initilizeState, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        user: [],
      };
    case SUCCESS_LOGIN:
      return {
        ...state,
        user: action.user,
      };
    case FAILURE_LOGIN:
      return {
        ...state,
        user: [],
      };
    default:
      return state;
  }
}
