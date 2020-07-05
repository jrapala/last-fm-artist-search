export const BASE_URL = `http://www.last.fm/api/auth/?api_key=${process.env.REACT_APP_API_KEY}`
export const LOGIN_URL = `${BASE_URL}&cb=${process.env.REACT_APP_DOMAIN_NAME}auth`

export const ACCESS_TOKEN_KEY = "last-fm-access-token"
export const ACCESS_TOKEN_EXPIRATION = "last-fm-access-token-expiration"
