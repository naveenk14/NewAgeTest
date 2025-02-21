import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { ProfileService } from '../../Services/ProfileService';

function* ProfileSaga() {
  try {
    const BookingResponse = yield call(ProfileService);
    const response = BookingResponse.data;
    console.log('Saga received response:', response);
    console.log(response)
    yield put({
      type: Types.PROFILE_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.PROFILE_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchProfile() {
  yield takeLatest(Types.PROFILE_REQUEST, ProfileSaga);
}
export default watchProfile;