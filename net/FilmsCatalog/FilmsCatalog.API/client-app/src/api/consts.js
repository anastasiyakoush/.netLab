export const accountBaseUrl = "http://localhost:1839/api/account";
export const filmDetailsBaseUrl = "http://localhost:1839/api/filmdetails";
export const filmsBaseUrl = "http://localhost:1839/api/films";

export const authServerUrls = {
    login: "/login",
    signUp: "/signup"
};
export const filmsUrls = {
    get: "/get",
    rate: "/rate",
    comment: "/comment",
    image: "/image",
    findByName: "?$filter=contains(Name,",
    orderBy: "$orderBy="
};
export const httpMethod = {
    get: "get",
    post: "post"
};
