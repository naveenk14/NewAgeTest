import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { LogService } from '../../Services/LogService';

function* LogSaga({ payload }) {
  try {
    console.log('wewe',payload)
    const InboxResponse = yield call(LogService, payload);
    const response = InboxResponse.data;
    console.log('Saga received response:', response);
    console.log(response)
    yield put({
      type: Types.LOG_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.LOG_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchLog() {
  yield takeLatest(Types.LOG_REQUEST, LogSaga);
}
export default watchLog;