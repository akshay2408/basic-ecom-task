import {combineReducers} from "redux"
import productsReducer from "./productsReducer"
import cartsReducer from "./cartsReducer"
import userReducer from "./userReducer"

const rootReducer = combineReducers({
    productsReducer,
    cartsReducer, 
    userReducer  
});

export default rootReducer;
