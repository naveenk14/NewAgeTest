import * as Types from '../ActionTypes'
export const ViewBookingAction = ({booking_id}) => ({
    type: Types.VIEW_BOOKING_REQUEST, 
    payload:{booking_id} 
  });