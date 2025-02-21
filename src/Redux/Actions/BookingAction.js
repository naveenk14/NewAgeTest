//BookingAction

import * as Types from '../ActionTypes'
export const bookingRequest = ({payload}) => ({
    type: Types.BOOKING_REQUEST,
    payload:{payload}
  });