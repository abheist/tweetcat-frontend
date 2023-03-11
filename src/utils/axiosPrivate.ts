import axios from 'axios'
import localforage from "localforage";
import {refreshToken} from "@/utils/refreshToken";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL

axios.interceptors.request.use(
    async (config) => {
        const accessToken = await localforage.getItem('user').then(data => data?.accessToken)

        if (accessToken) {
            // @ts-ignore
            config.headers = {
                ...config.headers,
                authorization: `Bearer ${accessToken}`
            }
        }

        return config
    },
    error => Promise.reject(error)
)

axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const config = error?.config

        if (error?.response?.status === 401 && !config?.sent) {
            config.sent = true
            const result = await refreshToken()
            if (result?.access) {
                config.headers = {
                    ...config.headers,
                    authorization: `Bearer ${result?.access}`
                }
            }
            return axios(config)
        }
        return Promise.reject(error)
    }
)

export const axiosPrivate = axios
