import React, { useState, useRef, useEffect } from "react";
import {
  Typography,
  Box,
  TextField,
  CircularProgress,
  FormHelperText,
} from "@mui/material";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Modal from "@mui/material/Modal";
import "../ShipmentCard.css";
import { ReactComponent as Location } from "../../../assets/location.svg";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Tooltip } from "antd";
import { allportRequest } from "../../../Redux/Actions/AllPortAction";
import CountryFlag from "../../Core-Components/CountryFlag";
import air from "../../../assets/Air.svg";
import sea from "../../../assets/Shipement.svg";
import city from "../../../assets/Business2.svg";
import { IoClose } from "react-icons/io5";
import shipgif from '../../../assets/shipnxtgif.gif'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Destination = ({
  setOriginPortOptionsVisible,
  destPortOptionsVisible,
  setDestPortOptionsVisible,
  setCargoOptionsVisible,
  setDestPort,
  destPort,
  originPort,
  searchDestPort,
  setSearchDestPort,
  searchDestCode,
  setSearchDestCode,
  deserrormsg,
  setdeserrormsg,
  shrinkValues,
  selectedDataToPatch,
  destref,
  orgref,
  nunits,
  handleRateEngineClick
}) => {
  // const [searchDestPort, setSearchDestPort] = useState("");
  // const [originPortOptionsVisible, setOriginPortOptionsVisible] = useState(false);
  // const [destPortOptionsVisible, setDestPortOptionsVisible] = useState(false);
  useEffect(() => {
    if (selectedDataToPatch) {
      setSearchDestPort(selectedDataToPatch?.destination);
    }
  }, [selectedDataToPatch]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const divRefs = useRef([]);
  const [desPortCode, setDesPortCode] = useState("");
  console.log(searchDestPort);
  const [prevValue, setPrevValue] = useState("");
  const [checkleave, setcheckleave] = useState("");
  const dispatch = useDispatch();
  const DestinationPortData = useSelector((state) => state.allPort);
  const { loading, error } = useSelector((state) => state.allPort);
  const destinationPortDataValue = DestinationPortData?.allportData?.result?.content;
  console.log(destinationPortDataValue);

  const filteredSeaPorts = destinationPortDataValue?.filter(
    (item) => item.transport_mode === "Ocean"
  ) || [];
  const filteredAirPorts = destinationPortDataValue?.filter(
    (item) => item.transport_mode === "Air"
  ) || [];
  const filteredCityPorts = destinationPortDataValue?.filter(
    (item) => item.transport_mode === "Road"
  ) || [];
  console.log(filteredSeaPorts);
  // const [destination, setDestination] = useState("");
  // const [modalOpen, setModalOpen] = useState(false);

  // const destinationRef = useRef(null);

  // // Mock suggestions data
  // const suggestions = [
  //   {
  //     label: "Sea Port",
  //     labelText: "Pick up not included",
  //     items: ["Nhava Sheva (INNSA)"],
  //   },
  //   {
  //     label: "Airport",
  //     labelText: "Pick up not included",
  //     items: ["Chhatrapati Shivaji International Airport (BOM)"],
  //   },
  //   {
  //     label: "City",
  //     labelText: "Pick up not included",
  //     items: ["Chhatrapati Shivaji International Airport (BOM)"],
  //   },
  // ];

  // const handleDestinationChange = (event) => {
  //   const { value } = event.target;
  //   setDestination(value);
  // };

  // const handleDestinationFocus = () => {
  //     setModalOpen(true);
  // };

  // const handleClose = () => {
  //   setModalOpen(false);
  // };

  // const handleSuggestionClick = (value) => {
  //   setDestination(value);
  //   setModalOpen(false);
  // };

  useEffect(() => {
    setDestPort("")
  }, [])

  const handleDestPortSelect = (port) => {
    console.log("Dest selected:", port);
    setcheckleave(port);
    // setSearchDestPort(port?.port_name);
    setDesPortCode(port?.port_code);
    setDestPortOptionsVisible(false);
    setDestPort(port);
    
    if (
      port?.transport_mode === "Ocean" &&
      originPort?.transport_mode === "Air"
    ) {
      setdeserrormsg("Please select either AIR Port or City as destination");
      setSearchDestPort("");
      setDestPort(null);
    } else if (
      port?.transport_mode === "Air" &&
      originPort?.transport_mode === "Ocean"
    ) {
      setdeserrormsg("Please select either SEA Port or City as destination");
      setSearchDestPort("");
      setDestPort(null);
    } else if (port?.port_country === originPort?.port_country) {
      setdeserrormsg("Please select a different country than origin");
      setSearchDestPort("");
      setDestPort(null);
    } else {
      setSearchDestPort(port?.list_value);
      setSearchDestCode(port?.port_code);
      setdeserrormsg(null);
      setCargoOptionsVisible(true)
    }
  };

  const handleDestPortChange = (event) => {
    const { value } = event.target;
    setSearchDestPort(value);
    if (value?.length >= 4) {
      dispatch(allportRequest({ name: value, limits: "30" }));
      setDestPortOptionsVisible(true);
    } else {
      setDestPortOptionsVisible(false);
      setDestPort(null);
    }
    setOriginPortOptionsVisible(false);
    setCargoOptionsVisible(false);
  };

  const handleClose = () => {
    setDestPort("");
    setSearchDestPort("");
    setDestPortOptionsVisible(false);
  };

  const destRef = useRef();
  console.log(destRef.current)

  useEffect(() => {
    const handler = (e) => {
      if (!destRef?.current?.contains(e.target)) {
        setDestPortOptionsVisible(false);
      }
    };
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        setDestPortOptionsVisible(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  });

  useEffect(() => {
    if (divRefs.current[selectedIndex]) {
      divRefs.current[selectedIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [selectedIndex]);

  const handleKeyDown = (event, filteredPorts) => {
    if (event.key === "ArrowUp") {
      setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : filteredPorts?.length - 1));
    } else if (event.key === "ArrowDown") {
      setSelectedIndex((prevIndex) => (prevIndex < filteredPorts?.length - 1 ? prevIndex + 1 : 0));
    } else if (event.key === "Enter") {
      if (filteredPorts?.length > 0) {
        const selectedPort = filteredPorts?.[selectedIndex];
        handleDestPortSelect(selectedPort);
      }
    } 
    else if(event.key === "Tab" && event.shiftKey){
      // if (filteredPorts?.length > 0) {
        // const selectedPort = filteredPorts?.[selectedIndex];
        // handleDestPortSelect(selectedPort);
        console.log("tab+shift")
        setDestPortOptionsVisible(false)
        setCargoOptionsVisible(false)
        console.log(orgref)
        // orgref?.current?.focus()
      // }
    }
    else if(event.key === "Tab"){
      // if (filteredPorts?.length > 0) {
        console.log("tab only")
        // const selectedPort = filteredPorts?.[selectedIndex];
        // handleDestPortSelect(selectedPort);
        setDestPortOptionsVisible(false)
        setCargoOptionsVisible(true)
        // nunits?.current?.focus()

      // }
    }
  };
  

  return (
    <>
      <div
        className="column  "
        style={{ display: "flex", minWidth: "29%", position: "relative" }}
      >
        <div style={{ alignContent: "center" }}>
          <Location
            style={{ width: "20px", height: "20px" }}
            className="mx-2"
          />
        </div>
        <Tooltip trigger={"hover"} title={searchDestPort?.length > 28 && searchDestPort}>
        <div className="w-100" style={{borderRight: "3px solid rgba(245, 247, 249, 1)"}}>
          <Typography
            className="fw-bold"
            style={{ fontSize: "14px", fontWeight: "700", lineHeight: "20px" }}
          >
            Destination
          </Typography>
          {destPort && (
            <CountryFlag
              countryCode={destPort.port_country}
              className="port-flag input-port-flag"
            />
          )}
          <input
            type="text"
            style={{
              border: "none",
              outline: "none",
              width: "90%",
              background: "transparent",
              fontWeight: "600",
              fontSize: "13px",
              lineHeight: "22px",
              letterSpacing: ".01em",
            }}
            className="input-field "
            placeholder="Enter Sea/Airport, City or Zip Code"
            // ref={destinationRef}
            // onChange={handleDestinationChange}
            // onClick={handleDestinationFocus}
            // value={destination}
            onFocus={handleRateEngineClick}
            onChange={handleDestPortChange}
            value={shrinkValues(searchDestPort)}
            ref={destref}
            onKeyDown={(e) => handleKeyDown(e, [...filteredSeaPorts, ...filteredAirPorts, ...filteredCityPorts])}
            // onBlur={() => {
            //   console.log(destPort)
            //   if (!destPort) {
            //     setSearchDestPort("");
            //     setDestPortOptionsVisible(false); //this one clear the input values when mouse on leave without selected dropdowns
            //   }

            // }}]
          />
          {searchDestPort && (
            <IoClose
              role="button"
              style={{ position: "absolute", top: "51%", right: "20px" }}
              onClick={handleClose}
            />
          )}
          {deserrormsg && (
            <FormHelperText style={{ color: "red" }}>
              {deserrormsg}
            </FormHelperText>
          )}

          {destPortOptionsVisible && (
            <div className="outer-all-port" ref={destRef}>
              {loading ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                   <img src={shipgif} width="140px" height="140px" />
                  {/* <CircularProgress style={{ color: "red" }} /> */}
                </Box>
              ) : (
                <>
                  {filteredSeaPorts?.length > 0 && (
                    <div className="inner-all-port">
                      <div>
                        <p
                          style={{
                            marginBottom: 0,
                            padding: "12px 0 8px 0",
                            color: "#181e25",
                            fontSize: "15px",
                            fontWeight: 500,
                          }}
                        >
                          Sea Port{" "}
                          <span
                            style={{
                              color: "rgba(103, 120, 142, 1)",
                              fontSize: "13px",
                              fontWeight: 400,
                              lineHeight: "19px",
                              letterSpacing: ".01em",
                            }}
                          >
                            ( Pick up not included )
                          </span>
                        </p>
                      </div>
                      <div>
                        {filteredSeaPorts?.map((port, index) => (
                          <div
                            key={index}
                            onClick={() => handleDestPortSelect(port)}
                            ref={(el) => (divRefs.current[index] = el)}
                            className={selectedIndex === index ? "selectedlocation" : ""}
                            style={selectedIndex === index ? { backgroundColor: "rgb(223, 226, 233)",borderRadius:"8px" } : {}}
                          >
                            <Row className="justify-content-between p-2 port-all-content">
                              <Col className="d-flex">
                                <Row className="gap-2">
                                  <div className="mt-1 p-1">
                                    <CountryFlag
                                      countryCode={port?.port_country}
                                      className="port-flag"
                                    />{" "}
                                  </div>
                                  <div>
                                    <p className="portnamecode ">
                                      {port?.list_value}
                                    </p>
                                    <p className="portCountry">
                                      {port?.port_country}
                                    </p>
                                  </div>
                                </Row>
                              </Col>
                              <Col style={{ marginRight: "20px" }}>
                                <img
                                  src={sea}
                                  style={{
                                    width: "24px",
                                    height: "24px",
                                  }}
                                />
                              </Col>
                            </Row>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {filteredAirPorts?.length > 0 && (
                    <div className="inner-all-port">
                      <div>
                        <p
                          style={{
                            marginBottom: 0,
                            padding: "12px 0 8px 0",
                            color: "#181e25",
                            fontSize: "15px",
                            fontWeight: 500,
                          }}
                        >
                          Airport{" "}
                          <span
                            style={{
                              color: "rgba(103, 120, 142, 1)",
                              fontSize: "13px",
                              fontWeight: 400,
                              lineHeight: "19px",
                              letterSpacing: ".01em",
                            }}
                          >
                            ( Doesn't Include Pickup )
                          </span>
                        </p>
                      </div>
                      <div>
                        {filteredAirPorts?.map((port, index) => (
                          <div
                            key={index}
                            onClick={() => handleDestPortSelect(port)}
                            ref={(el) => (divRefs.current[index + filteredSeaPorts?.length] = el)}
                            className={selectedIndex === index + filteredSeaPorts?.length ? "selectedlocation" : ""}
                            style={selectedIndex === index + filteredSeaPorts?.length ? { backgroundColor: "rgb(223, 226, 233)",borderRadius: "8px" } : {}}
                          >
                            <Row className="justify-content-between p-2 port-all-content">
                              <Col className="d-flex">
                                <Row className="gap-2">
                                  <div className="mt-1 p-1">
                                    <CountryFlag
                                      countryCode={port?.port_country}
                                      className="port-flag"
                                    />{" "}
                                  </div>
                                  <div>
                                    <p className="portnamecode ">
                                      {port?.list_value}
                                    </p>
                                    <p className="portCountry">
                                      {port?.port_country}
                                    </p>
                                  </div>
                                </Row>
                              </Col>
                              <Col style={{ marginRight: "20px" }}>
                                <img
                                  src={air}
                                  style={{
                                    width: "24px",
                                    height: "24px",
                                  }}
                                />
                              </Col>
                            </Row>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {filteredCityPorts?.length > 0 && (
                    <div className="inner-all-port">
                      <div>
                        <p
                          style={{
                            marginBottom: 0,
                            padding: "12px 0 8px 0",
                            color: "#181e25",
                            fontSize: "15px",
                            fontWeight: 500,
                          }}
                        >
                          City{" "}
                          <span
                            style={{
                              color: "rgba(103, 120, 142, 1)",
                              fontSize: "13px",
                              fontWeight: 400,
                              lineHeight: "19px",
                              letterSpacing: ".01em",
                            }}
                          >
                            ( Include Pickup )
                          </span>
                        </p>
                      </div>
                      <div>
                        {filteredCityPorts?.map((port, index) => (
                          <div
                            key={index}
                            onClick={() => handleDestPortSelect(port)}
                            ref={(el) => (divRefs.current[index + filteredSeaPorts?.length + filteredAirPorts?.length] = el)}
                            className={selectedIndex === index + filteredSeaPorts?.length + filteredAirPorts?.length ? "selectedlocation" : ""}
                            style={selectedIndex === index + filteredSeaPorts?.length + filteredAirPorts?.length ? { backgroundColor: "rgb(223, 226, 233)",borderRadius: "8px" } : {}}
                          >
                            <Row className="justify-content-between p-2 port-all-content">
                              <Col className="d-flex">
                                <Row className="gap-2">
                                  <div className="mt-1 p-1">
                                    <CountryFlag
                                      countryCode={port?.port_country}
                                      className="port-flag"
                                    />{" "}
                                  </div>
                                  <div>
                                    <p className="portnamecode ">
                                      {port?.list_value}
                                    </p>
                                    <p className="portCountry">
                                      {port?.port_country}
                                    </p>
                                  </div>
                                </Row>
                              </Col>
                              <Col style={{ marginRight: "20px" }}>
                                <img
                                  src={city}
                                  style={{
                                    width: "24px",
                                    height: "24px",
                                  }}
                                />
                              </Col>
                            </Row>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
        </Tooltip>
      </div>

      {/* <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {suggestions.map((group, index) => (
            <div key={index}>
              <Typography variant="subtitle1" sx={{ fontWeight: "600", mt: 2 }}>
                {group.label} ({group.labelText})
              </Typography>
              {group.items.map((item, idx) => (
                <Typography
                  key={idx}
                  variant="body1"
                  sx={{ ml: 2, mt: 1, cursor: "pointer"}}
                  onClick={() => handleSuggestionClick(item)}
                >
                  {item}
                </Typography>
              ))}
            </div>
          ))}
        </Box>
      </Modal> */}
    </>
  );
};

export default Destination;
