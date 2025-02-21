import {ALL_PORT_REQUEST, ALL_PORT_SUCCESS, ALL_PORT_FAILURE} from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
  allportData: {},
};
function allportReducer(state = initialState, action) {
  switch (action.type) {
   
    case ALL_PORT_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case ALL_PORT_SUCCESS:
      console.log('ALL_PORT_SUCCESS payload:', action.payload);
      return {
        ...state,
        error: null,
        loading: false,
        allportData: action.payload,
      };
    case ALL_PORT_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default allportReducer;