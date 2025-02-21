import {VIEW_BOOKING_FAILURE, VIEW_BOOKING_REQUEST, VIEW_BOOKING_SUCCESS} from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
  viewBookingData: {},
};
function TodoReducer(state = initialState, action) {
  switch (action.type) {
   
    case VIEW_BOOKING_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case VIEW_BOOKING_SUCCESS:
      console.log('TODO_SUCCESS payload:', action.payload);
      return {
        ...state,
        error: null,
        loading: false,
        viewBookingData: action.payload,
      };
    case VIEW_BOOKING_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default TodoReducer;