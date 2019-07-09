import axios from "axios";
import { getUserToken } from "../helpers"

const instance = axios.create({
    baseURL: "https://localhost:44374/api/filmdetails/",
});

export const filmService = {
    getFilmImages(filmId) {
        return instance.get(`image/${filmId}`, { headers: { Authorization: "Bearer " + getUserToken() } });
    },
    getFilmComments(filmId) {
        return instance.get(`comment/${filmId}`, { headers: { Authorization: "Bearer " + getUserToken() } });
    },
    getFilmRating(filmId) {
        return instance.get(`rate/${filmId}`, { headers: { Authorization: "Bearer " + getUserToken() } });
    },
    postFilmComment(comment) {
        return instance.post("comment", comment, { headers: { Authorization: "Bearer " + getUserToken() } });
    },
    postFilmRating(rating) {
        return instance.post("rate", rating, { headers: { Authorization: "Bearer " + getUserToken() } });
    },
};