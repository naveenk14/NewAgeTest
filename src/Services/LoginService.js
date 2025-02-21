import axios from "axios";
import { environment } from "../Environment/Environment";

const baseURL = environment.serverURL;

export function LoginService(request) {
    return axios({
      method: "GET",
      url: baseURL + "verify",
      params:request,
      
    });
  }