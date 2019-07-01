import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import requestReducer from "./request"

export default combineReducers({
    form: formReducer, requestReducer
})