import { GET_USER_AUTHENTICATION, CLEAR_USER } from "../actions/constants";

const INITIAL_STATE = {
  user: null
};

const userAuthenticationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_AUTHENTICATION:
      return { ...state, user: action.payload };
    case CLEAR_USER:
      return { ...state, user: null };
    default:
      return { ...state };
  }
};

export default userAuthenticationReducer;
