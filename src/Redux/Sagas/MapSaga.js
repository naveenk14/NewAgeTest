import { call, put, takeLatest } from 'redux-saga/effects';
import * as Types from "../ActionTypes";
import { MapService  } from '../../Services/MapService';

function* MapSaga() {
  try {
    console.log('hello mapsaga')
    const MapResponse = yield call(MapService);
    const response = MapResponse.data;
    console.log('map Saga received response:', response);
    
    yield put({
      type: Types.MAP_SUCCESS,
      payload: response
    })
  } catch (error) {
    yield put({ type: Types.MAP_FAILURE, error: alert.error(error.response.data.error.message) })
  };
}


function* watchMap() {
  yield takeLatest(Types.MAP_REQUEST, MapSaga);
}
export default watchMap;
