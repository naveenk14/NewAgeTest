import * as Types from "../ActionTypes";
export const InvoiceCashAction = ({payload}) => ({
  type: Types.INVOICE_CASH_REQUEST,
  payload: payload,
});
