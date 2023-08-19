import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import formReducer from "./FormReducer";


export const reducers = combineReducers({ authReducer, formReducer });
