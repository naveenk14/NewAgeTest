import axios from "axios";
import { environment } from "../Environment/Environment";
// import Cookies from "js-cookie";

const baseURL = environment.serverURL;

export function LogService(request) {
  //   const authToken = Cookies.get("jwtToken");
  // console.log(request,"serv");
  return axios({
    method: "GET",
    url: baseURL + "login",
    params: request,
    // headers: {
    //   auth_token: authToken,
    // },
  });
}