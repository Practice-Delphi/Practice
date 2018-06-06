import { FETCH_USER_START, FETCH_USER_SUCCESS, FETCH_ERROR, DELETE_USER } from '../actions/loginaction';

const userData = (state = { user: null, error: null, loading: false }, action) => {
    switch (action.type) {
        case FETCH_USER_START: {
            return { user: null, error: null, loading: true };
        }
        case FETCH_USER_SUCCESS: {
            return { user: action.user, error: null, loading: false };
        }
        case FETCH_ERROR: {
            return { user: null, error: action.error, loading: false };
        }
        case DELETE_USER: {
            return { user: null, error: null, loading: false };
        }
        default: return state;
    }
}

export { userData };