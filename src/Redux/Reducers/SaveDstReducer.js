import {SAVE_DSR_REQUEST, SAVE_DSR_SUCCESS, SAVE_DSR_FAILURE} from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
  c: {},
};
function saveDsrReducer(state = initialState, action) {
  switch (action.type) {
   
    case SAVE_DSR_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case SAVE_DSR_SUCCESS:
    //   console.log('SAVE_DSR_SUCCESS payload:', action.payload);
      return {
        ...state,
        error: null,
        loading: false,
        savedsr: action.payload,
      };
    case SAVE_DSR_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default saveDsrReducer;