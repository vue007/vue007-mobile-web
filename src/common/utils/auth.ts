
const TokenKey = 'x-token';

export function getToken() {
    return window.localStorage.getItem(TokenKey);
}

export function setToken(token: string) {
    return window.localStorage.setItem(TokenKey, token);
}

export function removeToken() {
    return window.localStorage.removeItem(TokenKey);
}
