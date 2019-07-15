import { SET_FILM_LIST, ADD_FILMS, SET_NEXT_LINK } from "../types";

export const setFilmsList = films => ({
    type: SET_FILM_LIST,
    payload: films
});
export const addFilms = films => ({
    type: ADD_FILMS,
    payload: films
});
export const setNextLink = link => ({
    type: SET_NEXT_LINK,
    payload: link
});