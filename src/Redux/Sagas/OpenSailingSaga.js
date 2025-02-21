import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { OpenSailingService } from '../../Services/openSailingService';

function* OpenSailingSaga({ payload }) {
  try {
    console.log('payload',payload)
    const openSailingesponse = yield call(OpenSailingService, payload);
    const response = openSailingesponse.data;
    console.log('Saga received response:', response);
    yield put({
      type: Types.OPENSAILING_SUCCESS,
      payload: response
    })
  } catch (error) {
    yield put({ type: Types.OPENSAILING_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchOpenSailing() {
  yield takeLatest(Types.OPENSAILING_REQUEST, OpenSailingSaga);
}
export default watchOpenSailing;
