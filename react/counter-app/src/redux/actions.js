import {
  SET_EMAIL,
  SET_PASSWORD,
  LOG_IN,
  LOG_OUT,
  VALIDATE_EMAIL,
  VALIDATE_PASSWORD
} from "./actionTypes";

export const setEmail = value => ({
  type: SET_EMAIL,
  payload: { value }
});

export const setPassword = value => ({
  type: SET_PASSWORD,
  payload: { value }
});

export const validateEmail = constraint => ({
  type: VALIDATE_EMAIL,
  payload: { constraint }
});

export const validatePassword = constraint => ({
  type: VALIDATE_PASSWORD,
  payload: { constraint }
});

export const login = (email, password) => ({
  type: LOG_IN,
  payload: { email, password }
});

export const logout = () => ({
  type: LOG_OUT
});