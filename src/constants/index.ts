export const AUTH_BASE_URL = `http://www.last.fm/api/auth/?api_key=${process.env.REACT_APP_API_KEY}`
export const LOGIN_URL = `${AUTH_BASE_URL}&cb=${process.env.REACT_APP_DOMAIN_NAME}auth`
export const API_BASE_URL = `http://ws.audioscrobbler.com/2.0/?api_key=${process.env.REACT_APP_API_KEY}&format=json`
export const ARTIST_SEARCH_URL = `${API_BASE_URL}&method=artist.search&artist=`

export const ACCESS_TOKEN_KEY = "last-fm-access-token"
export const ACCESS_TOKEN_EXPIRATION = "last-fm-access-token-expiration"

export const ROUTES = {
	AUTH: "/auth",
	FAVORITES: "/favorites",
	LOG_IN: "/login",
	SEARCH: "/search",
}
