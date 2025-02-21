import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { LoginService } from '../../Services/LoginService';

function* LoginSaga({ payload }) {
  try {
    console.log('payload',payload)
    const InboxResponse = yield call(LoginService, payload);
    const response = InboxResponse.data;
    console.log('Saga received response:', response);

    yield put({
      type: Types.LOGIN_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.LOGIN_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchLogin() {
  yield takeLatest(Types.LOGIN_REQUEST, LoginSaga);
}
export default watchLogin;
