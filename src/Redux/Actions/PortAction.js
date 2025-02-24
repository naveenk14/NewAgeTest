//PortAction

import * as Types from '../ActionTypes'
export const portRequest = ({name, limits, transportMode}) => ({
    type: Types.PORT_REQUEST,
    payload:{name, limits,transportMode}
  });