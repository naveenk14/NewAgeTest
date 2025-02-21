import {QUOTATION_REQUEST, QUOTATION_SUCCESS, QUOTATION_FAILURE} from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
  Quotation: {},
};
function QuotationReducer(state = initialState, action) {
  switch (action.type) {
   
    case QUOTATION_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case QUOTATION_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        Quotation: action.payload,
      };
    case QUOTATION_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default QuotationReducer;