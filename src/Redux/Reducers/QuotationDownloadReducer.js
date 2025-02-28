import { QUOTATION_DOWNLOAD_REQUEST, QUOTATION_DOWNLOAD_SUCCESS, QUOTATION_DOWNLOAD_FAILURE} from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
  Quotation: {},
};
function QuotationDownloadReducer(state = initialState, action) {
  switch (action.type) {
   
    case QUOTATION_DOWNLOAD_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case QUOTATION_DOWNLOAD_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        Quotation: action.payload,
      };
    case QUOTATION_DOWNLOAD_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default QuotationDownloadReducer;