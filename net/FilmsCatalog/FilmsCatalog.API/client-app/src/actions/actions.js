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
    ADD_FILM_IMAGES,
    LOGIN,
    LOGOUT
} from "./types";

export const loading = () => ({
    type: LOADING
});
export const login = () => ({
    type: LOGIN
});
export const logout = () => ({
    type: LOGOUT
});
export const requestSuccess = response => ({
    type: REQUEST_SUCCESS,
    payload: response
});
export const requestFailure = errors => ({
    type: REQUEST_FAILURE,
    payload: errors
});
export const setFilmsList = films => ({
    type: SET_FILMS_LIST,
    payload: films
});
export const setPosters = data => ({
    type: SET_POSTERS,
    payload: data
});
export const getPoster = () => ({
    type: GET_POSTER
});
export const setFilmId = id => ({
    type: SET_FILM_ID,
    payload: id
});
export const setFilmName = name => ({
    type: SET_FILM_NAME,
    payload: name
});
export const setFilmYear = year => ({
    type: SET_FILM_YEAR,
    payload: year
});
export const setFilmDirector = director => ({
    type: SET_FILM_DIRECTOR,
    payload: director
});
export const setFilmOverview = overview => ({
    type: SET_FILM_OVERVIEW,
    payload: overview
});
export const addFilmRating = rating => ({
    type: ADD_FILM_RATING,
    payload: rating
});
export const addFilmComments = comments => ({
    type: ADD_FILM_COMMENTS,
    payload: comments
});
export const addFilmImages = images => ({
    type: ADD_FILM_IMAGES,
    payload: images
});