import {
    SET_FILM_ID,
    SET_FILM_NAME,
    SET_FILM_YEAR,
    SET_FILM_DIRECTOR,
    SET_FILM_OVERVIEW,
    ADD_FILM_RATING,
    ADD_FILM_COMMENTS,
    ADD_FILM_IMAGES
} from "../actions/types";

const initialState = {
    id: "",
    name: "",
    year: "",
    director: "",
    overview: "",
    rating: "",
    images: [],
    comments: []
};

export default function filmReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FILM_ID:
            return {
                ...state,
                id: action.payload
            };
        case SET_FILM_NAME:
            return {
                ...state,
                name: action.payload
            };
        case SET_FILM_YEAR:
            return {
                ...state,
                year: action.payload
            };
        case SET_FILM_DIRECTOR:
            return {
                ...state,
                director: action.payload
            };
        case SET_FILM_OVERVIEW:
            return {
                ...state,
                overview: action.payload
            };
        case ADD_FILM_COMMENTS:
            return {
                ...state,
                comments: action.payload
            };
        case ADD_FILM_IMAGES:
            return {
                ...state,
                images: action.payload
            };
        case ADD_FILM_RATING:
            return {
                ...state,
                rating: action.payload
            };
        default:
            return state;
    }
}
