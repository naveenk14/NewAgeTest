import { combineReducers } from 'redux';
import shipmentCountReducer from './ShipmentCountReducer';
import inboxCountReducer from './InboxCountReducer';
import sailingReducer from './SailingReducer';
import TodoReducer from './TodoReducer';
import bookingReducer from './BookingReducer';
import portReducer from './PortReducer';
import loginReducer from './LoginReducer';
import openSailingReducer from './OpenSailingReducer';
import MapReducer from './MapReducer';
import ViewBookingReducer from "./ViewBookingReducer"
import UploadDocumentReducer from './UploadDocumentReducer';
import CancelBookingReducer from './CancelBookingReducer';
import QuotationReducer from './QuotationReducer';
import ProfileReducer from './ProfileReducer';
import UpdatePasswordReducer from './UpdatePasswordReducer';
import DsrReportReducer from './DsrReportReducer';
import saveDsrReducer from './SaveDstReducer';
import DsrDownloadReducer from './DsrDownloadReducer';
import DsrScheduleReducer from './DsrScheduleReducer';
import allportReducer from './AllPortReducer';
import FindNewRateReducer from './FindNewRateReducer';
import NotificationReducer from './NotificationReducer';
import PickupReducer from './PickupReducer';
import DeliveryReducer from './DeleiveryReducer';
import ContainerPackReducer from './ContainerPackReducer';
import InvoiceCashReducer from './InvoiceCashReducer';
import logReducer from './LogReducer';
import ForgotPswdReducer from './ForgotPswdReducer';
import QuotationDownloadReducer from './QuotationDownloadReducer';

const rootReducer = combineReducers({
    ShipmentCount: shipmentCountReducer,
    InboxCount: inboxCountReducer,
    Sailing : sailingReducer,
    Todo:TodoReducer,
    Booking: bookingReducer,
    Port: portReducer,
    Login: loginReducer,
    OpenSailing: openSailingReducer,
    Map: MapReducer,
    ViewBooking: ViewBookingReducer,
    UploadDocument:UploadDocumentReducer,
    CancelBooking: CancelBookingReducer,
    QuotationList: QuotationReducer,
    QuotationDownload: QuotationDownloadReducer,
    ProfileData: ProfileReducer,
    UpdatePassword: UpdatePasswordReducer,
    DsrReport: DsrReportReducer,
    SaveDsr: saveDsrReducer,
    DsrDownload: DsrDownloadReducer,
    DsrSchedule: DsrScheduleReducer,
    allPort: allportReducer,
    findRate:FindNewRateReducer,
    DsrDownload:DsrDownloadReducer,
    DsrSchedule:DsrScheduleReducer,
    Notification:NotificationReducer,
    Pickup:PickupReducer,
    Delivery:DeliveryReducer,
    ContainerPack: ContainerPackReducer,
    InvoiceC:InvoiceCashReducer,
    log:logReducer,
    forgot : ForgotPswdReducer,
});

export default rootReducer;