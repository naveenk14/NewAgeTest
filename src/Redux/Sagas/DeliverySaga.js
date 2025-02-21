import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { DeliveryService } from '../../Services/DeliveryService';

function* DeliverySaga({ payload }) {
  try {
    console.log('payload',payload)
    const deliveryReq = yield call(DeliveryService, payload);
    const response = deliveryReq.data;

    yield put({
      type: Types.DELIVERY_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.DELIVERY_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchDelivery() {

  yield takeLatest(Types.DELIVERY_REQUEST, DeliverySaga);
}
export default watchDelivery;
