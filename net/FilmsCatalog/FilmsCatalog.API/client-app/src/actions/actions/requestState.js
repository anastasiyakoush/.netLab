import { LOADING, REQUEST_SUCCESS, REQUEST_FAILURE, } from "../types"

export const loading = state => ({
    type: LOADING,
    payload: state
});
export const requestSuccess = response => ({
    type: REQUEST_SUCCESS,
    payload: response
});
export const requestFailure = errors => ({
    type: REQUEST_FAILURE,
    payload: errors
});