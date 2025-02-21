import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { PortService } from '../../Services/PortService';
function* PortSaga({ payload }) {
  try {
    console.log('payload',payload)
    const portResponse = yield call(PortService, payload);
    const response = portResponse.data;

    yield put({
      type: Types.PORT_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.PORT_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchPort() {

  yield takeLatest(Types.PORT_REQUEST, PortSaga);
}
export default watchPort;
