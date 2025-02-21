import axios from "axios";
import { environment } from "../Environment/Environment";
import Cookies from "js-cookie";

const baseURL = environment.serverURL;

export function BookingService({ payload }) {
  
  const authToken = Cookies.get("jwtToken")
  
  return axios({
    method: "GET",
    url: baseURL + "booking_list",
    headers: {
      auth_token: authToken, 
    },
    params: payload,
  });
}
