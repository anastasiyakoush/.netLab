import { SET_FILM_LIST, ADD_FILMS } from "../types";

export const setFilmsList = films => ({
    type: SET_FILM_LIST,
    payload: films
});
export const addFilms = films => ({
    type: ADD_FILMS,
    payload: films
});
