import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { SaveDsrService } from '../../Services/SaveDsrService';
import { toast } from 'react-toastify';

function* SaveDsrSaga({ payload }) {
  try {
   
    const BookingResponse = yield call(SaveDsrService, payload);
    const response = BookingResponse.data;
  
    yield put({
      type: Types.SAVE_DSR_SUCCESS,
      payload: response})
      toast.success("DSR Saved Successfully");
  } catch (error) {
    yield put({ type: Types.SAVE_DSR_FAILURE, error: alert.error(error.response.data.error.message) })
    toast.error("DSR Not Saved");
  };
}


function* watchSaveDsr() {

  yield takeLatest(Types.SAVE_DSR_REQUEST, SaveDsrSaga);
}
export default watchSaveDsr;
