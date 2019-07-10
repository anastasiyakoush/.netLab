export const authHelper = {
    getUserName: () => JSON.parse(sessionStorage.getItem("user")).userName || null,
    setUser: (data) => sessionStorage.setItem("user", JSON.stringify(data)),
    clearUserCredentials: () => sessionStorage.removeItem("user"),
    getUserToken: () => JSON.parse(sessionStorage.getItem("user")).token || null,
    isAuthenticated: () => {
        const user = JSON.parse(sessionStorage.getItem("user")) || null;
        return user !== null ? user.token : null;
    }
}