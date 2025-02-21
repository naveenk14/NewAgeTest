import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { ForgotPswdService } from '../../Services/ForgotPswdService';

function* ForgetPswdSaga({ payload }) {
  try {
    console.log('findpayload',payload)
    const findRateResponse = yield call(ForgotPswdService, payload);
    const response = findRateResponse.data;
    console.log('Saga received response:', response);
    yield put({
      type: Types.FORGETPSWD_SUCCESS,
      payload: response
    })
  } catch (error) {
    yield put({ type: Types.FORGETPSWD_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchForgetPswd() {
  yield takeLatest(Types.FORGETPSWD_REQUEST, ForgetPswdSaga);
}
export default watchForgetPswd;