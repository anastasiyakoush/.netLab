import {
    SET_FILM,
    ADD_FILM_RATING,
    ADD_FILM_COMMENTS,
    ADD_FILM_IMAGES
} from "../../actions/types";

const initialState = {
    id: "",
    name: "",
    year: "",
    director: "",
    overview: "",
    rating: 0,
    votedPeopleCount: 0,
    poster: "",
    images: [],
    comments: []
};

export default function filmReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FILM:
            return {
                ...state,
                id: action.payload.Id,
                name: action.payload.Name,
                year: action.payload.Year,
                director: action.payload.Director,
                overview: action.payload.Overview,
                rating: action.payload.Rating,
                votedPeopleCount: action.payload.VotedPeopleCount,
                poster: action.payload.Poster,
                images: action.payload.Images,
                comments: action.payload.Comments,
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
                rating: action.payload.Rating,
                votedPeopleCount: action.payload.VotedPeopleCount
            };
        default:
            return state;
    }
}