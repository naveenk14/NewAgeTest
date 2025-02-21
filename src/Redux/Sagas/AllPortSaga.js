import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { AllPortService } from '../../Services/AllPortService';
function* AllPortSaga({ payload }) {
  try {
    console.log('payload',payload)
    const allportResponse = yield call(AllPortService, payload);
    const response = allportResponse.data;
    console.log('Saga received response:', response);
    console.log(response)
    yield put({
      type: Types.ALL_PORT_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.ALL_PORT_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchallPort() {

  yield takeLatest(Types.ALL_PORT_REQUEST, AllPortSaga);
}
export default watchallPort;