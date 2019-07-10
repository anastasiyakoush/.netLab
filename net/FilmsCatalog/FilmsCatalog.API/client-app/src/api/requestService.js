import axios from 'axios';
import { authHelper } from "../helpers/authHepler"

export default function requestService(method, url, data, setAuthHeader) {
    const headers = setAuthHeader && { Authorization: "Bearer " + authHelper.getUserToken() };
    return axios({ method, url, data, headers })
}