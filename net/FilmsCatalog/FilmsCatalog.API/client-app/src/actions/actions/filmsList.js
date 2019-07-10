import { SET_FILMS_LIST, SET_POSTERS, } from "../types"

export const setFilmsList = films => ({
    type: SET_FILMS_LIST,
    payload: films
});
export const setPosters = data => ({
    type: SET_POSTERS,
    payload: data
});