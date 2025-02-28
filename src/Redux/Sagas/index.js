import { all } from "redux-saga/effects";
import watchShipmentCount from "./ShipmentCountSaga";
import watchSailing from "./SailingSaga";
import watchTodo from "./TodoSaga";
import watchBooking from "./BookingSaga";
import watchInboxCount from "./InboxCountSaga";
import watchPort from "./PortSaga";
import watchLogin from "./LoginSaga";
import watchOpenSailing from "./OpenSailingSaga";
import watchMap from "./MapSaga";
import watchViewBooking from "./ViewBookingSaga";
import watchUploadDocument from "./UploadDocumentSaga";
import WatchCancelBooking from "./CancelBookingSaga";
import watchQuotation from "./QuotationSaga";
import watchProfile from "./ProfileSaga";
import watchUpdatePassword from "./UpdatePasswordSaga";
import watchDsr from "./DsrSaga";
import watchSaveDsr from "./SaveDsrSaga";
import watchDsrDownload from "./DsrDownloadSaga";
import watchDsrSchedule from "./DsrScheduleSaga";
import WatchNotification from "./NotificationSaga";
import watchallPort from "./AllPortSaga";
import watchFindNewRate from "./FindNewRateSaga";
import watchPickup from "./PickupSaga";
import watchDelivery from "./DeliverySaga";
import watchCPack from "./ContainerPackSaga";
import watchInvoiceCash from "./InvoiceCashSaga";
import watchLog from "./LogSaga";
import watchForgetPswd from "./ForgotPswdSaga";
import watchQuotationDownload from "./QuotationDownloadSaga";

export default function* rootSaga() {
  yield all([
    watchShipmentCount(),
    watchSailing(),
    watchTodo(),
    watchBooking(),
    watchInboxCount(),
    watchPort(),
    watchLogin(),
    watchOpenSailing(),
    watchMap(),
    watchViewBooking(),
    watchUploadDocument(),
    WatchCancelBooking(),
    watchQuotation(),
    watchProfile(),
    watchUpdatePassword(),
    watchDsr(),
    watchSaveDsr(),
    watchDsrDownload(),
    watchDsrSchedule(),
    WatchNotification(),
    watchallPort(),
    watchFindNewRate(),
    watchPickup(),
    watchDelivery(),
    watchCPack(),
    watchInvoiceCash(),
    watchLog(),
    watchForgetPswd(),
    watchQuotationDownload(),
  ]);
}
