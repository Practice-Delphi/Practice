import {
    RESET_PASSWORD_START,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR,
    SEND_RESET_LETTER_START,
    SEND_RESET_LETTER_SUCCESS,
    SEND_RESET_LETTER_ERROR
} from '../actions/resetpasswordaction';

const resetData = (state = { loading: false, success: null, error: null }, action) => {
    switch (action.type) {
        case RESET_PASSWORD_START: return { loading: true, success: null, error: null };
        case RESET_PASSWORD_SUCCESS: return { loading: false, success: "Success_Reset", error: null };
        case RESET_PASSWORD_ERROR: return { loading: false, success: null, error: action.error };
        default: return state;
    }
}

const letterResetData = (state = { loading: false, success: null, error: null }, action) => {
    switch (action.type) {
        case SEND_RESET_LETTER_START: return { loading: true, success: null, error: null };
        case SEND_RESET_LETTER_SUCCESS: return { loading: false, success: "Success_Send_Reset", error: null };
        case SEND_RESET_LETTER_ERROR: return { loading: false, success: null, error: action.error };
        default: return state;
    }
}

export { resetData, letterResetData };
