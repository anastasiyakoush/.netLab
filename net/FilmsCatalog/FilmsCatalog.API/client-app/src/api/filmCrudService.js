import axios from "axios";
import { getToken } from "../helpers"

const instance = axios.create({
    baseURL: "http://localhost:1839/api/filmcatalog",
    //baseURL: "https://localhost:44374/api/filmcatalog",

    headers: { Authorization: "Bearer " + getToken() }
});

export const filmCrudService = {
    getFilmList() {
        return instance.get("all");
    },
    getPosters() {
        return instance.get("posters");
    },
    getFilmById(id) {
        return instance.get(`getfilm/${id}`);
    }
};
