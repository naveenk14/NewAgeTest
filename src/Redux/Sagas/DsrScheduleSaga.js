import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { DsrScheduleService } from '../../Services/DsrScheduleService';

function* DsrScheduleSaga({payload}) {
  try {
    console.log("dsr",payload)
    const DsrScheduleResponse = yield call(DsrScheduleService,payload);
    const response = DsrScheduleResponse.data;
    console.log('Saga received response:', response);
    console.log(response)
    yield put({
      type: Types.DSR_SCHEDULE_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.DSR_SCHEDULE_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchDsrSchedule() {
  yield takeLatest(Types.DSR_SCHEDULE_REQUEST, DsrScheduleSaga);
}
export default watchDsrSchedule;