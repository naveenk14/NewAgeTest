import axios from "axios";
import { environment } from "../Environment/Environment";
import Cookies from "js-cookie";

const baseURL = environment.serverURL;

export function MapService() {
  const authToken = Cookies.get("jwtToken")
  return axios({
    method: "POST",
    url: baseURL+"getdashboardMap",
    headers: {
        auth_token:authToken 
      }
    
  });
}
