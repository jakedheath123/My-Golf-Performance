import { combineReducers } from "redux";

import userAuthenticationReducer from "./userAuthenticationReducer";

export default combineReducers({
  userAuthentication: userAuthenticationReducer
});
