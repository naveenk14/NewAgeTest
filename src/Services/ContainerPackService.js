import axios from "axios";
import { environment } from "../Environment/Environment";
import Cookies from "js-cookie";
const baseURL = environment.serverURL;

export function ContainerPackService() {
  
    const authToken = Cookies.get("jwtToken")
  
      return axios({
        method: "GET",
        url: baseURL+"sailingschedule/api/container_pack",
        headers: {
            auth_token: authToken 
          }
        
      });
    }
  