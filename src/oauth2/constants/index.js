import { endpoints, isLocalhost } from "../../utilities/utilities";

export const API_BASE_URL = isLocalhost ? `http://localhost:8080` : "http://srv16.mikr.us:30193";

export const ACCESS_TOKEN = "accessToken";

export const OAUTH2_REDIRECT_URI = `${isLocalhost ?  "http://localhost:3000": "http://srv16.mikr.us:20193"}/oauth2/redirect`;

export const GOOGLE_AUTH_URL = API_BASE_URL + "/oauth2/authorize/google?redirect_uri=" + OAUTH2_REDIRECT_URI;