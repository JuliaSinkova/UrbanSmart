import { LOGIN_USER } from "../actions/types";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, login: action.login };

    default:
      return state;
  }
};
