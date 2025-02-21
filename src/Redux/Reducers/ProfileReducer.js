import {PROFILE_REQUEST,PROFILE_SUCCESS,PROFILE_FAILURE} from '../ActionTypes'

const initialState = {
  error: null,
  loading: false,
  profileData: {},
};

function ProfileReducer(state = initialState, action) {
  switch (action.type) {
   
    case PROFILE_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case PROFILE_SUCCESS:
      console.log(' profileDatareducer:', action.payload);
      return {
        ...state,
        error: null,
        loading: false,
        profileData: action.payload,
      };
    case PROFILE_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    
    default:
      return state;
  }
}
export default ProfileReducer;