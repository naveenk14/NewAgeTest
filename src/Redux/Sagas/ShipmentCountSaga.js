import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { ShipmentCountService } from '../../Services/ShipmentCountService';

function* ShipmentCountSaga({ payload }) {
  try {
    console.log('payload',payload)
    const shipmentResponse = yield call(ShipmentCountService, payload);
    const response = shipmentResponse.data;
    console.log('Saga received response:', response);
    console.log(response)
    yield put({
      type: Types.SHIPMENT_COUNT_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.SHIPMENT_COUNT_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchShipmentCount() {

  yield takeLatest(Types.SHIPMENT_COUNT_REQUEST, ShipmentCountSaga);
}
export default watchShipmentCount;
