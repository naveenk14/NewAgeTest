import {DSR_REPORT_REQUEST, DSR_REPORT_SUCCESS, DSR_REPORT_FAILURE} from '../ActionTypes'

const initialState = {
  error: null,
  loading: false,
  dsrData: {},
};

function DsrReportReducer(state = initialState, action) {
  switch (action.type) {
   
    case DSR_REPORT_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case DSR_REPORT_SUCCESS:
      console.log(' DsrProfilePayload:', action.payload);
      return {
        ...state,
        error: null,
        loading: false,
        dsrData: action.payload,
      };
    case DSR_REPORT_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default DsrReportReducer;