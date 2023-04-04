import axios from 'axios'
export const API_URL = `http://127.0.0.1:4000/api`
const just_api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

export default just_api