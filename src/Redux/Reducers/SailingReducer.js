import { SAILING_REQUEST, SAILING_SUCCESS, SAILING_FAILURE} from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
  sailingData: {},
};
function sailingReducer(state = initialState, action) {
  switch (action.type) {
   
    case SAILING_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case SAILING_SUCCESS:
      console.log('SAILING_SUCCESS payload:', action.payload);
      return {
        ...state,
        error: null,
        loading: false,
        sailingData: action.payload,
      };
    case SAILING_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default sailingReducer;