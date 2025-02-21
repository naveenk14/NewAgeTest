import axios from "axios";
import { environment } from "../Environment/Environment";
import Cookies from "js-cookie";

const baseURL = environment.serverURL;
//const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkZSRVNDT05WMiIsIm5iZiI6MTcxNjI5MzA2OSwiZXhwIjoxNzI0MjQxODY5LCJpYXQiOjE3MTYyOTMwNjl9.D2SwJmLaAlWeayfopT3ae1X-JodJAH60gjhj-7Y6vPg"; 
// const authToken = token()

export default function InvoiceCashService(request) {
const authToken = Cookies.get("jwtToken")

  return axios({
    method: "POST",
    url: baseURL + "invoice_list",
    data: request,
    headers: {
      auth_token: authToken,
    },
  });
}
