import { LOG_REQUEST, LOG_SUCCESS, LOG_FAILURE } from "../ActionTypes";
const initialState = {
  error: null,
  load: false,
  loginData2: {},
};
function logReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_REQUEST:
      return {
        ...state,
        error: null,
        load: true,
      };
    case LOG_SUCCESS:
      console.log("LOG_SUCCESS payload:", action.payload);
      return {
        ...state,
        error: null,
        load: false,
        loginData2: action.payload,
      };
    case LOG_FAILURE:
      return {
        ...state,
        error: action.error,
        load: false,
      };

    default:
      return state;
  }
}
export default logReducer;