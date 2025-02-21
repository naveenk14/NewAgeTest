import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import InvoiceCashService from '../../Services/InvoiceCashService';

function* InvoiceCashSaga({ payload }) {
  try {
    console.log('payload',payload)
    const InvoiceCashResponse = yield call(InvoiceCashService, payload);
    const response = InvoiceCashResponse.data;
    console.log('Saga received response:', response);
    yield put({
      type: Types.INVOICE_CASH_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.INVOICE_CASH_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchInvoiceCash() {
  yield takeLatest(Types.INVOICE_CASH_REQUEST, InvoiceCashSaga);
}
export default watchInvoiceCash;
