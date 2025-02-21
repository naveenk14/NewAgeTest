import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { DsrDownloadService } from '../../Services/DsrDowloadService';

function* DsrDownloadSaga({payload}) {
  try {
    console.log("dsr",payload)
    const DsrDownloadResponse = yield call(DsrDownloadService,payload);
    const response = DsrDownloadResponse.data;
    console.log('Saga received response:', response);
    console.log(response)
    yield put({
      type: Types.DSR_DOWNLOAD_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.DSR_DOWNLOAD_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchDsrDownload() {
  yield takeLatest(Types.DSR_DOWNLOAD_REQUEST, DsrDownloadSaga);
}
export default watchDsrDownload;