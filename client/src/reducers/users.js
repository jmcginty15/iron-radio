import { LOGIN, LOGOUT, ERROR } from '../components/actions/users';

const users = (state = { loggedInUser: null }, action) => {
    switch (action.type) {
        case LOGIN:
            const { username, _token } = action.payload;
            return {
                ...state,
                loggedInUser: { username: username, _token: _token },
                errMessage: null
            };
        case LOGOUT:
            return {
                ...state,
                loggedInUser: null,
                errMessage: null
            };
        case ERROR:
            return {
                ...state,
                errMessage: 'Invalid username or password'
            };
        default:
            return state;
    }
}

export default users;