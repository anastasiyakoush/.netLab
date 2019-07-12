import { SET_queryable_LIST, SET_POSTERS, } from "../types"

export const setqueryableList = (queryable, isAppend) => ({
    type: SET_queryable_LIST,
    payload: { queryable, isAppend }
});
export const setPosters = data => ({
    type: SET_POSTERS,
    payload: data
});