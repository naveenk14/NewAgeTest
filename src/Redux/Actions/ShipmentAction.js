import * as Types from '../ActionTypes'
export const shipmentCountRequest = ({filter}) => ({
    type: Types.SHIPMENT_COUNT_REQUEST,
    payload:{filter}
  });

  export const todoRequest = () => ({
    type: Types.TODO_REQUEST,
    payload:{}
  });
  