import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import customerReducer from '../Reducer/dataReducer';

const Store = createStore(customerReducer, applyMiddleware(thunk));
export default Store;
