import {
    LOADING,
    REQUEST_FAILURE,
    REQUEST_SUCCESS,
    LOGIN,
    LOGOUT
} from "../../actions/types";
import { authHelper } from "../../helpers/authHepler";

const initialState = {
    loading: false,
    error: null,
    isAuthenticated: authHelper.isAuthenticated(),
};

export default function requestStateReducer(state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case REQUEST_SUCCESS:
            return {
                ...state,
                error: null
            };
        case REQUEST_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false
            };
        default:
            return state;
    }
}