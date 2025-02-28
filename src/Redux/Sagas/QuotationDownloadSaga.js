import { call, put, takeLatest } from "redux-saga/effects";
import * as Types from "../ActionTypes";
import { QuotationDownloadService } from "../../Services/QuotationDownloadService";

function* QuotationDownloadSaga({ payload }) {
  try {
    console.log("quotaion Download payload", payload);
    const QuotationDownloadResponse = yield call(QuotationDownloadService, payload);

    // Extract filename from Content-Disposition header
    let filename = "document.pdf"; // Default filename
    const contentDisposition = QuotationDownloadResponse.headers["content-disposition"];
    if (contentDisposition) {
      const match = contentDisposition.match(/filename="(.+?)"/);
      if (match && match.length > 1) {
        filename = match[1]; // Extracted filename
      }
    }

    const blob = new Blob([QuotationDownloadResponse.data], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);
    console.log(blob)

    // Create a download link
    const link = document.createElement("a");
    link.href = url;
    link.download = filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // const response = QuotationDownloadResponse.data;
    console.log("quotation",blob);
    yield put({
      type: Types.QUOTATION_DOWNLOAD_SUCCESS,
      payload: blob,
    });
  } catch (error) {
    yield put({
      type: Types.QUOTATION_DOWNLOAD_FAILURE,
      error: alert.error(error.response.data.error.message),
    });
  }
}

function* watchQuotationDownload() {
  yield takeLatest(Types.QUOTATION_DOWNLOAD_REQUEST, QuotationDownloadSaga);
}
export default watchQuotationDownload;
