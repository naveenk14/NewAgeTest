//PortAction

import * as Types from "../ActionTypes";
export const LoginRequest = ({ values }) => ({
  type: Types.LOGIN_REQUEST,
  payload: values,
});