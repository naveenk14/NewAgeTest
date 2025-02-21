import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import InboxCountService from "../../Services/InboxCountService"

function* InboxCountSaga({ payload }) {
  try {
    console.log('payload',payload)
    const InboxResponse = yield call(InboxCountService, payload);
    const response = InboxResponse.data;
    console.log('Saga received response:', response);
    console.log(response)
    yield put({
      type: Types.INBOX_COUNT_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.INBOX_COUNT_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchInboxCount() {
  yield takeLatest(Types.INBOX_COUNT_REQUEST, InboxCountSaga);
}
export default watchInboxCount;
