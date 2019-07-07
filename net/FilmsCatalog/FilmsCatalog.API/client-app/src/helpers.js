export const getToken = () => sessionStorage.getItem("token");
export const getUserName = () => sessionStorage.getItem("username");

export const isAuthenticated = !!(
    sessionStorage.getItem("username") && sessionStorage.getItem("token")
);
export const isPoster = url => url.includes("p.jpg");
export const getPoster = images => {
    const posters = images.filter(x => isPoster(x));
    return posters[0];
};