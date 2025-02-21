import {SHIPMENT_COUNT_REQUEST, SHIPMENT_COUNT_SUCCESS, SHIPMENT_COUNT_FAILURE} from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
  shipmentCount: {},
};
function shipmentCountReducer(state = initialState, action) {
  switch (action.type) {
   
    case SHIPMENT_COUNT_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case SHIPMENT_COUNT_SUCCESS:
      console.log('SHIPMENT_SUCCESS payload:', action.payload);
      return {
        ...state,
        error: null,
        loading: false,
        shipmentCount: action.payload,
      };
    case SHIPMENT_COUNT_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default shipmentCountReducer;