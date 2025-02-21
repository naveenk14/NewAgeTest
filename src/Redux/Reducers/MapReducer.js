import { MAP_REQUEST, MAP_SUCCESS, MAP_FAILURE} from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
  MapData: {},
};
function MapReducer(state = initialState, action) {
  switch (action.type) {
   
    case MAP_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case MAP_SUCCESS:
      console.log('MAP_SUCCESS payload:', action.payload);
      return {
        ...state,
        error: null,
        loading: false,
        MapData: action.payload,
      };
    case MAP_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default MapReducer;