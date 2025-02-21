import { DSR_SCHEDULE_REQUEST, DSR_SCHEDULE_SUCCESS, DSR_SCHEDULE_FAILURE} from '../ActionTypes'

const initialState = {
  error: null,
  loading: false,
  dsrScheduleData: {},
};

function DsrScheduleReducer(state = initialState, action) {
  switch (action.type) {
   
    case DSR_SCHEDULE_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case DSR_SCHEDULE_SUCCESS:
      console.log(' DsrSchedulePayload:', action.payload);
      return {
        ...state,
        error: null,
        loading: false,
        dsrScheduleData: action.payload,
      };
    case DSR_SCHEDULE_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default DsrScheduleReducer;