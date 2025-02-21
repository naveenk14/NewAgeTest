import {NOTIFICATION_REQUEST, NOTIFICATION_SUCCESS, NOTIFICATION_FAILURE} from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
  uploadData:[],
};
function NotificationReducer(state = initialState, action) {
  switch (action.type) {
   
    case NOTIFICATION_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case NOTIFICATION_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        uploadData: action.payload
      };
    case NOTIFICATION_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default NotificationReducer;