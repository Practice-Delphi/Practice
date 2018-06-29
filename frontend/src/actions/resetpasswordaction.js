import { logout } from './loginaction';

export const RESET_PASSWORD_START = "RESET_PASSWORD_START";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";

export const SEND_RESET_LETTER_START = "SEND_RESET_LETTER_START";
export const SEND_RESET_LETTER_SUCCESS = "SEND_RESET_LETTER_SUCCESS";
export const SEND_RESET_LETTER_ERROR = "SEND_RESET_LETTER_ERROR";

const apiurl = "http://localhost:58810";

const start = () => ({
    type: RESET_PASSWORD_START
});

const success = () => ({
    type: RESET_PASSWORD_SUCCESS,
});

const error = (error) => ({
    type: RESET_PASSWORD_ERROR,
    error
});

const letterStart = () => ({
    type: SEND_RESET_LETTER_START,
});

const letterSuccess = () => ({
    type: SEND_RESET_LETTER_SUCCESS
});

const letterError = (error) => ({
    type: SEND_RESET_LETTER_ERROR,
    error
});


export const resetPassword = (email, password, confpass) => (dispatch, getState) => {
    dispatch(start());
    window.fetch(`${apiurl}/Account/ResetPassword`,{
        method: "POST",
        headers: new Headers({
            'Content-Type': `application/json`,
        }),
        body: JSON.stringify({
            Password: password,
            ConfirmPassword: confpass,
            Email: email,
        }),
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
                console.log(data.errorType);
                dispatch(error(data.errorType));
            } else {
                dispatch(success());
            }
        })
        .catch(() => {
            dispatch(error("Bad_Request"));
        });
}

export const sendResetLetter = (email) => (dispatch, getState) => {
    dispatch(letterStart());
    window.fetch(`${apiurl}/Account/SendResetLetter`, {
        method: "POST",
        headers: new Headers({
            'Content-Type': `application/json`,
        }),
        body: JSON.stringify({
            Email: email,
        }),
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
        .catch(() => dispatch(letterError("Bad_Request")));
    dispatch(letterError("Bad_Request"));

}