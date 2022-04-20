import axios from 'axios';
import { API_BASE_URL } from "../../constants/baseUrl";

export const getCarts = () => {
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


export const addCart = (data) => {
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


export const removeCart = (id) => {
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

export const updateCart = ({ id, quantity }) => {
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
