import {
    INVOICE_CASH_REQUEST,
    INVOICE_CASH_SUCCESS,
    INVOICE_CASH_FAILURE,
  } from "../ActionTypes";
  const initialState = {
    error: null,
    loading: false,
    InvoiceCash: {},
  };
  function InvoiceCashReducer(state = initialState, action) {
    switch (action.type) {
      case INVOICE_CASH_REQUEST:
        return {
          ...state,
          error: null,
          loading: true,
        };
      case INVOICE_CASH_SUCCESS:
        return {
          ...state,
          error: null,
          loading: false,
          InvoiceCash: action.payload,
        };
      case INVOICE_CASH_FAILURE:
        return {
          ...state,
          error: action.error,
          loading: false,
        };
  
      default:
        return state;
    }
  }
  export default InvoiceCashReducer;
  