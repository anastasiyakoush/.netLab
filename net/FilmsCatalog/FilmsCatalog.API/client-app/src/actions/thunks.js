import { accountService } from "../apiCallers/accountService";
import { filmCatalogService } from "../apiCallers/filmsCatalogService";
import { filmService } from "../apiCallers/filmService";
import { root, routes } from "../routing/routes";
import {
    loading,
    requestFailure,
    login,
    requestSuccess,
    logout,
    setFilmsList,
    setPosters,
    addFilmImages,
    setFilmId,
    setFilmName,
    setFilmYear,
    setFilmDirector,
    setFilmOverview,
    getPoster,
    addFilmRating,
    addFilmComments,
} from "./actions";
import { setUser, removeUser, getUserToken } from "../helpers";

const handleError = (error, dispatch, history) => {
    if (error.response) {
        if (error.response.status === 401) {
            getUserToken() !== null && dispatch(getFilmsList);
            dispatch(deAuthenticate(history));
        }
        else {
            dispatch(requestFailure(error.response.data));
        }
    }
    else if (error.request) {
        dispatch(requestFailure(error.request));
    }
    else {
        dispatch(requestFailure(error));
    }
};

export const signup = (user, history) => dispatch => {
    dispatch(loading());
    accountService
        .signUp(user)
        .then(response => {
            setUser(response.data);
            dispatch(login());
            dispatch(requestSuccess(response));
            history.push(`${root()}${routes.homePage}`);
        })
        .catch(errors => handleError(errors, dispatch, history));
};

export const authenticate = (user, history) => dispatch => {
    dispatch(loading());
    accountService.login(user)
        .then(response => setUser(response.data))
        .then(() => dispatch(login()))
        .then(() => history.push(`${root()}${routes.homePage}`))
        .catch(errors => handleError(errors, dispatch, history));
};

export const deAuthenticate = history => dispatch => {
    removeUser("user");
    dispatch(logout());
    history.push(`${root()}${routes.login}`);
};

export const getFilmsList = history => dispatch => {
    dispatch(loading());

    filmCatalogService
        .getFilmList()
        .then(response => dispatch(setFilmsList(response.data)))
        .then(() => filmCatalogService.getPosters())
        .then(response => dispatch(setPosters(response.data)))
        .then(() => dispatch(requestSuccess()))
        .catch(errors => handleError(errors, dispatch, history));
};

export const getFilmDetails = (filmId, history) => dispatch => {
    dispatch(loading());

    filmCatalogService
        .getFilmById(filmId)
        .then(response => {
            const newFilm = response.data;

            dispatch(setFilmId(newFilm.id));
            dispatch(setFilmName(newFilm.name));
            dispatch(setFilmYear(newFilm.year));
            dispatch(setFilmDirector(newFilm.director));
            dispatch(setFilmOverview(newFilm.overview));
            dispatch(requestSuccess());
        })
        .catch(errors => {
            handleError(errors, dispatch, history);
        });

    filmService
        .getFilmImages(filmId)
        .then(response => {
            dispatch(addFilmImages(response.data));
            dispatch(getPoster());
            dispatch(requestSuccess());
        })
        .catch(errors => {
            handleError(errors, dispatch, history);
        });
};

export const postComment = (text, history) => dispatch => {
    dispatch(loading());

    filmService
        .postFilmComment(text)
        .then(response => {
            response.status === 200
                ? dispatch(requestSuccess())
                : dispatch(requestFailure(response));
        })
        .catch(errors => {
            handleError(errors, dispatch, history);
        });
};

export const loadComments = (filmId, history) => dispatch => {
    filmService
        .getFilmComments(filmId)
        .then(response => {
            dispatch(addFilmComments(response.data));
            dispatch(requestSuccess());
        })
        .catch(errors => {
            handleError(errors, dispatch, history);
        });
};

export const rateFilm = (body, history) => dispatch => {
    dispatch(loading());
    filmService
        .postFilmRating(body)
        .then(response => {
            dispatch(requestSuccess())
        })
        .catch(errors => {
            handleError(errors, dispatch, history);
        });
};

export const loadRating = (filmId, history) => dispatch => {
    filmService
        .getFilmRating(filmId)
        .then(response => {
            dispatch(addFilmRating(response.data));
            dispatch(requestSuccess());
        })
        .catch(errors => {
            handleError(errors, dispatch, history);
        });
};

export const findFilm = (query, history) => dispatch => {
    filmCatalogService.getSearchResults(query)
        .then(response => dispatch(setFilmsList(response.data)))
        .then(() => filmCatalogService.getPosters())
        .then(response => dispatch(setPosters(response.data)))
        .then(() => dispatch(requestSuccess()))
        .catch(errors => {
            handleError(errors, dispatch, history);
        });
}