import { call, put, takeLatest } from "redux-saga/effects";
import * as Types from "../ActionTypes";
import { QuotationService } from "../../Services/QuotationService";

function* QuotationSaga({ payload }) {
  try {
    console.log("quotaion payload", payload);
    const BookingResponse = yield call(QuotationService, payload);
    const response = BookingResponse.data;
    console.log("quotation",response);
    yield put({
      type: Types.QUOTATION_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: Types.QUOTATION_FAILURE,
      error: alert.error(error.response.data.error.message),
    });
  }
}

function* watchQuotation() {
  yield takeLatest(Types.QUOTATION_REQUEST, QuotationSaga);
}
export default watchQuotation;
