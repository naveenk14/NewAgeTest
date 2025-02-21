import * as Types from "../ActionTypes";

 export const QuotationRequest =({payload})=>({
    type : Types.QUOTATION_REQUEST,
    payload : payload
 })