import * as Types from "../ActionTypes";
export const LogRequest = ({ values }) => ({
  type: Types.LOG_REQUEST,
  payload: values,
});