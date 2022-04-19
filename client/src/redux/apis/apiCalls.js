import axios from 'axios';
import { API_BASE_URL } from "../../constants/baseUrl";

const Api = {}
const token = localStorage.getItem("token")
Api.Login = (user) => {
    console.log("login", user);
   
    return axios({
        method: 'POST',
        url: `${API_BASE_URL}/login`,
        headers: {
            "Content-type": "application/json"
        },
        data:user
    })
}

Api.Register = (newUser) => {
    console.log("registter", newUser);
    return axios({
        method: 'POST',
        url: `${API_BASE_URL}/register`,

        headers: {
            "Content-type": "application/json"
        },
        data: newUser
    })
}

Api.getProducts = () => {

    console.log("here is token", token)
    return axios({
        method: 'GET',
        url: `${API_BASE_URL}/products`,

        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
}

Api.ViewCarts = () => {

    return axios({
        method: 'GET',
        url: `${API_BASE_URL}/carts`,
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
}

Api.AddtoCart = (data) => {
    return axios({
        method: 'POST',
        url: `${API_BASE_URL}/cart/${data.id}`,
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
}

Api.RemoveCart = (id) => {
    return axios({
        method: 'DELETE',
        url: `${API_BASE_URL}/cart/${id}`,
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    })
}

export default Api;
