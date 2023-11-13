import axios from "axios";
import {getCookies} from "@/helpers/cookies";


const baseURL = 'https://dummyjson.com'
const apiClient = axios.create({
    baseURL
})

apiClient.interceptors.request.use((config) => {
    const token = getCookies('xx-access-token')?.value
    const isLoggedIn = !!token
    if (isLoggedIn) {
        config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
})


export default apiClient
