import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { UpdatePasswordService } from '../../Services/UpdatePasswordService';

function* updatePasswordSaga(payload) {
  try {
    console.log('payload',payload)
    const BookingResponse = yield call(UpdatePasswordService, payload);
    const response = BookingResponse.data;
    console.log('Saga received response:', response);
    console.log(response)
    yield put({
      type: Types.UPDATE_PASSWORD_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.UPDATE_PASSWORD_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchUpdatePassword() {
  yield takeLatest(Types.UPDATE_PASSWORD_REQUEST, updatePasswordSaga);
}
export default watchUpdatePassword;