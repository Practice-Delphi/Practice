import { VERIFY_EMAIL_START,
         VERIFY_EMAIL_SUCCESS,
         VERIFY_EMAIL_ERROR,
         SEND_LETTER_START,
         SEND_LETTER_SUCCESS,
         SEND_LETTER_ERROR } from '../actions/verifyemailaction';

const verifyData = (state = { loading: false, email: null, error: null }, action) => {
    switch (action.type) {
        case VERIFY_EMAIL_START: return { loading: true, email: null, error: null };
        case VERIFY_EMAIL_SUCCESS: return { loading: false, email: action.email, error: null };
        case VERIFY_EMAIL_ERROR: return { loading: false, email: null, error: action.error };
        default: return state;
    }
}

const letterData = (state = { loading: false, success: false, error: null }, action) => {
    switch (action.type) {
        case SEND_LETTER_START: return { loading: true, success: false, error: null };
        case SEND_LETTER_SUCCESS: return { loading: false, success: true, error: null };
        case SEND_LETTER_ERROR: return { loading: false, success: false, error: action.error };
        default: return state;
    }
}

export { verifyData, letterData };
