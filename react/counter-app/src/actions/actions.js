import {
  SET_EMAIL,
  SET_PASSWORD,
  LOG_IN,
  LOG_OUT
} from "./types";

export const setEmail = (value, isValid) => ({
  type: SET_EMAIL,
  payload: { value, isValid }
});

export const setPassword = (value, isValid) => ({
  type: SET_PASSWORD,
  payload: { value, isValid }
});

export const login = (email, password, isValid) => ({
  type: LOG_IN,
  payload: { email, password, isValid }
});

export const logout = () => ({
  type: LOG_OUT
});