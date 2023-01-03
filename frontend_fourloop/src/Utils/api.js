import axios from "axios";

const codes = axios.create({
    baseURL: "https://fourloops12345.onrender.com/api/"
});

export const Login = (email, password) => {
    const postBody = {
        email: email,
        password: password
    };
    console.log("loose joel")
    return codes.post(`/signin`,postBody).then((res) => {
        console.log(res.data);
    })
};