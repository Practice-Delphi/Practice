
const apiurl = "http://localhost:59430"
// let token = "";

// const getToken = () => {
//     fetch(`${apiurl}/token`, {
//         method: "Post",
//         headers: new Headers({
//             'Content-Type': "application/json",
//         }),
//         body: JSON.stringify({
//             Email: "qwerty",
//             Password: "55555",
//         }),
//     })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             token = data.access_token;
//             console.log(token);
//         })
//         .catch(error => console.log(error));
// }

const Login = () => {
    fetch(`${apiurl}/api/values/getlogin`, {
        method: "GET",
        headers: new Headers({
            "Authorization": `Bearer ${token}`,
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

const Register = () => {
    const email = document.getElementById("reg_email").value;
    const password = document.getElementById("reg_pass").value;
    const confpass = document.getElementById("reg_confpass").value;
    fetch(`${apiurl}/Account/Register`, {
        method: "POST",
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
            Email: email,
            Year: 18,
            Password: password,
            PasswordConfirm: confpass,
        })
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}