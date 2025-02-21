import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { PickupService } from '../../Services/PickupSerice';

function* PickupSaga({ payload }) {
  try {
    console.log('payload',payload)
    const pickupReq = yield call(PickupService, payload);
    const response = pickupReq.data;

    yield put({
      type: Types.PICKUP_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.PICKUP_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchPickup() {

  yield takeLatest(Types.PICKUP_REQUEST, PickupSaga);
}
export default watchPickup;
