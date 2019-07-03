import axios from "axios";

const getToken = () => localStorage.getItem("token");

const instance = axios.create({
    baseURL: "https://localhost:1839/api/filmdetails/",
    headers: { Authorization: "Bearer " + getToken() }
});

export const filmService = {    
    getFilmImages(filmId) {
        return instance.get(`image/${filmId}`);
    },
    getFilmComments(filmId) {
        return instance.get(`comment/${filmId}`);
    },
    getFilmRating(filmId) {
        return instance.get(`rate/${filmId}`);
    },
    postFilmComment(comment) {
        return instance.post("comment", comment);
    },
    postFilmRating(rating) {
        return instance.post("rate", rating);
    }
};
