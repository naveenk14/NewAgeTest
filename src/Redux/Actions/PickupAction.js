import * as Types from "../ActionTypes";
export const PickupRequest = ({pickup_place, country}) => ({
  type: Types.PICKUP_REQUEST,
  payload: {pickup_place, country},
});
