import { CONTAINER_PACK_FAILURE, CONTAINER_PACK_REQUEST, CONTAINER_PACK_SUCCESS } from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
  cpack: {},
};
function ContainerPackReducer(state = initialState, action) {
  switch (action.type) {
   
    case CONTAINER_PACK_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case CONTAINER_PACK_SUCCESS:
      console.log('CONTAINER_PACK_SUCCESS payload:', action.payload);
      return {
        ...state,
        error: null,
        loading: false,
        cpack: action.payload,
      };
    case CONTAINER_PACK_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default ContainerPackReducer;