import * as Types from '../ActionTypes'
export const UpdatePasswordAction = (passwords) => ({
    type: Types.UPDATE_PASSWORD_REQUEST, 
    payload:passwords
  });