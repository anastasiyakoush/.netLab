import {
    SET_FILM,
    GET_POSTER,
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
    peopleVoted: 0,
    poster: "",
    images: [],
    comments: []
};

export default function filmReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FILM:
            return {
                ...state,
                ...action.payload,
                rating: action.payload.rating.rate,
                peopleVoted: action.payload.rating.votedPeopleCount,
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
                rating: action.payload.rate,
                peopleVoted: action.payload.votedPeopleCount
            };
        case GET_POSTER:
            return {
                ...state,
                poster: state.images.filter(x => x.includes("p.jpg") || x.includes("p.jpeg"))[0]
            };
        default:
            return state;
    }
}