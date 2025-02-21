import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../ActionTypes";
const initialState = {
  error: null,
  loading: false,
  loginData1: {},
};
function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case LOGIN_SUCCESS:
      console.log("LOGIN_SUCCESS payload:", action.payload);
      return {
        ...state,
        error: null,
        loading: false,
        loginData1: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
export default loginReducer;