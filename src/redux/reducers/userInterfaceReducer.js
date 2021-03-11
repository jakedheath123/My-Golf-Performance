import {
  SIGN_IN_CLICKED,
  SET_MENU_CLICKED,
  COURSE_SELECTED
} from "../actions/constants";

const INITIAL_STATE = {
  signInClicked: false,
  menuClicked: false,
  courseSelected: null
};

const userInterfaceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COURSE_SELECTED:
      return { ...state, courseSelected: action.payload };
    case SET_MENU_CLICKED:
      return {
        ...state,
        menuClicked:
          action.payload === false ? action.payload : !state.menuClicked
      };
    case SIGN_IN_CLICKED:
      return { ...state, signInClicked: action.payload };
    default:
      return { ...state };
  }
};

export default userInterfaceReducer;
