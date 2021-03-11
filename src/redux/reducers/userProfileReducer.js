import {
  SET_HOLE_SCORE,
  SET_TOTAL_SCORE,
  SET_USER_COURSE
} from "../actions/constants";

const INITIAL_STATE = {
  newRoundHoleScores: {
    holes: [
      {
        hole: 1,
        score: null
      },
      {
        hole: 2,
        score: null
      },
      {
        hole: 3,
        score: null
      },
      {
        hole: 4,
        score: null
      },
      {
        hole: 5,
        score: null
      },
      {
        hole: 6,
        score: null
      },
      {
        hole: 7,
        score: null
      },
      {
        hole: 8,
        score: null
      },
      {
        hole: 9,
        score: null
      },
      {
        hole: 10,
        score: null
      },
      {
        hole: 11,
        score: null
      },
      {
        hole: 12,
        score: null
      },
      {
        hole: 13,
        score: null
      },
      {
        hole: 14,
        score: null
      },
      {
        hole: 15,
        score: null
      },
      {
        hole: 16,
        score: null
      },
      {
        hole: 17,
        score: null
      },
      {
        hole: 18,
        score: null
      }
    ],
    totalScore: null,
    courseId: null,
    userId: null
  }
};

const userProfileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_COURSE:
      const currentRoundHoleScores = {
        ...state.newRoundHoleScores,
        courseId: action.payload.courseId,
        userId: action.payload.userId
      };
      return { ...state, newRoundHoleScores: currentRoundHoleScores };
    case SET_HOLE_SCORE:
      const holes = state.newRoundHoleScores.holes.map(courseHole => {
        if (courseHole.hole === action.payload.courseHole) {
          courseHole.score = action.payload.shots;
        }
        return { ...courseHole };
      });

      const currentHoleScores = { ...state.newRoundHoleScores, holes };

      return { ...state, newRoundHoleScores: currentHoleScores };

    case SET_TOTAL_SCORE:
      const totalScore = state.newRoundHoleScores.holes.reduce(
        (total, currentValues) => {
          total += currentValues.score;

          return total;
        },
        0
      );
      const newRoundHoleScores = { ...state.newRoundHoleScores, totalScore };

      return { ...state, newRoundHoleScores };
    default:
      return { ...state };
  }
};

export default userProfileReducer;
