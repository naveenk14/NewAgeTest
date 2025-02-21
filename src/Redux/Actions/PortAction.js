//PortAction

import * as Types from '../ActionTypes'
export const portRequest = ({name, limits}) => ({
    type: Types.PORT_REQUEST,
    payload:{name, limits}
  });