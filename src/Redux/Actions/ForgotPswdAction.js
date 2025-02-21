import * as Types from "../ActionTypes";
export const ForgotPswdRequest = ({ values }) => ({
  type: Types.FORGETPSWD_REQUEST,
  payload: values,
});