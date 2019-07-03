import axios from "axios";

const getToken = () => localStorage.getItem("token");

const instance = axios.create({
    baseURL: "http://localhost:1839/api/filmcatalog",
    headers: { Authorization: "Bearer " + getToken() }
});

export const filmCrudService = {
    getFilmList() {
        return instance.get("all");
    },
    getPosters() {
        return instance.get("posters");
    },
    getfilmById(id) {
        return instance.get(`getfilm/${id}`);
    }
};
