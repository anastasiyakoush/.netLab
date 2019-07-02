import { LOADING, REQUEST_FAILURE, REQUEST_SUCCESS } from "../actions/types";

const initialState = {
    loading: false,
    error: null
}

export default function requestReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            }
        case REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}