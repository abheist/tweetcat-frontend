import localforage from "localforage";

// export const getUser = localforage.getItem('user')

export async function logout() {
    await localforage.clear()
    // @ts-ignore
    window.location = '/'
}

