import * as Types from '../ActionTypes'
export const DsrScheduleRequest = ({payload}) => ({
    type: Types.DSR_SCHEDULE_REQUEST,
    payload:{payload}
  });