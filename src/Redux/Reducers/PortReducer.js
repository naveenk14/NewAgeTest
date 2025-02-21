import {PORT_REQUEST, PORT_SUCCESS, PORT_FAILURE} from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
  portData: {},
};
function portReducer(state = initialState, action) {
  switch (action.type) {
   
    case PORT_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case PORT_SUCCESS:
      console.log('PORT_SUCCESS payload:', action.payload);
      return {
        ...state,
        error: null,
        loading: false,
        portData: action.payload,
      };
    case PORT_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default portReducer;