import axios from 'axios';
import { API_BASE_URL } from "../../constants/baseUrl";

const Api = {}

Api.Login = (user) => {
    console.log("login", user);

    return axios({
        method: 'POST',
        url: `${API_BASE_URL}/login`,
        headers: {
            "Content-type": "application/json"
        },
        data: user
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

export const getProductsApi = () => {
    const token = localStorage.getItem("token")
    return axios({
        method: 'GET',
        url: `${API_BASE_URL}/products`,
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
}

export const getCartsApi = () => {
    const token = localStorage.getItem("token")
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
    const token = localStorage.getItem("token")
    return axios({
        method: 'POST',
        url: `${API_BASE_URL}/cart/${data.id}`,
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
}

Api.removeCart = (id) => {
    const token = localStorage.getItem("token")
    return axios({
        method: 'DELETE',
        url: `${API_BASE_URL}/cart/${id}`,
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    })
}
Api.updateCart = ({ id, quantity }) => {
    const token = localStorage.getItem("token")
    return axios({
        method: 'PATCH',
        url: `${API_BASE_URL}/cart/${id}`,
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        data: { quantity: quantity }
    })
}

export default Api;
