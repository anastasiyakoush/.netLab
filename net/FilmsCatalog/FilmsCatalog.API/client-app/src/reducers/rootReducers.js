import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import requestReducer from "./request"
import filmsCrud from "./filmsCrud"
import filmReducer from "./film"

export default combineReducers({
    form: formReducer, requestReducer, filmsCrud, filmReducer
})