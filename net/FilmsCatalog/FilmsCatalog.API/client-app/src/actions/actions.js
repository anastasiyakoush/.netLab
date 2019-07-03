import {
    LOADING,
    REQUEST_SUCCESS,
    REQUEST_FAILURE,
    SET_FILMS_LIST,
    SET_POSTERS
} from "./types";
import { accountService } from "../api/accountService";
import { filmCrudService } from "../api/filmCrudService";
import { resolve } from "dns";

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
const setFilmsList = films => ({
    type: SET_FILMS_LIST,
    payload: films
});
const setPosters = data => ({
    type: SET_POSTERS,
    payload: data
});

export const signup = user => dispatch => {
    dispatch(loading());
    accountService
        .signUp(user)
        .then(response => {
            localStorage.setItem("username", response.data.userName);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("email", response.data.email);
            dispatch(requestSuccess(response));
        })
        .catch(errors => dispatch(requestFailure(errors)));
};
export const login = user => dispatch => {
    dispatch(loading());
    accountService
        .login(user)
        .then(response => {
            localStorage.setItem("username", response.data.userName);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("email", response.data.email);
            dispatch(requestSuccess(response));
        })
        .catch(errors => {
            dispatch(requestFailure(errors));
        });
};
//???
export const logout = () => dispatch => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
};
////////////////
export const getFilmsList = () => dispatch => {
    dispatch(loading());

    filmCrudService
        .getFilmList()
        .then(response => {
            console.log(response);
            return new Promise(resolve => {
                dispatch(setFilmsList(response.data));
                dispatch(requestSuccess());
                resolve();
            });
        })
        .then(() => {
            filmCrudService.getPosters();
        })
        .then(response => {
            console.log(response);
            dispatch(setPosters(response.data));
            dispatch(requestSuccess());
        })
        .catch(errors => {
            dispatch(requestFailure(errors));
        });

    filmCrudService
        .getPosters()
        .then(response => {
            dispatch(setPosters(response.data));
            dispatch(requestSuccess());
        })
        .catch(errors => {
            dispatch(requestFailure(errors));
        });
};
