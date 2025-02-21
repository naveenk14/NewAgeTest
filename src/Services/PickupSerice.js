import axios from "axios";
import { environment } from "../Environment/Environment";

const baseURL = environment.serverURL;

export function PickupService(request) {
  return axios({
    method: "GET",
    url: baseURL+"getPickuppoint",
    params:request    
  });
}
