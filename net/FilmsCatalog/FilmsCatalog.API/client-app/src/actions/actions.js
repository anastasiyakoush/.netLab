import * as types from "./types";

//signup
export const setEmail = (email, isValid) => ({
    type: types.SET_EMAIL,
    payload: { email, isValid }
});
export const setUsername = (username, isValid) => ({
    type: types.SET_USERNAME,
    payload: { username, isValid }
});
export const setPassword = (password, isValid) => ({
    type: types.SET_PASSWORD,
    payload: { password, isValid }
});
export const setConfirmPassword = (confirmPassword, isValid) => ({
    type: types.SET_CONFIRMPASSWORD,
    payload: { confirmPassword, isValid }
});
export const signup = (email, username, password, isValid) => ({
    type: types.SIGNUP,
    payload: { email, username, password, isValid }
});
