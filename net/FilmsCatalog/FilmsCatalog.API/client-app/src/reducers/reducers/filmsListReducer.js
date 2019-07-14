import { SET_FILM_LIST, ADD_FILMS } from "../../actions/types";

const initialState = {
    films: []
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
                films: state.films.concat(action.payload)
            };

        default:
            return state;
    }
}
