import {counterReducer,TodoReducer} from "../reducer";
import { combineReducers } from "redux";
const allReducers = combineReducers({
    counterReducer,
    TodoReducer,
});
export default allReducers;