import { SET_queryable_LIST, SET_POSTERS } from "../../actions/types";

const initialState = {
    queryable: []
};

export default function queryableListReducer(state = initialState, action) {
    switch (action.type) {
        case SET_queryable_LIST:
            return {
                ...state,
                queryable: action.payload.isAppend ? [...state.queryable].push(action.payload.queryable) : action.payload.queryable
            };
        case SET_POSTERS:
            return {
                ...state,
                queryable: state.queryable.map(film => {
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