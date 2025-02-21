import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { FindNewRateService } from '../../Services/FindNewRateService';

function* FindNewRateSaga({ payload }) {
  try {
    console.log('findpayload',payload)
    const findRateResponse = yield call(FindNewRateService, payload);
    const response = findRateResponse.data;
    console.log('Saga received response:', response);
    yield put({
      type: Types.FIND_NEW_RATE_SUCCESS,
      payload: response
    })
  } catch (error) {
    yield put({ type: Types.FIND_NEW_RATE_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchFindNewRate() {
  yield takeLatest(Types.FIND_NEW_RATE_REQUEST, FindNewRateSaga);
}
export default watchFindNewRate;
