import {
    SET_FILM,
    GET_POSTER,
    ADD_FILM_RATING,
    ADD_FILM_COMMENTS,
    ADD_FILM_IMAGES
} from "../../actions/types";

const initialState = {
    Id: "",
    Name: "",
    Year: "",
    Director: "",
    Overview: "",
    Rating: 0,
    VotedPeopleCount: 0,
    Poster: "",
    Images: [],
    Comments: []
};

export default function filmReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FILM:
            return {
                ...action.payload
            };

        case ADD_FILM_COMMENTS:
            return {
                ...state,
                Comments: action.payload
            };
        case ADD_FILM_IMAGES:
            return {
                ...state,
                images: action.payload
            };
        case ADD_FILM_RATING:
            return {
                ...state,
                Rating: action.payload.Rating,
                VotedPeopleCount: action.payload.VotedPeopleCount
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