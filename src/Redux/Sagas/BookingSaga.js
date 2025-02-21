import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { BookingService } from '../../Services/BookingService';

function* BookingSaga({ payload }) {
  try {
    console.log('payload',payload)
    const BookingResponse = yield call(BookingService, payload);
    const response = BookingResponse.data;
    console.log(response)
    console.log('Saga received response:', response);
    console.log(response)
    yield put({
      type: Types.BOOKING_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.BOOKING_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchBooking() {

  yield takeLatest(Types.BOOKING_REQUEST, BookingSaga);
}
export default watchBooking;
