import axios from "axios";
import { getUserToken } from "../helpers"

const instance = axios.create({
    baseURL: "https://localhost:44374/api/filmcatalog"
});

export const filmCatalogService = {
    getFilmList() {
        return instance.get("all", { headers: { Authorization: "Bearer " + getUserToken() } });
    },
    getPosters() {
        return instance.get("posters", { headers: { Authorization: "Bearer " + getUserToken() } });
    },
    getFilmById(id) {
        return instance.get(`getfilm/${id}`, { headers: { Authorization: "Bearer " + getUserToken() } });
    },
    getSearchResults(query) {
        return instance.get(`search/${query}`, { headers: { Authorization: "Bearer " + getUserToken() } })
    }
};