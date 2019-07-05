import { LOADING, REQUEST_FAILURE, REQUEST_SUCCESS, LOGIN, LOGOUT } from "../actions/types";
import { getUserName, getToken } from "../helpers";

const initialState = {
    loading: false,
    error: null,
    isAuthenticated: !!(getUserName() && getToken())
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
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true
            }
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false
            }
        default:
            return state;
    }
}