import { CANCEL_BOOKING_REQUEST, CANCEL_BOOKING_SUCCESS, CANCEL_BOOKING_FAILURE} from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
  sailingData: {},
};
function CancelBookingReducer (state = initialState, action) {
  switch (action.type) {
   
    case CANCEL_BOOKING_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case CANCEL_BOOKING_SUCCESS:
      console.log('SAILING_SUCCESS payload:', action.payload);
      return {
        ...state,
        error: null,
        loading: false,
        sailingData: action.payload,
      };
    case CANCEL_BOOKING_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default CancelBookingReducer ;