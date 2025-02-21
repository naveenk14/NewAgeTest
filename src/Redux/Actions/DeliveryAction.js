import * as Types from "../ActionTypes";
export const DeliveryRequest = ({ delivery_place, country }) => ({
  type: Types.DELIVERY_REQUEST,
  payload: { delivery_place, country },
});
