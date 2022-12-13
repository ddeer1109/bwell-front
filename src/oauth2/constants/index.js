import { endpoints, isLocalhost } from "../../utilities/utilities";

export const API_BASE_URL = `http://localhost:${process.env.API_PORT}`;

export const ACCESS_TOKEN = "accessToken";

export const OAUTH2_REDIRECT_URI = `http://localhost:${process.env.FRONT_PORT}/oauth2/redirect`;

export const GOOGLE_AUTH_URL = API_BASE_URL + "/oauth2/authorize/google?redirect_uri=" + OAUTH2_REDIRECT_URI;