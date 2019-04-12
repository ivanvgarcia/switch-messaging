import { combineReducers } from "redux";
import { SET_USER, CLEAR_USER } from "../actions/types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: true
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return { currentUser: action.payload, isLoading: false };
    case CLEAR_USER:
      return {
        ...INITIAL_STATE,
        isLoading: false
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;