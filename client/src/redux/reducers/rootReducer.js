import {combineReducers} from "redux"
import GetProductReducer from "./GetProducts"
import ViewCartReducer from "./GetCarts"

const rootReducer = combineReducers({
    GetProductReducer,
    ViewCartReducer,   
});

export default rootReducer;
