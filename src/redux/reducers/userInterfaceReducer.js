import {
  SIGN_IN_CLICKED,
  SET_MENU_CLICKED,
  COURSE_SELECTED,
  SIGN_UP_LINK_CLICKED
} from "../actions/constants";

const INITIAL_STATE = {
  signInClicked: false,
  menuClicked: false,
  courseSelected: null,
  signUpLinkClicked: true
};

const userInterfaceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP_LINK_CLICKED:
      return { ...state, signUpLinkClicked: !state.signUpLinkClicked };
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
