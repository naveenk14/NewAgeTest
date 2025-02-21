import {OPENSAILING_REQUEST, OPENSAILING_SUCCESS, OPENSAILING_FAILURE} from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
  openSailingData: {},
};
function openSailingReducer(state = initialState, action) {
  switch (action.type) {
   
    case OPENSAILING_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case OPENSAILING_SUCCESS:
      console.log('OPENSAILING_SUCCESS payload:', action.payload);
      return {
        ...state,
        error: null,
        loading: false,
        openSailing: action.payload,
      };
    case OPENSAILING_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default openSailingReducer;