import { combineReducers } from "redux";
import { ProductReducer } from './productReducer';

const rootReducer = combineReducers({
    products: ProductReducer
});

export default rootReducer;