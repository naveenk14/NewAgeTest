import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { CancelBookingService } from '../../Services/CancelBookingService';

function* CancelBookingSaga({ payload }) {
  try {
    console.log('payload',payload)
    const CancelBookingResponse = yield call(CancelBookingService, payload);
    const response = CancelBookingResponse.data;
    console.log('Saga received response:', response);
    console.log(response)
    yield put({
      type: Types.CANCEL_BOOKING_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.CANCEL_BOOKING_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* WatchCancelBooking() {

  yield takeLatest(Types.CANCEL_BOOKING_REQUEST, CancelBookingSaga);
}
export default WatchCancelBooking ;