import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
} from "@mui/material";
import LeftLine from "../../../assets/leftLine.png";
import RightLine from "../../../assets/rightLine.png";
import { useDispatch, useSelector } from "react-redux";
import { sailingRequest } from "../../../Redux/Actions/SailingAction";
import CountryFlag from "../../Core-Components/CountryFlag";
import { Port } from "./Port";
import { opensailingRequest } from "../../../Redux/Actions/OpneSailingAction";
import { profileRequest } from "../../../Redux/Actions/ProfileAction";
import { useNavigate } from "react-router-dom";
import { allportRequest } from "../../../Redux/Actions/AllPortAction";
import { hover } from "@testing-library/user-event/dist/hover";
import shipgif from "../../../assets/shipnxtgif.gif";

const UpcomingSailings = ({setOriginPort,setDestPort}) => {
  const [displayedSchedules, setDisplayedSchedules] = useState(4);
  const [displaySailingData, setDisplaySailingData] = useState(4);
  const [orgPortCode, setOrgPortCode] = useState("");
  const [desPortCode, setDesPortCode] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const UpcomingData = useSelector((state) => state.Sailing);
  const { loading, error } = useSelector((state) => state.Sailing);
  const originPortData = useSelector((state) => state.allPort);
  const originPortDataValue = originPortData?.allportData?.Data;
  const openSailingloading = useSelector((state) => state.OpenSailing.loading);
  console.log(UpcomingData);
  console.log(openSailingloading);
  useEffect(() => {
    dispatch(sailingRequest());
  }, []);
   //This is for call profile_data api
  useEffect(() => {
    dispatch(profileRequest());
  }, []);

  useEffect(() => {
    if (orgPortCode && desPortCode) {
      console.log(
        "API call with origin and destination ports:",
        orgPortCode,
        desPortCode
      );

      const originName = setOriginPort;
      const destinationName = setDestPort;

      dispatch(opensailingRequest({ originName, destinationName }));
    }
  }, [orgPortCode, desPortCode, dispatch]);

  const sailing_success = useSelector((state) => state.OpenSailing);
  const sailingData = sailing_success?.openSailing?.result?.content;
  console.log("sailing data ", sailingData);
  const schedules = UpcomingData?.sailingData?.result?.content;
  console.log("schedules", schedules);
  const handleShowMore = () => {
    if (displayedSchedules === 4 && displaySailingData === 4) {
      setDisplayedSchedules(schedules?.length);
      setDisplaySailingData(sailingData?.length);
    } else {
      setDisplayedSchedules(4);
      setDisplaySailingData(4);
    }
  };

  // if(!sailingData.length && !schedules.length){
  //   return <div>No Data Found</div>
  // }

  // const handleBookNow =(e) =>{
  //   e.preventDefault()
  //   console.log("booknow")
  // }
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleBookNow = (e,data) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("booknow");
    // if(data?.origin){
    //   dispatch(allportRequest({ search_key: data?.origin, limits: "1" }));
    //   setOriginPort(originPortDataValue[0])
    //   navigate('/quotation') 
    //   console.log(originPortDataValue)
    // }
    // if(data?.destination){
    //   dispatch(allportRequest({ search_key: data?.destination, limits: "1" }));
    // }
    // console.log()
    navigate('/quotation',{state:{data}}) 
  };
  

  const renderAccordion = (data, index) => {
    
    return (
      <div key={index}>
        <Accordion
          sx={{
            // paddingTop: "10px",
            // paddingBottom:"10px",
            // paddingLeft:"25px",
            // paddingRight:"25px",
            padding: "10px",
            border: "none",
            borderBottom: "1px solid #F3F5F7",
            "&:hover": {
              backgroundColor: "#F8FAFC",
              borderBottom:" 3px solid #F3F5F7",
              boxShadow:" 0px 3px 6px 0px #00000040",
            },
          }}
          className="acc-row mx-1"
          expanded={expandedIndex === index}
          onChange={() => handleAccordionToggle(index)}
        >
          <AccordionSummary
            // expandIcon={<ArrowDropDownIcon />}
            // sx={{
            //   pointerEvents: "none",
            //   border: "none"
            // }}
            // expandIcon={
            //   <ArrowDropDownIcon
            //     sx={{
            //       pointerEvents: "auto"
            //     }}
            //   />
            // }
            // expandIcon={<ArrowDropDownIcon
            //   onClick={toggleAccordion}
            // />}
            // aria-controls="panel1-content"
            // id="panel1-header"
            expandIcon={<ArrowDropDownIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            // sx={{ border: "none",background: "red" }}
          >
            <div className="d-flex w-100">
              <div style={{ width: "15%" }}>
                <Typography
                  className="fw-bold"
                  sx={{ fontSize: "14px", lineHeight: "22px" }}
                >
                  {data.origin_date || data.ETD}
                </Typography>
                <div className="d-flex ">
                  <CountryFlag
                    countryCode={data?.origin_country_code}
                    alt="ind"
                    width={20}
                    className="me-1"
                  />
                  <Typography
                    sx={{
                      opacity: "0.7",
                      fontSize: "13px",
                      color: "#495A6E",
                    }}
                  >
                    {data.origin_name || data.origin}
                  </Typography>
                </div>
              </div>
              <div style={{ width: "60%" }}>
                <div className="d-flex justify-content-around">
                  <div className=" d-flex flex-direction-row">
                    <div>
                      <img src={LeftLine} width="257px" height="10px" />
                    </div>
                  </div>
                  <div className=" text-start my-1 px-2">
                    <Typography
                      sx={{ opacity: "0.7", fontSize: "14px" }}
                      className="fw-bold "
                    >
                      T/T : {data.transit_days || data.ttlrd} days
                    </Typography>
                  </div>
                  <div>
                    <img src={RightLine} width="257px" height="10px" />
                  </div>
                </div>
              </div>
              <div className=" " style={{ width: "15%" }}>
                <Typography
                  className="fw-bold"
                  sx={{ fontSize: "14px", lineHeight: "22px" }}
                >
                  {data.destination_date || data.ETA}
                </Typography>
                <div className="d-flex">
                  <CountryFlag
                    countryCode={data?.dest_country_code}
                    alt="ind"
                    width={20}
                    className="me-2"
                  />{" "}
                  <Typography
                    sx={{
                      opacity: "0.7",
                      fontSize: "13px",
                      color: "rgba(73, 90, 110, 1)",
                    }}
                  >
                    {data.destination || data.fdc_name}
                  </Typography>
                </div>
              </div>
              <button
                className="book-now justify-content-end align-content-center ms-2 me-0"
                style={{
                  backgroundColor: "#0DA3DE",
                  padding: "0 8px",
                  borderRadius: "6px",
                  color: "white",
                  border: "none",
                  height: "30px",
                  alignSelf: "center",
                  pointerEvents: "auto"
                }}
                // onClick={(e)=>handleBookNow(e,data)}
              >
                <span style={{ fontSize: "13px" }} >Book Now</span>
              </button>
            </div>
          </AccordionSummary>
          <AccordionDetails sx={{ display: "flex" }}>
            <div
              className="card w-50 m-2 border-2 border-opacity-50"
              style={{ background: "#F8FAFC" }}
            >
              <div className="d-flex justify-content-between p-2 border-bottom border-2">
                <Typography sx={{ fontSize: "13px" }}>VESSEL</Typography>
                <Typography className="fw-bolder" sx={{ fontSize: "13px" }}>
                  {data.vessel || data.vessel_name}
                </Typography>
              </div>

              <div className="d-flex justify-content-between p-2 border-bottom border-2">
                <Typography sx={{ fontSize: "13px" }}>VOYAGE</Typography>
                <Typography className="fw-bolder" sx={{ fontSize: "13px" }}>
                  {data.voyage || data.voyage_no}
                </Typography>
              </div>
              <div className="d-flex justify-content-between p-2 ">
                <Typography sx={{ fontSize: "13px" }}>
                  TRANSIT TIME (PORT TO PORT)
                </Typography>
                <Typography className="fw-bolder" sx={{ fontSize: "13px" }}>
                  {data.transit_ptp || data.ttport} Days
                </Typography>
              </div>
            </div>
            <div
              className="card w-50 m-2 border-2 border-opacity-50"
              style={{ background: "#F8FAFC" }}
            >
              <div className="d-flex justify-content-between p-2 border-bottom border-2">
                <Typography sx={{ fontSize: "13px" }}>CUT OFF DATE</Typography>
                <Typography className="fw-bolder" sx={{ fontSize: "13px" }}>
                  {data.cut_off_date || data.cutoff_date}
                </Typography>
              </div>
              <div className="d-flex justify-content-between p-2 border-bottom border-2">
                <Typography sx={{ fontSize: "13px" }}>
                  DEPARTURE DATE
                </Typography>
                <Typography className="fw-bolder" sx={{ fontSize: "13px" }}>
                  {data.origin_date || data.ETD}
                </Typography>
              </div>
              <div className="d-flex justify-content-between p-2 ">
                <Typography sx={{ fontSize: "13px" }}>ARRIVAL DATE</Typography>
                <Typography className="fw-bolder" sx={{ fontSize: "13px" }}>
                  {data.destination_date || data.ETA}
                </Typography>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  };
  const sailingdataShow = () => {
    if (loading || openSailingloading || UpcomingData.length === 0) {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "353px",
            // alignSelf:"center"
          }}
        >
          {/* <CircularProgress style={{ color: "red" }} /> */}
          <img src={shipgif} width="140px" height="140px" />
        </Box>
      );
    }
    else if (sailingData?.length === 0) {
      return (
        <div
          className="text-center"
          style={{ height: "50vh", alignContent: "center",backgroundColor:"white" }}
        >
          No data found
        </div>
      );
    }
    return sailingData
      ?.slice(0, displaySailingData)
      ?.map((data, index) => renderAccordion(data, index));
  };
  const schedulesDataShow = () => {
    if (loading || openSailingloading || UpcomingData.length === 0) {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "353px",
            // alignSelf:"center"
          }}
        >
          {/* <CircularProgress style={{ color: "red" }} /> */}
          <img src={shipgif} width="140px" height="140px" />
        </Box>
      );
    }
    else if (!schedules?.length) {
      return (
        <div
          className="text-center"
          style={{ height: "50vh", alignContent: "center",backgroundColor:"white" }}
        >
          No data found
        </div>
      );
    }
    return schedules
      ?.slice(0, displayedSchedules)
      ?.map((data, index) => renderAccordion(data, index));
  };
  return (
    <div
      className="w-100 mt-5 shadow mx-auto"
      style={{
        minWidth: "1255px",
        borderRadius: "8px",
      }}
    >
      <Port />

      {sailingData ? sailingdataShow() : schedulesDataShow()}
      {(sailingData?.length > 0 || schedules?.length > 0) && !openSailingloading && !loading && (
      <div
        className="card-footer p-3"
        style={{
          fontSize: "14px",
          fontWeight: "400",
          backgroundColor: "#F8FAFC",
        }}
        role="button"
        onClick={handleShowMore}
      >
        {sailingData
          ? displaySailingData === 4
            ? "Show More"
            : "Show Less"
          : displayedSchedules === 4
          ? "Show More"
          : "Show Less"}
      </div>
       )}
    </div>
  );
};

export default UpcomingSailings;
