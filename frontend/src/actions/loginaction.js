import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


export const FETCH_TOKEN_START = "FETCH_TOKEN_START";
export const FETCH_TOKEN_SUCCESS = "FETCH_TOKEN_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const DELETE_TOKEN = "DELETE_TOKEN";
export const DELETE_USER = "DELETE_USER";
export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";

export const FETCH_USER_UPDATE_START = "FETCH_USER_UPDATE_START";
export const FETCH_USER_UPDATE_SUCCESS = "FETCH_USER_UPDATE_SUCCESS";
export const FETCH_USER_UPDATE_ERROR = "FETCH_USER_UPDATE_ERROR";

const siteurl = "http://localhost:3000";

// const fetchStart = () => ({
//     type: FETCH_TOKEN_START
// });

// const fetchSuccess = token => ({
//     type: FETCH_TOKEN_SUCCESS,
//     token
// });

const fetchError = error => ({
    type: FETCH_ERROR,
    error
});

// const deleteToken = () => ({
//     type: DELETE_TOKEN
// });

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

const fetchUpdateStart = () => ({
    type: FETCH_USER_UPDATE_START,
})

const fetchUpdateSucces = user => ({
    type: FETCH_USER_UPDATE_SUCCESS,
    user,
})

const fetchUpdateError = error => ({
    type: FETCH_USER_UPDATE_ERROR,
    error,
})

// const encodedData = (data) => {
//     let formBody = [];
//     for (const [key, value] of Object.entries(data)) {
//         const encodedKey = encodeURIComponent(key);
//         const encodedValue = encodeURIComponent(value);
//         formBody.push(encodedKey + "=" + encodedValue);
//     }
//     formBody = formBody.join("&");
//     return formBody;
// }

export const checkUserStatus = () => (dispatch, getState) => {
    firebase.auth().onAuthStateChanged((user) => {
        dispatch(fetchUserStart());
        if (user) {
            const ref = `/Users/${user.uid}`;
            firebase.database().ref(ref).once('value')
                .then(snapshot => dispatch(fetchUserSuccess(snapshot.val())))
                .catch(() => dispatch(deleteUser()));
        } else {
            dispatch(deleteUser());
        }
    });
    // const user = firebase.auth().currentUser;
    // console.log(user);
    // if (user) {
    //     dispatch(fetchUserStart());
    //     const ref = `/Users/${user.uid}`;
    //     firebase.database().ref(ref).once('value')
    //         .then(snapshot => dispatch(fetchUserSuccess(snapshot.val())))
    //         .catch(() => dispatch(deleteUser()));
    // } else {
    //     dispatch(deleteUser());
    // }
}

export const login = (email, password) => (dispatch, getState) => {
    dispatch(fetchUserStart());
    // Fetch to server
    // const fetchToken = () => (new Promise((resolve, reject) => {
    //     const rand = Math.random();
    //     if (rand < 0.2) {
    //         reject("Error fetch to server");
    //     } else {
    //         resolve("MyToken");
    //     }
    // }));

    // const loginData = {
    //     grant_type: "password",
    //     username: email,
    //     password: password
    // }

    // const LoginData = new FormData()
    //     LoginData.append('grant_type', 'password');
    //     LoginData.append('username', email);
    //     LoginData.append('password', password);

    // let formBody = [];
    // for (const [key, value] of Object.entries(LoginData)) {
    //     const encodedKey = encodeURIComponent(key);
    //     const encodedValue = encodeURIComponent(value);
    //     formBody.push(encodedKey + "=" + encodedValue);
    // }
    // formBody = formBody.join("&");
    // const headers = new Headers({
    //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    // });
    // console.log(headers.has('Content-Type'), headers.get('Content-Type'));
    // window.fetch('http://localhost:59430/Account/LoginVM', {
    //     method: 'POST',
    //     headers: headers,
    //     body: encodedData(loginData)
    // })
    //     .then(res => {
    //         if (res.status === 200) {
    //             return res.json();
    //         } else if (res.status === 400) {
    //             throw new Error("Bad request");
    //         } else if (res.status === 404) {
    //             throw new Error("Not found");
    //         } else {
    //             throw new Error("Unknown error");
    //         }
    //     })
    //     .then(userData => {
    //         dispatch(fetchSuccess(userData.access_token));
    //         //console.log(token);
    //         dispatch(fetchUserSuccess(userData));
    //     })
    //     .catch(error => dispatch(fetchError(error.toString())));

    // const fetchUser = () => (new Promise((resolve, reject) => {
    //     const rand = Math.random();
    //     if (rand < 0.2) {
    //         reject("Error fetch to server");
    //     } else {
    //         resolve({ email, tokens: 13.02, url: "/testurl", registers: 5, commission: 4.35 });
    //     }
    // }));

    // fetchToken()
    //     .then(token => {
    //         dispatch(fetchSuccess(token));
    //         dispatch(fetchUserStart());
    //         return fetchUser();
    //     })
    //     .then(user => dispatch(fetchUserSuccess(user)))
    //     .catch(error => dispatch(fetchError(error)));
    if (!email) {
        dispatch(fetchError("Email must be not empty"));
    } else {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(userData => {
                const ref = `/Users/${userData.user.uid}`;
                return firebase.database().ref(ref).once('value');
            })
            .then(snapshot => dispatch(fetchUserSuccess(snapshot.val())))
            .catch(error => dispatch(fetchError(error.message)));
    }
}

export const register = (email, password) => (dispatch, getState) => {
    // const headers = new Headers({
    //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    // });

    // const registerData = {
    //     grant_type: "password",
    //     username: email,
    //     password: password
    // }

    // window.fetch('http://localhost:58997/token', {
    //     method: 'POST',
    //     headers: headers,
    //     body: encodedData(registerData),
    // })
    //     .then(res => {
    //         if (res.status === 200) {
    //             return res.json();
    //         } else if (res.status === 400) {
    //             throw new Error("Bad request");
    //         } else if (res.status === 404) {
    //             throw new Error("Not found");
    //         } else {
    //             throw new Error("Unknown error");
    //         }
    //     })
    //     .then(userData => {
    //         dispatch(fetchSuccess(userData.access_token));
    //         //console.log(token);
    //         dispatch(fetchUserSuccess(userData));
    //     })
    //     .catch(error =>  dispatch(fetchError(error.toString())));
    dispatch(fetchUserStart());
    let user = null;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userData => {
            // console.log(userData);
            user = userData.user
            const data = {
                email: user.email,
                ethaddress: null,
                registers: Math.round(Math.random() * 10),
                tokens: Math.round(Math.random() * 100),
                url: `${siteurl}/register?q=${user.uid}`,
                commission: Math.round(Math.random() * 15),
            }
            const ref = `/Users/${user.uid}`;
            return firebase.database().ref(ref).set(data);
        })
        .then(() => {
            return firebase.database().ref(`/Users/${user.uid}`).once("value");
            //dispatch(fetchUserSuccess.data)
        })
        .then(snapshoot => dispatch(fetchUserSuccess(snapshoot.val())))
        .catch(error => dispatch(fetchError(error.message)));
}

export const logout = () => (dispatch, getState) => {
    firebase.auth().signOut()
        .then(() => dispatch(deleteUser()))
        .catch(error => dispatch(fetchError(error.message)));
    // dispatch(deleteToken());
    // dispatch(deleteUser());
}

export const updateUserEmailAndPassword = (newemail, newpassword, newpasswordconf) => (dispatch, getState) => {

    dispatch(fetchUpdateStart());

    const user = firebase.auth().currentUser;
    // console.log(firebase.auth().currentUser);
    const ref = `/Users/${user.uid}`;
    const updates = {};

    if (newpassword && newpasswordconf && newpassword !== newpasswordconf) {
        dispatch(fetchUpdateError("Password not confirmed"));
    } else {
        if (!newemail && !newpassword) {
            dispatch(fetchUpdateError("One string must be not empty"));
        } else if (newemail && !newpassword) {
            user.updateEmail(newemail)
                .then(() => {
                    updates['/email'] = newemail;
                    return firebase.database().ref(ref).update(updates);
                })
                .then(() => {
                    const ref = `/Users/${user.uid}`;
                    return firebase.database().ref(ref).once('value');
                })
                .then(snapshot => dispatch(fetchUpdateSucces(snapshot.val())))
                .catch(error => dispatch(fetchUpdateError(error.message)));
        } else if (!newemail && newpassword) {
            user.updatePassword(newpassword)
                .then(() => firebase.database().ref(ref).once('value'))
                .then(snapshot => dispatch(fetchUpdateSucces(snapshot.val())))
                .catch(error => dispatch(fetchUpdateError(error.message)));
        } else {
            user.updateEmail(newemail)
                .then(() => user.updatePassword(newpassword))
                .then(() => {
                    updates['/email'] = newemail;
                    return firebase.database().ref(ref).update(updates);
                })
                .then(() => firebase.database().ref(ref).once('value'))
                .then(snapshot => dispatch(fetchUpdateSucces(snapshot.val())))
                .catch(error => dispatch(fetchUpdateError(error.message)));
        }
    }
}

export const updateETHAddress = (address) => (dispatch, getState) => {
    dispatch(fetchUpdateStart());
    if (!address) {
        dispatch(fetchUpdateError("Please enter not empty string"));
    } else {
        const user = firebase.auth().currentUser;
        const ref = `/Users/${user.uid}`;
        const updates = {};
        updates['ethaddress'] = address;
        firebase.database().ref(ref).update(updates)
            .then(() => firebase.database().ref(ref).once('value'))
            .then(snapshot => dispatch(fetchUpdateSucces(snapshot.val())))
            .catch(error => dispatch(fetchUpdateError(error.message)));
    }
}
