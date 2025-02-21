import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { SailingService } from '../../Services/SailingService';

function* SailingSaga({ payload }) {
  try {
    console.log('payload',payload)
    const sailingResponse = yield call(SailingService, payload);
    const response = sailingResponse.data;
    console.log('Saga received response:', response);
    console.log(response)
    yield put({
      type: Types.SAILING_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.SAILING_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchSailing() {

  yield takeLatest(Types.SAILING_REQUEST, SailingSaga);
}
export default watchSailing;
