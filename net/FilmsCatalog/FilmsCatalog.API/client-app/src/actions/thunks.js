import requestService from "../api/requestService";
import { root, routes } from "../routing/routes";
import { loading, requestFailure, requestSuccess } from "./actions/requestState"
import { setqueryableList, setPosters } from "../actions/actions/queryableList"
import { login, logout } from "../actions/actions/auth"
import { getPoster, addFilmComments, addFilmRating, setFilm } from "../actions/actions/film"
import { authHelper } from "../helpers/authHepler";
import { accountBaseUrl, authServerUrls, queryableListBaseUrl, queryableListServerUrls, queryableerverUrls, filmDetailsBaseUrl, httpMethod, queryablePerRequest } from "../api/consts";

const handleError = (error, dispatch, history) => {
    if (error.response) {
        if (error.response.status === 401) {
            authHelper.getUserToken() !== null && dispatch(getqueryableList);
            dispatch(deauthenticate(history));
        }
        else {
            dispatch(requestFailure(error.response.data));
        }
    }
    else if (error.request) {
        dispatch(requestFailure(error.request));
    }
    else {
        console.log(error);
        dispatch(requestFailure(error));
    }
};

export const signup = (user, history) => dispatch => {
    dispatch(loading(true));
    requestService(httpMethod.post, accountBaseUrl.concat(authServerUrls.signUp), user)
        .then(response => authHelper.setUser(response.data))
        .then(() => dispatch(login()))
        .then(() => dispatch(loading(false)))
        .then(() => history.push(`${root()}${routes.homePage}`))
        .catch(errors => {
            dispatch(loading(false));
            handleError(errors, dispatch, history)
        });
};

export const authenticate = (user, history) => dispatch => {
    dispatch(loading(true));
    requestService(httpMethod.post, accountBaseUrl.concat(authServerUrls.login), user)
        .then(response => authHelper.setUser(response.data))
        .then(() => dispatch(login()))
        .then(() => dispatch(loading(false)))
        .then(() => history.push(`${root()}${routes.homePage}`))
        .catch(errors => {
            dispatch(loading(false));
            handleError(errors, dispatch, history)
        });
};

export const deauthenticate = history => dispatch => {
    authHelper.clearUserCredentials("user");
    dispatch(logout());
    history.push(`${root()}${routes.login}`);
};

export const getqueryableList = (history, body, isAppend) => dispatch => {
    body.count = queryablePerRequest;

    dispatch(loading(true));
    requestService(httpMethod.post, queryableListBaseUrl.concat(queryableListServerUrls.all), body, true)
        .then(response => dispatch(setqueryableList(response.data, isAppend)))
        .then(() => requestService(httpMethod.get, queryableListBaseUrl.concat(queryableListServerUrls.posters), null, true))
        .then(response => dispatch(setPosters(response.data)))
        .then(() => dispatch(loading(false)))
        .then(() => dispatch(requestSuccess()))
        .catch(errors => {
            dispatch(loading(false));
            handleError(errors, dispatch, history)
        });
};

export const getFilmDetails = (filmId, history) => dispatch => {
    dispatch(loading(true));
    requestService(httpMethod.get, queryableListBaseUrl.concat(queryableerverUrls.film, `/${filmId}`), null, true)
        .then(response => dispatch(setFilm(response.data)))
        .then(() => dispatch(getPoster()))
        .then(() => dispatch(loading(false)))
        .then(() => dispatch(requestSuccess()))
        .catch(errors => {
            dispatch(loading(false));
            handleError(errors, dispatch, history)
        });
};

export const postComment = (text, history) => dispatch => {
    dispatch(loading(true));
    requestService(httpMethod.post, filmDetailsBaseUrl.concat(queryableerverUrls.comment), text, true)
        .then(response => {
            response.status === 200
                ? dispatch(requestSuccess())
                : dispatch(requestFailure(response));
        })
        .then(() => dispatch(loadComments(text.filmId, history)))
        .then(() => dispatch(loading(false)))
        .then(() => dispatch(requestSuccess()))
        .catch(errors => {
            dispatch(loading(false));
            handleError(errors, dispatch, history)
        });
};

export const loadComments = (filmId, history) => dispatch => {
    dispatch(loading(true));
    requestService(httpMethod.get, filmDetailsBaseUrl.concat(queryableerverUrls.comment, `/${filmId}`), null, true)
        .then(response => dispatch(addFilmComments(response.data)))
        .then(() => dispatch(loading(false)))
        .then(() => dispatch(requestSuccess()))
        .catch(errors => {
            dispatch(loading(false));
            handleError(errors, dispatch, history)
        });
};

export const rateFilm = (body, history) => dispatch => {
    dispatch(loading(true));
    requestService(httpMethod.post, filmDetailsBaseUrl.concat(queryableerverUrls.rate), body, true)
        .then(() => dispatch(requestSuccess()))
        .then(() => dispatch(loadRating(body.filmId, history), null, true))
        .then(() => dispatch(loading(false)))
        .then(() => dispatch(requestSuccess()))
        .catch(errors => {
            dispatch(loading(false));
            handleError(errors, dispatch, history)
        });
};

export const loadRating = (filmId, history) => dispatch => {
    dispatch(loading(true));
    requestService(httpMethod.get, filmDetailsBaseUrl.concat(queryableerverUrls.rate, `/${filmId}`), null, true)
        .then(response => dispatch(addFilmRating(response.data)))
        .then(() => dispatch(loading(false)))
        .then(() => dispatch(requestSuccess()))
        .catch(errors => {
            dispatch(loading(false));
            handleError(errors, dispatch, history)
        });
};

export const findFilm = (query, history) => dispatch => {
    dispatch(loading(true));
    requestService(httpMethod.get, queryableListBaseUrl.concat(queryableListServerUrls.all, `/${query}`), null, true)
        .then(response => dispatch(setqueryableList(response.data)))
        .then(() => requestService(httpMethod.get, queryableListBaseUrl.concat(queryableListServerUrls.posters), null, true))
        .then(response => dispatch(setPosters(response.data)))
        .then(() => dispatch(loading(false)))
        .then(() => dispatch(requestSuccess()))
        .catch(errors => {
            dispatch(loading(false));
            handleError(errors, dispatch, history)
        });
}