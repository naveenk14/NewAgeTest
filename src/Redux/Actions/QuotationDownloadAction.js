import * as Types from "../ActionTypes";

 export const QuotationDownloadRequest =({payload})=>({
    type : Types.QUOTATION_DOWNLOAD_REQUEST,
    payload : payload
 })