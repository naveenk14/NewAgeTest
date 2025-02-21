import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { DsrReportService } from '../../Services/DsrReportService';

function* DsrSaga({payload}) {
  try {
    console.log("dsr",payload)
    const DsrReportResponse = yield call(DsrReportService,payload);
    const response = DsrReportResponse.data;
    console.log('Saga received response:', response);
    console.log(response)
    yield put({
      type: Types.DSR_REPORT_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.DSR_REPORT_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchDsr() {
  yield takeLatest(Types.DSR_REPORT_REQUEST, DsrSaga);
}
export default watchDsr;