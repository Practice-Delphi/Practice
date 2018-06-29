import { FETCH_TOKEN_SUCCESS, DELETE_TOKEN } from '../actions/loginaction';

const tokenData = (state = { token: null, error: null, loading: false }, action) => {
    switch (action.type) {
        // case FETCH_TOKEN_START: {
        //     return { token: null, error: null, loading: true };
        // }
        case FETCH_TOKEN_SUCCESS: {
            window.localStorage.setItem('token', action.token);
            return { token: action.token, error: null, loading: false };
        }
        // case FETCH_ERROR: {
        //     return { token: null, error: action.error, loading: false };
        // }
        case DELETE_TOKEN: {
            window.localStorage.removeItem('token');
            return { token: null, error: null, loading: false };
        }
        default: return state;
    }
}

export { tokenData };