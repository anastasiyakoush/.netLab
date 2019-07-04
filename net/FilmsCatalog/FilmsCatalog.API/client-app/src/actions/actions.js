import {
    LOADING,
    REQUEST_SUCCESS,
    REQUEST_FAILURE,
    SET_FILMS_LIST,
    SET_POSTERS,
    GET_POSTER,
    SET_FILM_ID,
    SET_FILM_NAME,
    SET_FILM_YEAR,
    SET_FILM_DIRECTOR,
    SET_FILM_OVERVIEW,
    ADD_FILM_RATING,
    ADD_FILM_COMMENTS,
    ADD_FILM_IMAGES
} from "./types";

import { accountService } from "../api/accountService";
import { filmCrudService } from "../api/filmCrudService";
import { filmService } from "../api/filmService";

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
const getPoster = () => ({
    type: GET_POSTER
});
const setFilmId = id => ({
    type: SET_FILM_ID,
    payload: id
});
const setFilmName = name => ({
    type: SET_FILM_NAME,
    payload: name
});
const setFilmYear = year => ({
    type: SET_FILM_YEAR,
    payload: year
});
const setFilmDirector = director => ({
    type: SET_FILM_DIRECTOR,
    payload: director
});
const setFilmOverview = overview => ({
    type: SET_FILM_OVERVIEW,
    payload: overview
});
const addFilmRating = rating => ({
    type: ADD_FILM_RATING,
    payload: rating
});
const addFilmComments = comments => ({
    type: ADD_FILM_COMMENTS,
    payload: comments
});
const addFilmImages = images => ({
    type: ADD_FILM_IMAGES,
    payload: images
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

            dispatch(setFilmsList(response.data));
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
//////
export const getFilmDetails = filmId => dispatch => {
    dispatch(loading());

    filmCrudService
        .getFilmById(filmId)
        .then(response => {
            const newFilm = response.data;

            dispatch(setFilmId(newFilm.id));
            dispatch(setFilmName(newFilm.name));
            dispatch(setFilmYear(newFilm.year));
            dispatch(setFilmDirector(newFilm.director));
            dispatch(setFilmOverview(newFilm.overview));

        })
        .catch(errors => dispatch(requestFailure(errors)));

    filmService.getFilmImages(filmId)
        .then(response => {
            console.log(response)
            dispatch(addFilmImages(response.data));
            dispatch(getPoster())
        })
        .catch(errors => dispatch(requestFailure(errors)));

    filmService.getFilmRating(filmId)
        .then(response => {
            dispatch(addFilmRating(response.data));
        })
        .catch(errors => dispatch(requestFailure(errors)));

    filmService.getFilmComments(filmId)
        .then(response => {
            dispatch(addFilmComments(response.data));
        })
        .catch(errors => dispatch(requestFailure(errors)));
};
