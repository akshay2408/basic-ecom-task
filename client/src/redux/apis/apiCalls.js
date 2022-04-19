import axios from 'axios';
import { API_BASE_URL } from "../../constants/baseUrl";

const Api = {}

Api.Login = (user) => {
    const formData = new FormData()
    formData.append("email", user.email)
    formData.append("password", user.password)
    return axios({
        method: 'POST',
        url: `${API_BASE_URL}/api/login`,
        headers: {
            "Content-type": "application/json"
        },
        data: formData
    })
}

Api.Register = (newUser) => {
    const formData = new FormData()
    formData.append("email", newUser.email)
    formData.append("password", newUser.password)
    return axios({
        method: 'POST',
        url: `${API_BASE_URL}/`,

        headers: {
            "Content-type": "application/json"
        },
        data: formData
    })
}

Api.getProducts = () => {
    return axios({
        method: 'GET',
        url: `${API_BASE_URL}/`,

        headers: {
            "Content-type": "application/json"
        }

    })
}

Api.ViewCarts = () => {
    const user = JSON.parse(localStorage.getItem("user"))

    return axios({
        method: 'GET',
        url: `${API_BASE_URL}/`,

        headers: {
            "Content-type": "application/json",
            "accessToken": user.sessionToken
        }

    })
}

Api.AddtoCart = (data) => {
 
}



Api.RemoveCart = (id) => {
    const user = JSON.parse(localStorage.getItem("user"))
    const formData = new FormData()
    formData.append("id", id)

    return axios({
        method: 'POST',
        url: `${API_BASE_URL}/`,

        headers: {
            "Content-type": "application/json",
            "accessToken": user.sessionToken
        },
        data: formData
    })
}

export default Api;
