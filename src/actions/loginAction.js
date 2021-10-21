import { LOGIN_USER } from "./types";

export const loginAction = (login, password) => {
  return {
    type: LOGIN_USER,
    login,
    password,
  };
};
