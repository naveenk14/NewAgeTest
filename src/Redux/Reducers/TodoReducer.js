import {TODO_REQUEST, TODO_SUCCESS, TODO_FAILURE} from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
  todos: {},
};
function TodoReducer(state = initialState, action) {
  switch (action.type) {
   
    case TODO_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case TODO_SUCCESS:
      console.log('TODO_SUCCESS payload:', action.payload);
      return {
        ...state,
        error: null,
        loading: false,
        todos: action.payload,
      };
    case TODO_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default TodoReducer;