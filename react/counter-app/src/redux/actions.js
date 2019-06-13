import {
  SET_EMAIL,
  SET_PASSWORD,
  LOG_IN,
  LOG_OUT/* ,
  VALIDATE_EMAIL,
  VALIDATE_PASSWORD */
} from "./actionTypes";

export const setEmail = (value, isValid) => ({
  type: SET_EMAIL,
  payload: { value, isValid }
});

export const setPassword = (value, isValid) => ({
  type: SET_PASSWORD,
  payload: { value, isValid }
});

/* export const validateEmail = constraint => ({
  type: VALIDATE_EMAIL,
  payload: { constraint }
});

export const validatePassword = constraint => ({
  type: VALIDATE_PASSWORD,
  payload: { constraint }
}); */

export const login = (email, password, isValid) => ({
  type: LOG_IN,
  payload: { email, password, isValid }
});

export const logout = () => ({
  type: LOG_OUT
});