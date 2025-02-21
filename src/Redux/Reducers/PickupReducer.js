import {PICKUP_REQUEST, PICKUP_SUCCESS, PICKUP_FAILURE} from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
  pickuppointlist: [],
};
function PickupReducer(state = initialState, action) {
  switch (action.type) {
   
    case PICKUP_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case PICKUP_SUCCESS:
     
      return {
        ...state,
        error: null,
        loading: false,
        pickuppointlist: action.payload,
      };
    case PICKUP_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default PickupReducer;