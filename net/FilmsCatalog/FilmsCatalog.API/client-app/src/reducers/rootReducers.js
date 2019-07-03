import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import requestReducer from "./request"
import filmsCrud from "./filmsCrud"

export default combineReducers({
    form: formReducer, requestReducer,filmsCrud
})