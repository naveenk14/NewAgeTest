import * as Types from '../ActionTypes'
export const shipmentHistoryRequest = ({filter}) => ({
    type: Types.SHIPMENT_COUNT_REQUEST,
    payload:{filter}
  });


  