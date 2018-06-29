import { logout } from './loginaction';

export const VERIFY_EMAIL_START = "VERIFY_EMAIL_START";
export const VERIFY_EMAIL_SUCCESS = "VERIFY_EMAIL_SUCCESS";
export const VERIFY_EMAIL_ERROR = "VERIFY_EMAIL_ERROR";

export const SEND_LETTER_START = "SEND_LETTER_START";
export const SEND_LETTER_SUCCESS = "SEND_LETTER_SUCCESS";
export const SEND_LETTER_ERROR = "SEND_LETTER_ERROR";

const apiurl = "http://localhost:58810";

const start = () => ({
    type: VERIFY_EMAIL_START
});

const success = (email) => ({
    type: VERIFY_EMAIL_SUCCESS,
    email
});

const error = (error) => ({
    type: VERIFY_EMAIL_ERROR,
    error
});

const letterStart = () => ({
    type: SEND_LETTER_START,
});

const letterSuccess = () => ({
    type: SEND_LETTER_SUCCESS
});

const letterError = (error) => ({
    type: SEND_LETTER_ERROR,
    error
});


export const verifyEmail = (id) => (dispatch, getState) => {
    dispatch(start());
    window.fetch(`${apiurl}/Account/VerifyEmail?id=${id}`)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                throw new Error(`Error: ${res.statusText}`);
            }
        })
        .then(data => {
            if (data.error) {
                dispatch(error(data.errorType));
            } else {
                dispatch(success(data.email));
            }
        })
        .catch(error => {
            dispatch(error("Bad_Request"));
        });
}

export const sendVerificationLetter = () => (dispatch, getState) => {
    dispatch(letterStart());
    const token = getState().tokenData.token;
    if (token) {
        window.fetch(`${apiurl}/Account/SendLetter`, {
            method: "GET",
            headers: new Headers({
                'Authorization': `Bearer ${token}`,
            })
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    throw new Error(`Error: ${res.statusText}`);
                }
            })
            .then(data => {
                if (data.error) {
                    dispatch(letterError(data.errorType));
                } else {
                    dispatch(letterSuccess());
                }
            })
            .catch(() => dispatch(logout()));
    } else {
        dispatch(logout());
    }

}