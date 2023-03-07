import localforage from "localforage";

export const SERVER_BASE_URL = "http://localhost:8000/"

async function getHaders(authorization = true) {
    const accessToken = await localforage.getItem('user').then(data => data?.accessToken)
    console.log({'accessToken': !!accessToken})
    const headers = {
        "Content-Type": "application/json",
    }
    if (!!accessToken && authorization) {
        // @ts-ignore
        headers["Authorization"] = `Bearer ${accessToken}`
    }
    return headers;
}

export const post = async (url: string, data: any, authorization = true) => {
    const headers = await getHaders(authorization);
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: headers
    }
    if (authorization) {
        // @ts-ignore
        requestOptions["credentials"] = "include"
    }
    return fetch(SERVER_BASE_URL + url, requestOptions)
}

export const getUser = localforage.getItem('user')

export function logout() {
    localforage.clear()
    window.location = '/login'
}

export const get = async (url: string) => {
    const headers = await getHaders();
    return fetch(SERVER_BASE_URL + url, {
        method: 'GET',
        headers: headers
    }).then(response => {
        if (response.status === 401) {
            console.log("from success")
            refreshToken()
        }
        return response.json()
    }).catch(error => {
        if (error.status === 401) {
            console.log("from error")
            refreshToken()
        }
        return Promise.reject(error)
    })
}

interface refreshAPIModel {
    data: {
        access: string
        refresh: string
    }
}

export const refreshToken = async () => {
    const refreshToken = await localforage.getItem('user').then(data => data?.refreshToken)
    console.log({refreshToken})

    if (refreshToken) {
        post(
            'auth/token/refresh/', {refresh: refreshToken}, false
        ).then(async response => {
            if (response.status === 401) {
                logout()
            } else {
                const data = await response.json()
                console.log({data})
                const userData = {
                    accessToken: data?.access,
                    refreshToken: data?.refresh
                }
                console.log({userData})
                await localforage.setItem('user', userData)
            }
        }).catch(error => {
            logout()
        })
    } else {
        logout()
    }
}
