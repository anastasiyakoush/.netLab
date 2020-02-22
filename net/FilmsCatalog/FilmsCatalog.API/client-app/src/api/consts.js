export const accountBaseUrl = "https://localhost:44374/api/account";
export const filmDetailsBaseUrl = "https://localhost:44374/api/filmdetails";
export const filmsBaseUrl = "https://localhost:44374/api/films";

export const authServerUrls = {
    login: "/login",
    signUp: "/signup"
};
export const filmsUrls = {
    get: "/get",
    rate: "/rate",
    comment: "/comment",
    image: "/image",
    findByName: "&$filter=contains(Name,",
    orderBy: "&$orderBy=",
    count: "?$count=true"
};
export const httpMethod = {
    get: "get",
    post: "post"
};
