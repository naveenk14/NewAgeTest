import React, { useEffect, useState } from "react";
import ShipmentHeader from "./ShipmentHeader";
import StepperColumn from "./Track/StepperColumn";
import { Breadcrumb, Button, Card, Dropdown } from "antd";
import "./ShipmentBase.css";
import PendingActionsBase from "./PendingActions/PendingActionsBase";
import ShipmentDocuments from "./Documents/ShipmentDocuments";
import QuoteDetails from "./QuoteDetails/QuoteDetails";
import VerticalTab from "./Track/TabBase";
import { MdKeyboardArrowRight } from "react-icons/md";
import ShipmentTable from "./ShipmentTable";
import { RightOutlined } from "@ant-design/icons";
import TabBase from "./Track/TabBase";
import { hover } from "@testing-library/user-event/dist/hover";
import { IoMdChatboxes } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ShipmentDetailsModal from "./Modal/ShipmentDetailsModal";
import { Box, Dialog, DialogContent, styled } from "@mui/material";
import { makeStyles } from "@emotion/styled";
import ShipmentSummary from "./BookingSummary/ShipmentSummary";
import ShipmentMapModal from "./ShipmentMapModal";
import { VscClose } from "react-icons/vsc";
import { Widgets } from "@mui/icons-material";
import { ViewBookingAction } from "../../../Redux/Actions/ViewBookingAction";
import shipgif from "../../../assets/shipnxtgif.gif";

const Dialogs = styled(Dialog)({
  "& .MuiDialog-paper": {
    overflowY: "unset",
    maxWidth: "1800px",
    width: "1400px",
    height: "90vh",
  },
});

const ShipmentBase = ({ open, close, rowData }) => {
  console.log("rowData", rowData);
  const booking_id = rowData?.id;
  // const rowDatas = rowData
  const bookingData = useSelector((state) => state.ViewBooking);
  const loading = bookingData?.loading;
  console.log(loading);
  console.log("bookingData", bookingData);
  const ViewBooking = bookingData?.viewBookingData?.customercode;
  const OriginMilestones = bookingData?.viewBookingData?.milestone_origin;
  const TransitMilestones = bookingData?.viewBookingData?.milestone_transit;
  const DestinationMilestones =
    bookingData?.viewBookingData?.milestone_destination;
  console.log("OriginMilestones", OriginMilestones);
  console.log(ViewBooking);

  const dispatch = useDispatch();
  useEffect(() => {
    {
      if (rowData !== null) {
        dispatch(ViewBookingAction({ booking_id }));
      }
    }
  }, [rowData]);

  const tabListNoTitle = [
    // {
    //   key: 'PendingActions',
    //   label: 'Pending Actions',
    // },
    {
      key: "Milestones",
      label: "Milestones",
    },
    {
      key: "ShipmentSummary",
      label: "Shipment Summary",
    },
    // {
    //   key: 'QuoteDetails',
    //   label: 'Quote Details',
    // },
    {
      key: "Documents",
      label: "Documents",
    },
  ];

  const steps = [
    {
      step: "Booking Created",
      body: "Booking done on 11/05/2023 at 02:20 PM",
    },
    {
      step: "Cargo Picked up",
      body: "Cargo will be Picked up  on 13/05/2023.",
    },
    {
      step: "Cargo Received",
      body: "Cargo will be ready for shipping on 15/05/2023",
    },
    {
      step: "Cargo Picked up",
      body: "Cargo will be Picked up  on 13/05/2023.",
    },
    {
      step: "Cargo Received",
      body: "Cargo will be ready for shipping on 15/05/2023",
    },
    {
      step: "Cargo Received",
      body: "Cargo will be ready for shipping on 15/05/2023",
    },
  ];

  const contentListNoTitle = {
    // PendingActions: <PendingActionsBase />,
    // PendingActions: <TabBase />,
    ShipmentSummary: <ShipmentSummary />,
    QuoteDetails: <QuoteDetails />,
    Documents: <ShipmentDocuments />,
    Milestones: (
      <>
        <p
          style={{
            fontWeight: "600",
            fontSize: "15px",
            lineHeight: "17px",
            letterSpacing: ".01em",
            margin: "15px 0px",
          }}
        >
          Origin Milestones
        </p>
        <StepperColumn step={OriginMilestones} />
        <p
          style={{
            fontWeight: "600",
            fontSize: "15px",
            lineHeight: "17px",
            letterSpacing: ".01em",
            margin: "15px 0px",
          }}
        >
          Transit Milestones
        </p>
        <StepperColumn step={TransitMilestones} />
        <p
          style={{
            fontWeight: "600",
            fontSize: "15px",
            lineHeight: "17px",
            letterSpacing: ".01em",
            margin: "15px 0px",
          }}
        >
          Destination Milestones
        </p>
        <StepperColumn step={DestinationMilestones} />
      </>
    ),
  };

  const items = [
    {
      key: "1",
      label: (
        <Button
          type="link"
          style={{ color: "black", textDecoration: "none" }}
          icon={<IoMdChatboxes size={20} />}
        >
          <span className="ms-2">Start Chat</span>
        </Button>
      ),
    },
    {
      key: "2",
      label: (
        <Button
          type="link"
          style={{ color: "black", textDecoration: "none" }}
          icon={<FaPhoneVolume size={5} />}
        >
          <span className="ms-2">Request Callback</span>
        </Button>
      ),
    },
    {
      key: "3",
      label: (
        <Button
          type="link"
          style={{ color: "black", textDecoration: "none" }}
          icon={<IoMail size={20} />}
        >
          <span className="ms-2">Email Us</span>
        </Button>
      ),
    },
  ];

  const [vesselmodalopen, setVesselmodalopen] = useState(false);

  return (
    // <div className="shipment_details_section container-fluid p-0" style={{marginTop:"4.7rem",backgroundColor: "#F3F5F7"}} >
    //     <div className="black_box container-fluid"></div>
    //     <div className="shipment_container">
    //         <div className="row shipment_ID_row" style={{marginTop:"20px",marginBottom:"20px"}}>
    //             <div className="shipment_ID" style={{marginBottom:"4px"}}>
    //                 <p className='m-0 text-white'>Shipment ID :&nbsp;
    //                 {
    //                   ViewBooking?.map((item)=>{
    //                     return <span>{item.booking_id}</span>
    //                   }
    //                   )
    //                 }
    //                 </p>
    //             </div>
    //             <div className="breadCrumb d-flex justify-content-between align-items-center">
    //               <Breadcrumb
    //                   separator={<RightOutlined style={{ fontSize: '11px', color: '#ACB8C4' }} />}
    //                   items={[
    //                     {
    //                       title: <Link
    //                       style={{
    //                         color:"#ACB8C4",
    //                         fontWeight:"400",
    //                         fontSize:'14px',
    //                         letterSpacing:'.01em',
    //                         textDecoration:"none"
    //                       }}
    //                       to='/'>Home</Link>,
    //                     },
    //                     {
    //                       title: 'Shipments',
    //                     },
    //                     {
    //                       title: 'Shipments Details',
    //                     }
    //                   ]}
    //                   className='text-white'
    //               />
    //               <Dropdown
    //                   menu={{
    //                     items,
    //                   }}
    //                   placement="bottomRight"
    //                   arrow
    //                 >
    //                   <p className="m-0">Need Help?</p>
    //               </Dropdown>

    //             </div>
    //         </div>
    //         <div className="row shipment_header">
    //               <ShipmentHeader />
    //               <ShipmentTable contentListNoTitle={contentListNoTitle} tabListNoTitle={tabListNoTitle}  />
    //         </div>
    //     </div>
    //     {/* <ShipmentDetailsModal open={true} /> */}
    // </div>
    <>
      {/* <VscClose size={22} color='red' role='button' onClick={()=>close(false)} style={{position:"absolute",top:"0px",right:"-22px"}} /> */}
      <Dialogs
        open={open}
        onClose={() => close(false)}
        aria-labelledby="responsive-dialog-title"
        id="edit_profile_modal_section"
        maxWidth={"xl"}
      >
        <DialogContent>
          <VscClose
            size={22}
            color="black"
            role="button"
            onClick={() => close(false)}
            style={{ position: "absolute", top: "0px", right: "10px" }}
          />
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                // alignSelf:"center"
              }}
            >
              {/* <CircularProgress style={{ color: "#0DA3DE " }} /> */}
              <img src={shipgif} width="140px" height="140px" />
            </Box>
          ) : (
            <>
              <ShipmentHeader rowDatas={rowData} close={close} />
              <ShipmentTable
                contentListNoTitle={contentListNoTitle}
                tabListNoTitle={tabListNoTitle}
                setVesselmodalopen={setVesselmodalopen}
                close={close}
                rowDatas={rowData}
              />
            </>
          )}
          {/* <VscClose size={22} color='black' role='button' onClick={()=>close(false)} style={{position:"absolute",top:"0px",right:"-22px"}} /> */}
        </DialogContent>
      </Dialogs>

      <Dialog
        open={vesselmodalopen}
        onClose={() => setVesselmodalopen(false)}
        aria-labelledby="responsive-dialog-title"
        id="vessel_modal_section"
        maxWidth={"lg"}
        fullWidth={true}
      >
        <DialogContent>
          <ShipmentMapModal />
          <VscClose
            size={22}
            color="#ffff"
            role="button"
            onClick={() => setVesselmodalopen(false)}
            style={{ position: "absolute", top: "0px", right: "-22px" }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ShipmentBase;
