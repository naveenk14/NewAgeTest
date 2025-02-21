import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { ContainerPackService } from '../../Services/ContainerPackService';

function* ContainerPackSaga() {
  try {
    const BookingResponse = yield call(ContainerPackService);
    const response = BookingResponse.data;
    console.log('Saga received response:', response);
    console.log(response)
    yield put({
      type: Types.CONTAINER_PACK_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.CONTAINER_PACK_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchCPack() {
  yield takeLatest(Types.CONTAINER_PACK_REQUEST, ContainerPackSaga);
}
export default watchCPack