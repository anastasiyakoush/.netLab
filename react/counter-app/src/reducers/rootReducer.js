import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from 'redux-form';
import login from "./reducers/login";

export default combineReducers({
    form: reduxFormReducer, login
});