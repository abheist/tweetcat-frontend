import localforage from "localforage";
import {axiosPublic} from "@/utils/axiosPublic";
import mem from "mem";
import {logout} from "@/utils/fetchMiddleware";

const privateRefreshToken = async () => {
    // @ts-ignore
    const refreshToken = await localforage.getItem('user').then(data => data?.refreshToken)
    console.log({refreshToken})

    try {
        const response = await axiosPublic.post("auth/token/refresh/", {
            refresh: refreshToken
        })

        const {access, refresh} = response.data

        const userData = {
            accessToken: access,
            refreshToken: refresh
        }
        console.log({userData})
        await localforage.setItem('user', userData)
    } catch (error) {
        logout()
    }
}
const maxAge = 10000;

export const refreshToken = mem(privateRefreshToken, {
    maxAge
})
