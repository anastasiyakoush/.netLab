import requestService from "../api/requestService";
import { root, routes } from "../routing/routes";
import {
    loading,
    requestFailure,
    requestSuccess
} from "./actions/requestState";
import { setFilmsList, addFilms, setNextLink } from "../actions/actions/filmsList";
import { login, logout } from "../actions/actions/auth";
import {
    addFilmComments,
    addFilmRating,
    setFilm
} from "../actions/actions/film";
import { authHelper } from "../helpers/authHepler";
import {
    accountBaseUrl,
    authServerUrls,
    filmsBaseUrl,
    filmDetailsBaseUrl,
    filmsUrls,
    httpMethod
} from "../api/consts";

const handleError = (error, dispatch, history) => {
    if (error.response) {
        if (error.response.status === 401) {
            authHelper.getUserToken() !== null && dispatch(getFilms);
            dispatch(deauthenticate(history));
        } else {
            dispatch(requestFailure(error.response.data));
        }
    } else if (error.request) {
        dispatch(requestFailure(error.request));
    } else {
        dispatch(requestFailure(error));
    }
};

export const signup = (user, history) => dispatch => {
    dispatch(loading(true));
    requestService(
        httpMethod.post,
        accountBaseUrl.concat(authServerUrls.signUp),
        user
    )
        .then(response => authHelper.setUser(response.data))
        .then(() => dispatch(login()))
        .then(() => dispatch(loading(false)))
        .then(() => history.push(`${root()}${routes.homePage}`))
        .catch(errors => {
            dispatch(loading(false));
            handleError(errors, dispatch, history);
        });
};

export const authenticate = (user, history) => dispatch => {
    dispatch(loading(true));
    requestService(
        httpMethod.post,
        accountBaseUrl.concat(authServerUrls.login),
        user
    )
        .then(response => authHelper.setUser(response.data))
        .then(() => dispatch(login()))
        .then(() => dispatch(loading(false)))
        .then(() => history.push(`${root()}${routes.homePage}`))
        .catch(errors => {
            dispatch(loading(false));
            handleError(errors, dispatch, history);
        });
};

export const deauthenticate = history => dispatch => {
    authHelper.clearUserCredentials("user");
    dispatch(logout());
    history.push(`${root()}${routes.login}`);
};

export const getFilms = (history, isAppend, link) => dispatch => {
    !isAppend && dispatch(loading(true));
    requestService(
        httpMethod.get,
        link,
        null,
        true
    )
        .then(response => {
            isAppend
                ? dispatch(addFilms(response.data.value))
                : dispatch(setFilmsList(response.data.value));

            dispatch(setNextLink(response.data['@odata.nextLink']))
        }
        )
        .then(() => dispatch(loading(false)))
        .then(() => dispatch(requestSuccess()))
        .catch(errors => {
            dispatch(loading(false));
            handleError(errors, dispatch, history);
        });
};

export const getFilmDetails = (filmId, history) => dispatch => {
    dispatch(loading(true));
    requestService(
        httpMethod.get,
        filmsBaseUrl.concat(`(${filmId})`),
        null,
        true
    )
        .then(response => dispatch(setFilm(response.data.value[0])))
        .then(() => dispatch(loadComments(filmId, history)))
        .then(() => dispatch(loading(false)))
        .then(() => dispatch(requestSuccess()))
        .catch(errors => {
            dispatch(loading(false));
            handleError(errors, dispatch, history);
        });
};

export const postComment = (text, history) => dispatch => {
    dispatch(loading(true));
    requestService(
        httpMethod.post,
        filmDetailsBaseUrl.concat(filmsUrls.comment),
        text,
        true
    )
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
            handleError(errors, dispatch, history);
        });
};

export const loadComments = (filmId, history) => dispatch => {
    requestService(
        httpMethod.get,
        filmDetailsBaseUrl.concat(filmsUrls.comment, `/${filmId}`),
        null,
        true
    )
        .then(response =>
            dispatch(addFilmComments(response.data))
        )
        .then(() => dispatch(requestSuccess()))
        .catch(errors => handleError(errors, dispatch, history));
};

export const rateFilm = (body, history) => dispatch => {
    requestService(
        httpMethod.post,
        filmDetailsBaseUrl.concat(filmsUrls.rate),
        body,
        true
    )
        .then(() => dispatch(requestSuccess()))
        .then(() => dispatch(loadRating(body.filmId, history), null, true))
        .then(() => dispatch(requestSuccess()))
        .catch(errors => handleError(errors, dispatch, history));
};

export const loadRating = (filmId, history) => dispatch => {
    requestService(
        httpMethod.get,
        filmsBaseUrl.concat(`(${filmId})?$select=Rating,VotedPeopleCount`),
        null,
        true
    )
        .then(response => dispatch(addFilmRating(response.data.value[0])))
        .then(() => dispatch(requestSuccess()))
        .catch(errors => handleError(errors, dispatch, history));
};

export const findFilm = (query, history) => dispatch => {
    requestService(
        httpMethod.get,
        filmsBaseUrl.concat(filmsUrls.count, filmsUrls.findByName, `'${query}')`),
        null,
        true
    )
        .then(response => {
            dispatch(setFilmsList(response.data.value));
            dispatch(setNextLink(response.data['@odata.nextLink']))
        })
        .then(() => dispatch(requestSuccess()))
        .catch(errors => handleError(errors, dispatch, history));
};

export const sortFilms = (params, history) => dispatch => {
    requestService(
        httpMethod.get,
        filmsBaseUrl.concat(filmsUrls.count, filmsUrls.orderBy, params.join(",")),
        null,
        true
    )
        .then(response => {
            dispatch(setFilmsList(response.data.value));
            dispatch(setNextLink(response.data['@odata.nextLink']))
        })
        .then(() => dispatch(requestSuccess()))
        .catch(errors => handleError(errors, dispatch, history));
};
