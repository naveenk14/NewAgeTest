import {
  INBOX_COUNT_REQUEST,
  INBOX_COUNT_SUCCESS,
  INBOX_COUNT_FAILURE,
} from "../ActionTypes";
const initialState = {
  error: null,
  loading: false,
  inboxCount: {},
};
function inboxCountReducer(state = initialState, action) {
  switch (action.type) {
    case INBOX_COUNT_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case INBOX_COUNT_SUCCESS:
      console.log("INBOX_SUCCESS payload:", action.payload);
      return {
        ...state,
        error: null,
        loading: false,
        inboxCount: action.payload,
      };
    case INBOX_COUNT_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
}
export default inboxCountReducer;
