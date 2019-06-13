import {
    SET_EMAIL,
    SET_PASSWORD,
    LOG_IN,
    LOG_OUT
} from "../../actions/types";

const initialState = {
    email: "",
    isEmailValid: true,
    password: "",
    isPasswordValid: true,
    isAuthenticated: false
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMAIL: {
            const { value, isValid } = action.payload;
            return {
                ...state,
                email: value,
                isEmailValid: isValid
            };
        }
        case SET_PASSWORD: {
            const { value, isValid } = action.payload;
            return {
                ...state,
                password: value,
                isPasswordValid: isValid
            };
        }
        case LOG_IN: {
            const { email, password } = action.payload;
            return { ...state, email, password, isAuthenticated: true };
        }
        case LOG_OUT: {
            return { ...state, isAuthenticated: false };
        }
        default:
            return state;
    }
};

export default login;
