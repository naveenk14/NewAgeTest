import { DSR_DOWNLOAD_FAILURE, DSR_DOWNLOAD_SUCCESS, DSR_DOWNLOAD_REQUEST} from '../ActionTypes'

const initialState = {
  error: null,
  loading: false,
  DsrDownloadData: {},
};

function DsrDownloadReducer(state = initialState, action) {
  switch (action.type) {
   
    case DSR_DOWNLOAD_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case DSR_DOWNLOAD_SUCCESS:
      console.log(' DsrDownloadPayload:', action.payload);
      return {
        ...state,
        error: null,
        loading: false,
        DsrDownloadData: action.payload,
      };
    case DSR_DOWNLOAD_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default DsrDownloadReducer;