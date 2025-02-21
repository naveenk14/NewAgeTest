import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { TodoService } from '../../Services/ShipmentCountService';

function* TodoSaga({ payload }) {
  try {
    console.log('payload',payload)
    const todoResponse = yield call(TodoService, payload);
    const response = todoResponse.data;
    console.log('Saga received response:', response);
    console.log(response)
    yield put({
      type: Types.TODO_SUCCESS,
      payload: response})
  } catch (error) {
    yield put({ type: Types.TODO_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchTodo() {

  yield takeLatest(Types.TODO_REQUEST, TodoSaga);
}
export default watchTodo;
