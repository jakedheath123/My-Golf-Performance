import {
  SET_GOLF_COURSE_LIST,
  SET_SELECTED_COURSE
} from "../actions/constants";

const INITIAL_STATE = {
  golfCourseList: [],
  selectedCourse: {}
};

const golfCoursesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_GOLF_COURSE_LIST:
      return { ...state, golfCourseList: action.payload };
    case SET_SELECTED_COURSE:
      const [selectedCourse] = state.golfCourseList.filter(
        course => course.id === action.payload
      );
      return { ...state, selectedCourse };
    default:
      return { ...state };
  }
};

export default golfCoursesReducer;
