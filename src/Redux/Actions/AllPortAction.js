import * as Types from '../ActionTypes'
export const allportRequest = ({search_key, limits}) => ({
    type: Types.ALL_PORT_REQUEST,
    payload:{search_key, limits}
  });