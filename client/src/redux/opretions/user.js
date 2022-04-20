
import axios from 'axios';
import { API_BASE_URL } from "../../constants/baseUrl";



export const Login = (user) => {
  return axios({
    method: 'POST',
    url: `${API_BASE_URL}/login`,
    headers: {
      "Content-type": "application/json"
    },
    data: user
  })
}

export const Register = (newUser) => {
  return axios({
    method: 'POST',
    url: `${API_BASE_URL}/register`,
    headers: {
      "Content-type": "application/json"
    },
    data: newUser
  })
}

export const getUserApi = (tk) => {
  return axios({
    method: 'GET',
    url: `${API_BASE_URL}/user`,
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${tk}`
    }
  })
}

