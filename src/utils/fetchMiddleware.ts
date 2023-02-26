import localforage from "localforage";

export const SERVER_BASE_URL = "http://localhost:8000/"

async function getHaders() {
    const accessToken = await localforage.getItem('user').then(data => data?.accessToken)
    const headers = {
        "Content-Type": "application/json",
    }
    if (!!accessToken) {
        // @ts-ignore
        headers["Authorization"] = `Bearer ${accessToken}`
    }
    return headers;
}

export const post = async (url: string, data: any) => {
    const headers = await getHaders();
    return fetch(SERVER_BASE_URL + url, {
        method: 'POST',
        credentials: "include",
        body: JSON.stringify(data),
        headers: headers
    })
}

export const get = async (url: string) => {
    const headers = await getHaders();
    return fetch(SERVER_BASE_URL + url, {
        method: 'GET',
        headers: headers
    }).then(response => {
        if (response.status === 401) {
            localforage.clear()
            return Promise.resolve(response)
        }
        return response.json()
    }).catch(error => {
        localforage.clear()
        return Promise.reject(error)
    })
}

export const refreshToken = () => {
    return post('auth/token/refresh/', {
        refresh: localforage.getItem('user').then((data) => {
            if (data?.refreshToken) {
                return user.refreshToken
            }
        })
    })
}
