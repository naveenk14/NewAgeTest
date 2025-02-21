import * as Types from '../ActionTypes'
export const FindNewRateRequest = ({inputdata}) => ({
    type: Types.FIND_NEW_RATE_REQUEST,
    payload:inputdata
  });