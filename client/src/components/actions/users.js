import axios from 'axios';
import { BASE_URL } from './config';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ERROR = 'ERROR';

const loggedIn = (username, token) => {
    return {
        type: LOGIN,
        payload: { username: username, _token: token }
    }
}

const error = (message) => {
    /** Updates an error message in state */
    return {
        type: ERROR,
        payload: { errMessage: message }
    }
}

export const login = (username, password) => {
    return async function (dispatch) {
        try {
            const res = await axios.post(`${BASE_URL}/auth/login`, { username: username, password: password });
            const token = res.data._token;
            dispatch(loggedIn(username, token));
        } catch (err) {
            const errMessage = err.response.data.message;
            dispatch(error(errMessage));
        }
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
}