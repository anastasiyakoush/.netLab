export const getToken = () => localStorage.getItem("token");
export const getUserName = () => localStorage.getItem("username");

export const isAuthenticated = localStorage.getItem("username") && localStorage.getItem("token");
export const isPoster = url => url.includes("p.jpg");
export const getPoster = images => {
    const posters = images.filter(x => isPoster(x));
    return posters[0];
}