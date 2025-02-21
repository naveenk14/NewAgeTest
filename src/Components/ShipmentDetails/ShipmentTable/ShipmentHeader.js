import React, { useEffect, useRef, useState } from "react";
import uaeFlag from "../../../assets/ae.svg";
import indFlag from "../../../assets/in.svg";
import ship from "../../../assets/Ship.svg";
import menuIcon from "../../../assets/menuDots.png";
import rightArrow from "../../../assets/rigtharrow.png";
import OrImg from "../../../assets/orSymbol.png";
// import co2 from "../../../assets/Co2 Icons-05 1.png";
import co2 from "../../../assets/Co2 Icons-05 1.svg";
import lcl from "../../../assets/LCL.svg";
import { Link } from "react-router-dom";
import Stepper from "./Track/Stepper";
import { Card, Dropdown, Space, Tooltip, message } from "antd";
import "./ShipmentHeader.css";
import Modal from "./Modal/Modal";
import TransactionModal from "./Modal/TransactionModal";
import CancelBookingModal from "./Modal/CancelBookingModal";
import CancelRequestModal from "./Modal/CancelRequestModal";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { ViewBookingAction } from "../../../Redux/Actions/ViewBookingAction";
import { useLocation } from "react-router-dom";
import CountryFlag from "../../Core-Components/CountryFlag";

const ShipmentHeader = ({ rowDatas }) => {
  //This is for getting id from previous page

  // const location = useLocation();
  // const { rowData } = location.state || {};
  // console.log("shipmentrowData", rowData.id);
  const booking_id = rowDatas?.id;
  // const booking_id = "6444";
  console.log("rowdtas", booking_id);

  //get ViewBooking details ApiData
  // const booking_id = rowData.id
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(ViewBookingAction({ booking_id }));
  // }, []);

  const bookingData = useSelector((state) => state.ViewBooking);
  console.log("bookingData", bookingData);
  const ViewBooking = bookingData?.viewBookingData?.customercode;
  console.log("view", ViewBooking);

  //This is for a Booking_header
  const progress = booking_id; //get Id from previous page
  const ShipmentData = useSelector((state) => state.Booking);
  const Booking = ShipmentData?.booking?.data;
  console.log(Booking)
  const fileteredMilestone = Booking?.filter((item) => item.id === progress);
  console.log(fileteredMilestone)

  // for Cancel Booking Dropdown
  const onClick = ({ key }) => {
    handleCancelOpen();
  };
  const items = [
    {
      label: "Cancel Booking",
      key: "1",
    },
  ];

  //transaction_modal

  const [openTransmodal, setOpenTransModal] = useState(false);
  const handleOpen = () => {
    setOpenTransModal(true);
  };
  const handleClose = () => {
    setOpenTransModal(false);
  };
  //cancel_booking_modal
  const [openCancelmodal, setOpenCancelModal] = useState(false);
  const handleCancelOpen = () => {
    setOpenCancelModal(true);
  };
  const handleCancelClose = () => {
    setOpenCancelModal(false);
  };
  //cancel_request_modal
  const [openReqmodal, setOpenReqmodal] = useState(false);
  const handleReqOpen = () => {
    setOpenReqmodal(true);
  };
  const handleReqClose = () => {
    setOpenReqmodal(false);
  };

  const getlastStatus = document.getElementsByClassName("Inprogress");
  const getlastCompleteStatus = document.getElementsByClassName("Complete");

  //  for_ongoing-status_of_focus_milestones

  const stepbox = useRef(null);

  useEffect(() => {
    if (fileteredMilestone[0]?.milestone?.length > 7) {
      if (getlastStatus) {
        stepbox.current.scrollLeft = getlastStatus[0]?.offsetLeft;
      } else if (getlastCompleteStatus) {
        stepbox.current.scrollLeft = getlastCompleteStatus[0]?.offsetLeft;
      }
    }
  }, []);

  //drag and drop

  const [showLeftArrow, setShowLeftArrow] = useState(true);
  const [showRightArrow, setShowRightArrow] = useState(true);

  //  const scrollLeftValue = getDoc.scrollLeft
  //  console.log(scrollLeftValue)

  const manageIcons = () => {
    let ScrollValue = Math.round(stepbox.current.scrollLeft);
    let maxscrollwidth =
      stepbox.current.scrollWidth - stepbox.current.clientWidth;
    if (ScrollValue > 0) {
      setShowLeftArrow(true);
    } else {
      setShowLeftArrow(false);
    }

    if (maxscrollwidth > ScrollValue) {
      setShowRightArrow(true);
    } else {
      setShowRightArrow(false);
    }
  };

  const [isDragging, setIsDragging] = useState(false);

  const dragging = (e) => {
    stepbox.current.scrollLeft -= e.movementX;
    manageIcons();
  };
  const dragStop = () => {
    setIsDragging(false);
  };

  const handleScrollLeft = () => {
    stepbox.current.scrollLeft -= 125;
    manageIcons();
  };
  const handleScrollRight = () => {
    stepbox.current.scrollLeft += 125;
    manageIcons();
  };

  const ship_id = "12060400067845654567";
  const order_no = "ASO/0143/245757755555555555555555555555555555555555";

  const EstimatedDepartureTemplate = (rowData) => {
    const {
      actual_departure,
      estimated_departure,
    } = rowData;
    // Variable to store the result
    let dayDifference = "";

    // Check if either date is empty
    if (actual_departure && estimated_departure) {
      // Convert to Date objects
      const actualDate = new Date(actual_departure);
      const estimatedDate = new Date(estimated_departure);

      // Calculate the time difference in milliseconds
      const timeDifference = actualDate - estimatedDate;

      // Convert milliseconds to days
      dayDifference = timeDifference / (1000 * 60 * 60 * 24);
    }

    const getDepartMessage = () => {
      if (dayDifference === "") return null;
      if (dayDifference === 0) return { color: "#00c500" };
      if (dayDifference > 0) return { color: "red" };
      if (dayDifference < 0) return { color: "#00c500" };
    };

    const departInfo = getDepartMessage();
    const EtdTitle = () => {
      if (dayDifference === "") return null;
      if (dayDifference === 0) return <div>Departed On-time</div>;
      if (dayDifference > 0)
        return (
          <div>
            Departed Late{" "}
            {/* <span style={{ color: "red", fontWeight: "700" }}>
              {" "}
              (+{dayDifference} days)
            </span> */}
          </div>
        );
      if (dayDifference < 0)
        return (
          <div>
            Departed Early{" "}
            {/* <span style={{ color: "#00c500", fontWeight: "700" }}>
              ({dayDifference} days)
            </span> */}
          </div>
        );
    };
    return (
      <div className="message">
        <span
          style={{
            color: departInfo ? departInfo.color : "",
            fontWeight: "500",
          }}
        >
          {departInfo ? (
            <Tooltip
              overlayStyle={{zIndex:"9999"}}
              placement="topLeft"
              title={
                <span>
                  <div style={{ fontSize: "13px" }}>{EtdTitle()}</div>
                  <div style={{ fontSize: "10px" }}>
                    {/* {rowData?.updated_message} */}
                    Estimated Departure : {rowData.estimated_departure} <br />
                    Actual Departure : {rowData.actual_departure}
                  </div>
                </span>
              }
            >
              <span role="button" style={{color:"#384656"}} >{rowData?.etd_atd}{" "}
                <span style={{fontSize:"11px",fontWeight:"700",color:dayDifference > 0 ? "red" : "#00c500"}}>
                {dayDifference > 0 ? ` (+ ${dayDifference} days)`:(dayDifference == 0 || "") ?"(On-time)":` (${dayDifference} days)`}</span>
                </span>
            </Tooltip>
          ) : (
            rowData?.etd_atd
          )}
        </span>
      </div>
    );
  };

  const EstimatedArrivalTemplate = (rowData) => {
    const {
      actuval_arrival,
      estimated_arrival,
    } = rowData;
    // Variable to store the result
    let dayDifference = "";

    // Check if either date is empty
    if (actuval_arrival && estimated_arrival) {
      // Convert to Date objects
      const actualDate = new Date(actuval_arrival);
      const estimatedDate = new Date(estimated_arrival);

      // Calculate the time difference in milliseconds
      const timeDifference = actualDate - estimatedDate;

      // Convert milliseconds to days
      dayDifference = timeDifference / (1000 * 60 * 60 * 24);
    }

    console.log(dayDifference); // Will print the result or an empty string
    const getArrivalMessage = () => {
      if (dayDifference === "") return null;
      if (dayDifference === 0) return { color: "#00c500" };
      if (dayDifference > 0) return { color: "red" };
      if (dayDifference < 0) return { color: "#00c500" };
    };
    const arrivalInfo = getArrivalMessage();
    const EtaTitle = () => {
      if (dayDifference === "") return null;
      if (dayDifference === 0) return <div>Arrived On-time</div>;
      if (dayDifference > 0)
        return (
          <div>
            Arrived Late{" "}
            {/* <span style={{ color: "red", fontWeight: "700" }}>
              {" "}
              (+{dayDifference} days)
            </span> */}
          </div>
        );
      if (dayDifference < 0)
        return (
          <div>
            Arrived Early{" "}
            {/* <span style={{ color: "#00c500", fontWeight: "700" }}>
              ({dayDifference} days)
            </span> */}
          </div>
        );
    };
    return (
      <div className="message">
        <span
          style={{
            color: arrivalInfo ? arrivalInfo.color : "",
            fontWeight: "500",
          }}
        >
          {arrivalInfo ? (
            <Tooltip
              overlayStyle={{zIndex:"9999"}}
              placement="topLeft"
              title={
                <span>
                  <div style={{ fontSize: "13px" }}>{EtaTitle()}</div>
                  <div style={{ fontSize: "10px" }}>
                    Estimated Arrival : {rowData.estimated_arrival} <br />
                    Actual Arrival : {rowData.actuval_arrival}
                  </div>
                </span>
              }
            >
              <span role="button" style={{color:"#384656"}} >{rowData?.eta_ata}
                <span style={{fontSize: "11px",fontWeight: "700",color: dayDifference > 0 ? "red" : "#00c500"}}>
                {dayDifference > 0 ? ` (+ ${dayDifference} days)`:(dayDifference == 0 || "") ?" (On-time)":` (${dayDifference} days)`}</span>
                </span>
            </Tooltip>
          ) : (
            rowData?.eta_ata
          )}
        </span>
      </div>
    );
  };

  return (
    <>
      <Card
        style={{
          width: "100%",
          border: "none",
        }}
        className="mx-auto p-0 mob_response ship_section"
        id="mobile_margin"
      >
        {fileteredMilestone?.map((item, i) => {
          return (
            <div key={i}>
              {/* <div className="ship_section" style={{marginLeft:"6px",marginRight:"6px"}}> */}
              <div className="reference_row d-flex flex-row px-4">
                <div className="me-5">
                  <h6 className="me-2 m-0">Shipment ID :</h6>
                  {/* {
                      ViewBooking?.map((item)=>{
                        return <h6 className='m-0'>{item.booking_id}</h6>
                      }
                      )
                    } */}
                  <h6 className="m-0">
                    {/*4565655656*/}
                    {item?.id?.length <= 20 ? (
                      item?.id
                    ) : (
                      <Tooltip
                        placement="topLeft"
                        zIndex={9999}
                        title={item?.id}
                      >
                        <span role="button">
                          {item?.id.slice(0, 20).trim().split("").join("") +
                            "..."}
                        </span>
                      </Tooltip>
                    )}
                  </h6>
                </div>
                {/* <div className="col-4">
            <h6 className="m-0 me-2">Order ID:</h6>
            {fileteredMilestone?.map((item) => {
              return <h6 className="m-0">{item.order_no}</h6>;
            })}
          </div> */}
                <div className="me-5">
                  <h6 className="m-0 me-2">HBL :</h6>
                  <h6 className="m-0">
                    {/*456565677*/}
                    {/* {item?.hbl_number?.length <= 20 ? (
                      item?.hbl_number
                    ) : (
                      <Tooltip
                        placement="topLeft"
                        zIndex={9999}
                        title={item?.hbl_number}
                      >
                        <span role="button">
                          {item?.hbl_number
                            ?.slice(0, 20)
                            ?.trim()
                            ?.split("")
                            ?.join("") + "..."}
                        </span>
                      </Tooltip>
                    )} */}
                  </h6>
                </div>
                <div className="">
                  <h6 className="m-0 me-2">Order ID:</h6>
                  <h6 className="m-0">
                    {/*ASO/0143/247887878*/}
                    {item?.order_no?.length <= 70 ? (
                      item?.order_no
                    ) : (
                      <Tooltip
                        placement="topLeft"
                        zIndex={9999}
                        title={item?.order_no}
                      >
                        <span role="button">
                          {item?.order_no
                            ?.slice(0, 69)
                            ?.trim()
                            ?.split("")
                            ?.join("") + "..."}
                        </span>
                      </Tooltip>
                    )}
                  </h6>
                </div>
              </div>
         
        <div className="row destination_row">
          <div className="col-10 left_column">
            <div className="from_box">
              {/* <img src={uaeFlag} alt="" className="flag_img me-2" /> */}
              <CountryFlag countryCode={item.origin_countrycode} size={30} /> &nbsp;&nbsp;
             
                  <h6 className="m-0">
                    {item.origin}&nbsp;({item.origin_countrycode})
                  </h6>
             
              <img src={rightArrow} alt="" className="mx-3" />
            </div>
            <div className="to_box">
              {/* <img src={indFlag} alt="" className="flag_img me-2" /> */}
              <CountryFlag countryCode={item.destination_countrycode} size={30} /> &nbsp;&nbsp;
              
                  <h6 className="m-0">
                    {item.destination}&nbsp;({item.destination_countrycode})
                  </h6>
              
              {/* <img src={OrImg} alt="" className='mx-3' /> */}
            </div>
            {/* <div className="estimate_box">
                        <img src={ship} alt="" className='me-2' />
                        <p className='m-0'>Est. T/T</p>
                        <p className='mx-2 m-0'>9 Days (5 Days Port to Port)</p>
                    </div> */}
          </div>
          <div className="col-2 right_column">
            <div className="bookedButton">
              <span>{item.status}</span>
           
            </div>
            {/* <div className="menu_icon">
              <Dropdown
                menu={{
                  items,
                  onClick,
                }}
              >
                <a onClick={(e) => e.target.value}>
                  <Space>
                    <img src={menuIcon} alt="" />
                  </Space>
                </a>
              </Dropdown>
            </div> */}
          </div>
        </div>
        <div className="booking_row">
          <div className="booking_content">
            <p className="m-0 mb-1">Booking Date</p>
            <p className="m-0">{item.booked_on}</p>
           
          </div>
          <div className="booking_content">
            <p className="m-0 mb-1">ETD / ATD</p>
          <p className="m-0">{EstimatedDepartureTemplate(rowDatas)}</p>
          </div>
          <div className="booking_content">
            <p className="m-0 mb-1">ETA / ATA</p>
            <p className="m-0">{EstimatedArrivalTemplate(rowDatas)}</p>
          </div>
          <div className="booking_content">
            <p className="m-0 mb-1">Mode</p>
                <p className="m-0">
                  <img className="me-1" src={lcl} />
                  {item.mode}
                </p>
            
          </div>
          <div className="booking_content">
            <p className="m-0 mb-1">Incoterm</p>
            <p className="m-0 text-center">{item.tos}</p>
           
          </div>
          <div className="booking_content">
            <p className="m-0 mb-1">
              <span style={{ marginRight: "7px" }}>
                <img src={co2}></img>
              </span>
              Emission
            </p>
           
             <p className="m-0 text-center">{item.co_emission}</p>
          
          </div>
        </div>
        {/* stepper_box */}
        <div className="booking_status_row" style={{ position: "relative" }}>
          <div
            className="table-responsive dragging"
            ref={stepbox}
            id="tab"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => dragStop()}
            onMouseMove={(e) => dragging(e)}
          >
            {fileteredMilestone[0]?.milestone?.length > 7 && (
              <div className="arrow_icon">
                {showLeftArrow && (
                  <IoIosArrowBack
                    size={17}
                    color="rgb(109 114 120)"
                    onClick={() => handleScrollLeft()}
                  />
                )}
              </div>
            )}

            {/* stepper */}

            <Stepper booking_id={progress} />
            {fileteredMilestone[0]?.milestone?.length > 7 && (
              <div className="arrow_icon">
                {showRightArrow && (
                  <IoIosArrowForward
                    size={17}
                    color="rgb(109 114 120)"
                    onClick={() => handleScrollRight()}
                  />
                )}
              </div>
            )}
          </div>
        </div>
        </div>
          );
        })}
        {/* <div className="estimated_row">
          <div className="estimated_header">
            <img src={co2} alt="" />
            <p className="m-0">Emissions</p>
            <p className="m-0">
              Estimated:<span className="ms-2">22 tons</span>
            </p>
          </div>
          <div className="estimated_body">
            <p className="m-0">
              Actual calculations will be available once the shipment is
              complete.
            </p>
          </div>
        </div> */}
      </Card>
      {/* </div> */}

      {/* Modals */}

      <Modal isOpen={openTransmodal} width={"527px"} height={"585px"}>
        <>
          <TransactionModal handleClose={handleClose} />
        </>
      </Modal>
      <Modal isOpen={openCancelmodal} width={"563px"} height={"341.6px"}>
        <>
          <CancelBookingModal
            handleCancelClose={handleCancelClose}
            handleReqOpen={handleReqOpen}
          />
        </>
      </Modal>
      <Modal isOpen={openReqmodal} width={"563px"}>
        <>
          <CancelRequestModal handleReqClose={handleReqClose} />
        </>
      </Modal>
    </>
  );
};

export default ShipmentHeader;
