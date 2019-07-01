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
            localStorage.setItem("user-token", response.data);
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
            localStorage.setItem("user-token", response.data);
            dispatch(requestSuccess(response))
        })
        .catch(errors =>
            dispatch(requestFailure(errors))
        )

};
//???
export const logout = () => dispatch => {
    localStorage.removeItem("user-token");
}