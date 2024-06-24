import LocalStorageKeys from "./LocalStorageKeys";

export function getJWT() {
    return localStorage?.getItem(LocalStorageKeys?.ACCESS_TOKEN);
}

export function setJWT(token) {
    if (token && token !== undefined) {
        localStorage.setItem(LocalStorageKeys.ACCESS_TOKEN, token);
    } else {
        console.error("Invalid token");
    }
}

export function removeJWT(){
    localStorage.removeItem(LocalStorageKeys.ACCESS_TOKEN)
}