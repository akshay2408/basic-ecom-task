import axios from 'axios';
import { API_BASE_URL } from "../../constants/baseUrl";

export const getProducts = () => {
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