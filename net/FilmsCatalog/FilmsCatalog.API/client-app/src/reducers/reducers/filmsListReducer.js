import { SET_FILM_LIST, ADD_FILMS, SET_NEXT_LINK } from "../../actions/types";

const initialState = {
    films: [],
    nextLink: ''
};

export default function filmsListReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FILM_LIST:
            return {
                ...state,
                films: action.payload
            };
        case ADD_FILMS:
            return {
                ...state,
                films: [...state.films, ...action.payload]
            };
        case SET_NEXT_LINK:
            return {
                ...state,
                nextLink: action.payload
            };        default:
            return state;
    }
}