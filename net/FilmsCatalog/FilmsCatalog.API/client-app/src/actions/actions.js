import { LOADING, REQUEST_SUCCESS, REQUEST_FAILURE } from "./types";
import { accountService } from "../api/accountService"

const loading = () => ({
    type: LOADING
});
const requestSuccess = response => ({
    type: REQUEST_SUCCESS,
    payload: { response }
});
const requestFailure = errors => ({
    type: REQUEST_FAILURE,
    payload: { errors }
});

export const signup = user => dispatch => {
    dispatch(loading());
    accountService.signUp(user)
        .then(response => {
            localStorage.setItem("username", response.data.userName);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("email", response.data.email);
            dispatch(requestSuccess(response))
        })
        .catch(errors =>
            dispatch(requestFailure(errors))
        );

};
export const login = user => dispatch => {
    dispatch(loading());
    accountService.login(user)
        .then(response => {
            localStorage.setItem("username", response.data.userName);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("email", response.data.email);
            dispatch(requestSuccess(response))
        })
        .catch(errors =>
            dispatch(requestFailure(errors))
        )

};
//???
export const logout = () => dispatch => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
}