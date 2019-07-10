import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import requestStateReducer from "./reducers/requestStateReducer"
import filmsListReducer from "./reducers/filmsListReducer"
import filmReducer from "./reducers/filmReducer"

export default combineReducers({
    form: formReducer, requestStateReducer, filmsListReducer, filmReducer
})