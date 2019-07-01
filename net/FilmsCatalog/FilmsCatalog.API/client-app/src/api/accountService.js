import axios from 'axios';

const instance = axios.create({
    baseURL: "https://localhost:44374/api/account"
})

export const accountService = {
    signUp(data) {
        return instance.post("/signup", data)
    },
    login(data) {
        return instance.post("/login", data)
    }
};
