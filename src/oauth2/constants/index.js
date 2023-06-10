import { endpoints, isLocalhost } from "../../utilities/utilities";

export const API_BASE_URL = isLocalhost ? `http://localhost:8080` : window.location.origin.includes("https:") ? "https://server.bieda.it" : "http://127.0.0.1:30193";

export const ACCESS_TOKEN = "accessToken";

export const OAUTH2_REDIRECT_URI = `${window.location.origin}/oauth2/redirect`;

export const GOOGLE_AUTH_URL = API_BASE_URL + "/oauth2/authorize/google?redirect_uri=" + OAUTH2_REDIRECT_URI;