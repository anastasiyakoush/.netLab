import {
    SET_EMAIL,
    SET_PASSWORD,
    LOG_IN,
    LOG_OUT,
    VALIDATE_EMAIL,
    VALIDATE_PASSWORD
} from "../actionTypes";

const initialState = {
    email: "",
    isEmailValid: true,
    password: "",
    isPasswordValid: true,
    isAuthenticated: false
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMAIL: {
            const { value } = action.payload;
            return {
                ...state,
                email: value
            };
        }
        case SET_PASSWORD: {
            const { value } = action.payload;
            return {
                ...state,
                password: value
            };
        }
        case VALIDATE_PASSWORD: {
            const { constraint } = action.payload;
            const result = state.password.length >= constraint;
            return {
                ...state,
                isPasswordValid: result
            };
        }
        case VALIDATE_EMAIL: {
            const { constraint } = action.payload;
            const result = constraint.test(state.email);
            return {
                ...state,
                isEmailValid: result
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
}

export default loginReducer;