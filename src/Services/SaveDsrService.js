import axios from "axios";
import { environment } from "../Environment/Environment";
import Cookies from "js-cookie";

const baseURL = environment.serverURL;

export function SaveDsrService({ payload }) {
  
  const authToken = Cookies.get("jwtToken")
  
  return axios({
    method: "POST",
    url: baseURL + "user-preferences/save",
    headers: {
      auth_token: authToken, 
    },
    params: payload,
  });
}
