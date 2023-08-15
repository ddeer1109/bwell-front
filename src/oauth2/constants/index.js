export const API_BASE_URL = window._env_.API_HOST;

export const ACCESS_TOKEN = "accessToken";

export const OAUTH2_REDIRECT_URI = `${window.location.origin}/oauth2/redirect`;

export const GOOGLE_AUTH_URL = API_BASE_URL + "/oauth2/authorize/google?redirect_uri=" + OAUTH2_REDIRECT_URI;