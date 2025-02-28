import axios from "axios";
import { environment } from "../Environment/Environment";
import Cookies from "js-cookie";
const baseURL = environment.serverURL;

//const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkZSRVNDT05WMiIsIm5iZiI6MTcxNjI5MzA2OSwiZXhwIjoxNzI0MjQxODY5LCJpYXQiOjE3MTYyOTMwNjl9.D2SwJmLaAlWeayfopT3ae1X-JodJAH60gjhj-7Y6vPg"; 
//  const authToken = token()

export function QuotationDownloadService(request) {

    console.log(request)

    const paramsdata = {
        templateId:47,
        format:"pdf"
    }

  const authToken = Cookies.get("jwtToken")
  return axios({
    method: "PUT",
    url: baseURL+`quotation/report/generateReport/${request}/%7Bimage%7D`,
    data: {},
    params: paramsdata,
    headers: {
        auth_token: authToken 
      },
        responseType: "blob", // Important for binary file
  });
}

