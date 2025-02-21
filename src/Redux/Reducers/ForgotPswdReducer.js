import {FORGETPSWD_REQUEST, FORGETPSWD_SUCCESS, FORGETPSWD_FAILURE} from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
  ForgotPswd: {},
};
function ForgotPswdReducer(state = initialState, action) {
  switch (action.type) {
   
    case FORGETPSWD_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case FORGETPSWD_SUCCESS:
      
      return {
        ...state,
        error: null,
        loading: false,
        ForgotPswd: action.payload,
      };
    case FORGETPSWD_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default ForgotPswdReducer;