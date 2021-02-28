import { SIGN_IN_CLICKED } from "../actions/constants";

const INITIAL_STATE = {
  signInClicked: false
};

const userInterfaceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_CLICKED:
      return { ...state, signInClicked: action.payload };
    default:
      return { ...state };
  }
};

export default userInterfaceReducer;
