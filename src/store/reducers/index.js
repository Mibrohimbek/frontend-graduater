import { combineReducers } from "redux";
import userInfo from "./user";

const rootReducer = combineReducers({
  user: userInfo,
});

export default rootReducer;
