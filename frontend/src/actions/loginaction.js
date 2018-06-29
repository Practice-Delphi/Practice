// import firebase from 'firebase/app';
// import 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';


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
export const FETCH_USER_UPDATE_ETH_SUCCESS = "FETCH_USER_UPDATE_ETH_SUCCESS";
export const CLEAR_UPDATE_STATUS = "CLEAR_UPDATE_STATUS";

const siteurl = "http://localhost:3000";
const apiurl = "http://localhost:58810";


const fetchTokenSuccess = token => ({
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

const fetchUpdateStart = () => ({
    type: FETCH_USER_UPDATE_START,
});

const fetchUpdateSucces = user => ({
    type: FETCH_USER_UPDATE_SUCCESS,
    user,
});

const fetchUpdateError = error => ({
    type: FETCH_USER_UPDATE_ERROR,
    error,
});

const fetchUpdateEthSuccess = ethaddress => ({
    type: FETCH_USER_UPDATE_ETH_SUCCESS,
    ethaddress
});

export const clearUpdateStatus = () => ({
    type: CLEAR_UPDATE_STATUS,
});
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
    dispatch(fetchUserStart());
        const token = window.localStorage.getItem('token') || getState().tokenData.token;
        // console.log(token);
        if (token) {
            fetch(`${apiurl}/Account/GetUser`, {
                method: 'GET',
                headers: new Headers({
                    'Authorization': `Bearer ${token}`
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
                        dispatch(logout());
                    } else {
                        dispatch(fetchUserSuccess({
                            email: data.user,
                            commission: data.income,
                            ethaddress: data.ethaddress,
                            tokens: data.tokens,
                            registers: data.numofref,
                            url: `${siteurl}?ref=${data.user}`,
                        }));
                    }
                })
                .catch(() => dispatch(logout()));
        } else {
            dispatch(logout());
        }


    // firebase.auth().onAuthStateChanged((user) => {
    //     dispatch(fetchUserStart());
    //     if (user) {
    //         const ref = `/Users/${user.uid}`;
    //         firebase.database().ref(ref).once('value')
    //             .then(snapshot => dispatch(fetchUserSuccess(snapshot.val())))
    //             .catch(() => dispatch(deleteUser()));
    //     } else {
    //         dispatch(deleteUser());
    //     }
    // });
}

const loginFetch = (email, password) => (dispatch, getState) => {
    return fetch(`${apiurl}/Account/Login`, {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
            Email: email,
            Password: password
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
            // console.log(data);
            if (data.error) {
                dispatch(fetchError(data.errorType));
            } else {
                dispatch(fetchTokenSuccess(data.access_token));
                dispatch(fetchUserSuccess({
                    email: data.user,
                    commission: data.income,
                    ethaddress: data.ethaddress,
                    tokens: data.tokens,
                    registers: data.numofref,
                    url: `${siteurl}?ref=${data.user}`,
                }));
                // console.log(getCurrUser);
                // getCurrUser(getState);
            }
        })
        .catch(error => {
            // console.log(error);
            dispatch(fetchError("Bad_Request"));
        });
}


export const login = (email, password) => (dispatch, getState) => {

    dispatch(fetchUserStart());
    dispatch(loginFetch(email, password));

    // if (!email) {
    //     dispatch(fetchError("Email must be not empty"));
    // } else {
    //     firebase.auth().signInWithEmailAndPassword(email, password)
    //         .then(userData => {
    //             const ref = `/Users/${userData.user.uid}`;
    //             return firebase.database().ref(ref).once('value');
    //         })
    //         .then(snapshot => dispatch(fetchUserSuccess(snapshot.val())))
    //         .catch(error => dispatch(fetchError(error.message)));
    // }
}

export const register = (email, password, confpassword) => (dispatch, getState) => {

    dispatch(fetchUserStart());
    const ref = getState().refData.ref;
    const url = (ref) ? `${apiurl}/Account/Register?ref=${ref}`: `${apiurl}/Account/Register`;
    fetch(url, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
            Email: email,
            Password: password,
            ConfirmPassword: confpassword,
        }),
    })
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else if (res.status === 401) {
                dispatch(logout());
            } else {
                throw new Error(`Error: ${res.statusText}`);
            }
        })
        .then(data => {
            if (data.error) {
                dispatch(fetchError(data.errorType));
            } else {
                // console.log(data);
                dispatch(loginFetch(email, password));
            }
        })
        .catch(error => {
            dispatch(fetchError("Bad_Request"));
        })

    // dispatch(fetchUserStart());
    // let user = null;
    // firebase.auth().createUserWithEmailAndPassword(email, password)
    //     .then(userData => {
    //         // console.log(userData);
    //         user = userData.user
    //         const data = {
    //             email: user.email,
    //             ethaddress: null,
    //             registers: Math.round(Math.random() * 10),
    //             tokens: Math.round(Math.random() * 100),
    //             url: `${siteurl}/register?q=${user.uid}`,
    //             commission: Math.round(Math.random() * 15),
    //         }
    //         const ref = `/Users/${user.uid}`;
    //         return firebase.database().ref(ref).set(data);
    //     })
    //     .then(() => {
    //         return firebase.database().ref(`/Users/${user.uid}`).once("value");
    //         //dispatch(fetchUserSuccess.data)
    //     })
    //     .then(snapshoot => dispatch(fetchUserSuccess(snapshoot.val())))
    //     .catch(error => dispatch(fetchError(error.message)));
}

export const logout = () => (dispatch, getState) => {
    // firebase.auth().signOut()
    //     .then(() => dispatch(deleteUser()))
    //     .catch(error => dispatch(fetchError(error.message)));
    dispatch(deleteToken());
    dispatch(deleteUser());
}

export const updateUserEmailAndPassword = (newemail, newpassword, newpasswordconf) => (dispatch, getState) => {

    dispatch(fetchUpdateStart());
    const token = getState().tokenData.token;

    fetch(`${apiurl}/Account/Edit`, {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }),
        body: JSON.stringify({
            Email: newemail,
            Password: newpassword,
            ConfirmPassword: newpasswordconf,
        }),
    })
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else if (res.status === 401) {
                dispatch(logout());
            } else {
                throw new Error(`Error: ${res.statusText}`);
            }
        })
        .then(data => {
            // console.log(data);
            if (data.error) {
                dispatch(fetchUpdateError(data.errorType));
            } else {
                dispatch(fetchTokenSuccess(data.access_token));
                dispatch(fetchUpdateSucces({
                    email: data.user,
                    commission: data.income,
                    ethaddress: data.ethaddress,
                    tokens: data.tokens,
                    registers: data.numofref,
                    url: `${siteurl}?ref=${data.user}`,
                }));
            }
        })
        .catch(error => dispatch(fetchUpdateError("Bad_Request")));

    // dispatch(fetchUpdateStart());

    // const user = firebase.auth().currentUser;
    // // console.log(firebase.auth().currentUser);
    // const ref = `/Users/${user.uid}`;
    // const updates = {};

    // if (newpassword && newpasswordconf && newpassword !== newpasswordconf) {
    //     dispatch(fetchUpdateError("Password not confirmed"));
    // } else {
    //     if (!newemail && !newpassword) {
    //         dispatch(fetchUpdateError("One string must be not empty"));
    //     } else if (newemail && !newpassword) {
    //         user.updateEmail(newemail)
    //             .then(() => {
    //                 updates['/email'] = newemail;
    //                 return firebase.database().ref(ref).update(updates);
    //             })
    //             .then(() => {
    //                 const ref = `/Users/${user.uid}`;
    //                 return firebase.database().ref(ref).once('value');
    //             })
    //             .then(snapshot => dispatch(fetchUpdateSucces(snapshot.val())))
    //             .catch(error => dispatch(fetchUpdateError(error.message)));
    //     } else if (!newemail && newpassword) {
    //         user.updatePassword(newpassword)
    //             .then(() => firebase.database().ref(ref).once('value'))
    //             .then(snapshot => dispatch(fetchUpdateSucces(snapshot.val())))
    //             .catch(error => dispatch(fetchUpdateError(error.message)));
    //     } else {
    //         user.updateEmail(newemail)
    //             .then(() => user.updatePassword(newpassword))
    //             .then(() => {
    //                 updates['/email'] = newemail;
    //                 return firebase.database().ref(ref).update(updates);
    //             })
    //             .then(() => firebase.database().ref(ref).once('value'))
    //             .then(snapshot => dispatch(fetchUpdateSucces(snapshot.val())))
    //             .catch(error => dispatch(fetchUpdateError(error.message)));
    //     }
    // }
}

export const updateETHAddress = (address) => (dispatch, getState) => {
    dispatch(fetchUpdateStart());
    const token = getState().tokenData.token;
    fetch(`${apiurl}/Account/EditEthAddress`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }),
        body: JSON.stringify({
            EtheriumAddress: address
        })
    })
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else if (res.status === 401) {
                dispatch(logout());
            } else {
                throw new Error(`Error: ${res.statusText}`);
            } 
        })
        .then(data => {
            if (data.error) {
                dispatch(fetchUpdateError(data.errorType));
            } else {
                dispatch(fetchUpdateEthSuccess(address));
            }
        })
        .catch(error => dispatch(fetchUpdateError("Bad_Request")));

    // dispatch(fetchUpdateStart());
    // if (!address) {
    //     dispatch(fetchUpdateError("Please enter not empty string"));
    // } else {
    //     const user = firebase.auth().currentUser;
    //     const ref = `/Users/${user.uid}`;
    //     const updates = {};
    //     updates['ethaddress'] = address;
    //     firebase.database().ref(ref).update(updates)
    //         .then(() => firebase.database().ref(ref).once('value'))
    //         .then(snapshot => dispatch(fetchUpdateSucces(snapshot.val())))
    //         .catch(error => dispatch(fetchUpdateError(error.message)));
    // }
}
