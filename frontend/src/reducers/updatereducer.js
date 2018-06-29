import { FETCH_USER_UPDATE_START, FETCH_USER_UPDATE_SUCCESS, FETCH_USER_UPDATE_ERROR, FETCH_USER_UPDATE_ETH_SUCCESS, CLEAR_UPDATE_STATUS } from '../actions/loginaction';

const updateProfileStatus = (state = { loading: false, error: null, success: null }, action) => {
    switch (action.type) {
        case FETCH_USER_UPDATE_START: return { loading: true, error: null, success: null };
        case FETCH_USER_UPDATE_SUCCESS: return { loading: false, error: null, success: "Success_Update" };
        case FETCH_USER_UPDATE_ERROR: return { loading: false, error: action.error, success: null };
        case FETCH_USER_UPDATE_ETH_SUCCESS: return { loading: false, error: null, success: "Success_Eth"};
        case CLEAR_UPDATE_STATUS: return { loading: false, error: null, success: null };
        default: return state;
    }
}

export { updateProfileStatus };