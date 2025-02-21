import Cookies from "js-cookie";

export const token = () => {
  const tokenValue = Cookies.get("jwtToken");
  // const tokenValue = localStorage.getItem("jwtToken")
  // const tokenValue = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkZSRVNDT05WMiIsIm5iZiI6MTcxNjI5MzA2OSwiZXhwIjoxNzI0MjQxODY5LCJpYXQiOjE3MTYyOTMwNjl9.D2SwJmLaAlWeayfopT3ae1X-JodJAH60gjhj-7Y6vPg";
  return tokenValue;
};
