import {BOOKING_REQUEST, BOOKING_SUCCESS, BOOKING_FAILURE} from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
  booking: {},
};
function bookingReducer(state = initialState, action) {
  switch (action.type) {
   
    case BOOKING_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case BOOKING_SUCCESS:
      console.log('BOOKING_SUCCESS payload:', action.payload);
      return {
        ...state,
        error: null,
        loading: false,
        booking: action.payload,
      };
    case BOOKING_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default bookingReducer;