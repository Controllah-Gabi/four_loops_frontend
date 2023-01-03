import axios from "axios";

const codes = axios.create({
    baseURL: "https://fourloops12345.onrender.com/api/"
});

export const Login = (email, password) => {
    const postBody = {
        email: email,
        password: password
    };
    return codes.post(`/signin`,postBody).then((res) => {
        return (res.data);
    })
};

export const Logout = () => {
    return codes.post(`/signout`).then((res) => {
        return (res.data);
    })
};