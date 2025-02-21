import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import {ViewBookingService} from "../../Services/ViewBookingService"

function* ViewBookingSaga({ payload }) {
  try {
    console.log('payload',payload)
    const BookingResponse = yield call(ViewBookingService, payload);
    const response = BookingResponse.data;
    console.log('Saga received response:', response);
    console.log(response)
    yield put({
      type: Types.VIEW_BOOKING_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.VIEW_BOOKING_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchViewBooking() {
  yield takeLatest(Types.VIEW_BOOKING_REQUEST, ViewBookingSaga);
}
export default watchViewBooking;
