export const FETCH_TOKEN_START = "FETCH_TOKEN_START";
export const FETCH_TOKEN_SUCCESS = "FETCH_TOKEN_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const DELETE_TOKEN = "DELETE_TOKEN";
export const DELETE_USER = "DELETE_TOKEN";
export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";


const fetchStart = () => ({
    type: FETCH_TOKEN_START
});

const fetchSuccess = token => ({
    type: FETCH_TOKEN_SUCCESS,
    token
});

const fetchError = error => ({
    type: FETCH_ERROR,
    error
});

const deleteToken = () => ({
    type: DELETE_TOKEN
});

const deleteUser = () => ({
    type: DELETE_USER
});

const fetchUserStart = () => ({
    type: FETCH_USER_START
});

const fetchUserSuccess = (user) => ({
    type: FETCH_USER_SUCCESS,
    user
});


export const login = (email, password) => (dispatch, getState) => {
    dispatch(fetchStart());
    // Fetch to server
    const fetchToken = () => (new Promise((resolve, reject) => {
        const rand = Math.random();
        if (rand < 0.2) {
            reject("Error fetch to server");
        } else {
            resolve("MyToken");
        }
    }));

    const LoginData = {
        grant_type: "password",
        username: email,
        password: password
    }

    // const LoginData = new FormData()
    //     LoginData.append('grant_type', 'password');
    //     LoginData.append('username', email);
    //     LoginData.append('password', password);

    let formBody = [];
    for (const [key, value] of Object.entries(LoginData)) {
        const encodedKey = encodeURIComponent(key);
        const encodedValue = encodeURIComponent(value);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    const headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    console.log(headers.has('Content-Type'), headers.get('Content-Type'));
    window.fetch('http://localhost:58997/token', {
        method: 'POST',
        headers: headers,
        body: formBody
    })
        .then(data => data.json())
        .then(token => console.log(token))
        .catch(error => console.log(error));

    const fetchUser = () => (new Promise((resolve, reject) => {
        const rand = Math.random();
        if (rand < 0.2) {
            reject("Error fetch to server");
        } else {
            resolve({ email, tokens: 13.02, url: "/testurl", registers: 5, commission: 4.35 });
        }
    }));

    fetchToken()
        .then(token => {
            dispatch(fetchSuccess(token));
            dispatch(fetchUserStart());
            return fetchUser();
        })
        .then(user => dispatch(fetchUserSuccess(user)))
        .catch(error => dispatch(fetchError(error)));
}

export const runDelete = () => (dispatch, getState) => {
    dispatch(deleteToken());
    dispatch(deleteUser());
}
