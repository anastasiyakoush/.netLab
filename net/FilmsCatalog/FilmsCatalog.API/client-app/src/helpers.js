export const getUserName = () => JSON.parse(sessionStorage.getItem("user")).userName;
export const setUser = data => sessionStorage.setItem("user", JSON.stringify(data));
export const removeUser = () => sessionStorage.removeItem("user");
export const getUserToken = () => sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")).token : null;
export const isAuthenticated = !!(sessionStorage.getItem("user"));
export const isPoster = url => url.includes("p.jpg");
export const getPoster = images => {
    const posters = images.filter(x => isPoster(x));
    return posters[0];
};