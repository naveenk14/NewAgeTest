import {FIND_NEW_RATE_REQUEST, FIND_NEW_RATE_SUCCESS, FIND_NEW_RATE_FAILURE} from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
  findRate: {},
};
function FindNewRateReducer(state = initialState, action) {
  switch (action.type) {
   
    case FIND_NEW_RATE_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case FIND_NEW_RATE_SUCCESS:
      
      return {
        ...state,
        error: null,
        loading: false,
        findRate: action.payload,
      };
    case FIND_NEW_RATE_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default FindNewRateReducer;