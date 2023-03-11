import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_URL

export const axiosPublic = axios.create({
    headers: {
        "Content-Type": "application/json"
    }
})
