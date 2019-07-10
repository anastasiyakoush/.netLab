import {
    GET_POSTER,
    SET_FILM,
    ADD_FILM_RATING,
    ADD_FILM_COMMENTS,
    ADD_FILM_IMAGES,
} from "../types"

export const getPoster = () => ({
    type: GET_POSTER
});
export const setFilm = film => ({
    type: SET_FILM,
    payload: film
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