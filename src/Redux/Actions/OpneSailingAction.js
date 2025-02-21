import * as Types from '../ActionTypes'
export const opensailingRequest = ({originName,destinationName}) => ({
    type: Types.OPENSAILING_REQUEST,
    payload:{originName,destinationName}
  });