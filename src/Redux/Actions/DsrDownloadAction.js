import * as Types from '../ActionTypes'
export const DsrDownloadRequest = ({payloadofdsrdownload}) => (
  {
    type: Types.DSR_DOWNLOAD_REQUEST,
    payload:payloadofdsrdownload
  }
);