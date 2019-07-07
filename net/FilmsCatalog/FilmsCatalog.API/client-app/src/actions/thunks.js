import { accountService } from "../api/accountService";
import { filmCrudService } from "../api/filmCrudService";
import { filmService } from "../api/filmService";
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
    addFilmComments
} from "./actions";

const handleError = (error, dispatch, history) => {
    if (error.response) {
        if (error.response.status === 401) {
            dispatch(deAuthenticate(history));
            return;
        }
        dispatch(requestFailure(error.response.data));
        return;
    }
    dispatch(requestFailure(error));
};

export const signup = (user, history) => dispatch => {
    dispatch(loading());
    accountService
        .signUp(user)
        .then(response => {
            sessionStorage.setItem("username", response.data.userName);
            sessionStorage.setItem("token", response.data.token);
            sessionStorage.setItem("email", response.data.email);
            dispatch(login());
            dispatch(requestSuccess(response));
            history.push(`${root()}${routes.homePage}`);
        })
        .catch(errors => {
            dispatch(requestFailure(errors.response.data));
        });
};
export const authenticate = (user, history) => dispatch => {
    dispatch(loading());
    accountService
        .login(user)
        .then(response => {
            dispatch(login());
            history.push(`${root()}${routes.homePage}`);
            sessionStorage.setItem("username", response.data.userName);
            sessionStorage.setItem("token", response.data.token);
            sessionStorage.setItem("email", response.data.email);
            dispatch(requestSuccess(response));
        })
        .catch(errors => {
            dispatch(requestFailure(errors.response.data));
        });
};
export const deAuthenticate = history => dispatch => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("token");
    dispatch(logout());
    history.push(`${root()}${routes.login}`);
};

export const getFilmsList = history => dispatch => {
    dispatch(loading());
    return new Promise(resolve =>
        filmCrudService
            .getFilmList()
            .then(response => {
                dispatch(setFilmsList(response.data));
            })
            .then(() => filmCrudService.getPosters())
            .then(response => {
                dispatch(setPosters(response.data));
                dispatch(requestSuccess());
                resolve();
            })
    ).catch(errors => {
        handleError(errors, dispatch, history);
    });
};

export const getFilmDetails = (filmId, history) => dispatch => {
    dispatch(loading());
    filmCrudService
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
    dispatch(loading());

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
            response.status === 200
                ? dispatch(requestSuccess())
                : dispatch(requestFailure(response));
        })
        .catch(errors => {
            handleError(errors, dispatch, history);
        });
};
export const loadRating = (filmId, history) => dispatch => {
    dispatch(loading());

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
