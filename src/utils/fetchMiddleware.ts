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
        return response.json()
    }).catch(error => {
        if (error.status === 401) {
            refreshToken().then(response => console.log({response})).catch(error => {
                localforage.clear()
            })
        }
        return Promise.reject(error)
    })
}

export const refreshToken = async () => {
    const refreshToken = await localforage.getItem('user').then(data => data?.refreshToken)
    return post('auth/token/refresh/', {refresh: refreshToken})
}
