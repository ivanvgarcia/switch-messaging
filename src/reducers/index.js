import { combineReducers } from "redux";
import { SET_USER, CLEAR_USER, SET_CURRENT_CHANNEL } from "../actions/types";

const INITIAL_USER_STATE = {
  currentUser: null,
  isLoading: true
};

const INITIAL_CHANNEL_STATE = {
  currentChannel: null
};

const userReducer = (state = INITIAL_USER_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return { currentUser: action.payload, isLoading: false };
    case CLEAR_USER:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

const channelReducer = (state = INITIAL_CHANNEL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  channel: channelReducer
});

export default rootReducer;
