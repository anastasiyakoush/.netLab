import { SET_FILMS_LIST, SET_POSTERS } from "../actions/types";

const initialState = {
    films: []
};

export default function filmsCrud(state = initialState, action) {
    switch (action.type) {
        case SET_FILMS_LIST:
            return {
                ...state,
                films: action.payload
            };
        case SET_POSTERS:
            return {
                ...state,
                films: state.films.map(film => {
                    film.poster = action.payload.find(
                        poster => film.id === poster.filmId
                    ).url;
                    return film;
                })
            };

        default:
            return state;
    }
}
