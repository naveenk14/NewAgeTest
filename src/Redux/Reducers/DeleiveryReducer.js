import {DELIVERY_REQUEST, DELIVERY_SUCCESS, DELIVERY_FAILURE} from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
  Delivery: [],
};
function DeliveryReducer(state = initialState, action) {
  switch (action.type) {
   
    case DELIVERY_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case DELIVERY_SUCCESS:
     
      return {
        ...state,
        error: null,
        loading: false,
        Delivery: action.payload,
      };
    case DELIVERY_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default DeliveryReducer;