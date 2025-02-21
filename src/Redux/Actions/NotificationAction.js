import * as Types from '../ActionTypes'
export const NotificationAction= ({payload}) => ({
    type: Types.NOTIFICATION_REQUEST, 
    payload:{payload} 
  });