import { combineReducers } from "redux";

import userAuthenticationReducer from "./userAuthenticationReducer";
import userInterfaceReducer from "./userInterfaceReducer";
import golfCoursesReducer from "./golfCoursesReducer";

export default combineReducers({
  userAuthentication: userAuthenticationReducer,
  userInterface: userInterfaceReducer,
  golfCourses: golfCoursesReducer
});
