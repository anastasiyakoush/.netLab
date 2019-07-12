import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import requestStateReducer from "./reducers/requestStateReducer"
import queryableListReducer from "./reducers/queryableListReducer"
import filmReducer from "./reducers/filmReducer"

export default combineReducers({
    form: formReducer, requestStateReducer, queryableListReducer, filmReducer
})