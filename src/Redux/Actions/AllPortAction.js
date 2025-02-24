import * as Types from '../ActionTypes'
export const allportRequest = ({name, limits}) => ({
    type: Types.ALL_PORT_REQUEST,
    payload:{name, limits}
  });