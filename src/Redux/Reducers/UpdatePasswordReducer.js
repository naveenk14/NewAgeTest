import {UPDATE_PASSWORD_FAILURE, UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS } from '../ActionTypes'
const initialState = {
  error: null,
  loading: false,
  uploadData:{},
};

function UpdatePasswordReducer(state = initialState, action) {
  switch (action.type) {
   
    case UPDATE_PASSWORD_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        uploadData: action.payload
      };
    case UPDATE_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default UpdatePasswordReducer;