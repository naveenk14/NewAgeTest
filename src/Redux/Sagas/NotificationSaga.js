import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { UploadDocumentService } from '../../Services/UploadDocumentService';

function* NotificationSaga({ payload }) {
  try {
    console.log('payload',payload)
    const BookingResponse = yield call(UploadDocumentService, payload);
    const response = BookingResponse.data;
    console.log('Saga received response:', response);
    console.log(response)
    yield put({
      type: Types.NOTIFICATION_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.NOTIFICATION_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}

function* WatchNotification() {
  yield takeLatest(Types.NOTIFICATION_REQUEST, NotificationSaga);
}
export default WatchNotification;