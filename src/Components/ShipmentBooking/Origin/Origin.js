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
import CountryFlag from "../../Core-Components/CountryFlag";
import { allportRequest } from "../../../Redux/Actions/AllPortAction";
import air from "../../../assets/Air.svg";
import sea from "../../../assets/Shipement.svg";
import city from "../../../assets/Business2.svg";
import { IoIosClose } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import shipgif from "../../../assets/shipnxtgif.gif"

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

const Origin = ({
  originPortOptionsVisible,
  setOriginPortOptionsVisible,
  setDestPortOptionsVisible,
  setCargoOptionsVisible,
  setOriginPort,
  originPort,
  destPort,
  searchOriginPort,
  setSearchOriginPort,
  searchOriginCode,
  setSearchOriginCode,
  orgerrormsg,
  setorgerrormsg,
  shrinkValues,
  selectedDataToPatch,
  destref,
  orgref,
  handleRateEngineClick
}) => {
  // const [origin, setOrigin] = useState("");
  // const [modalOpen, setModalOpen] = useState(false);
  // const originRef = useRef(null);
  useEffect(() => {
    if (selectedDataToPatch) {
      setSearchOriginPort(selectedDataToPatch?.origin);
    }
  }, [selectedDataToPatch]);

  console.log(selectedDataToPatch)
  console.log(originPort)
  console.log(searchOriginPort)
  console.log(searchOriginCode)

  const [selectedIndex, setSelectedIndex] = useState(0);
  const divRefs = useRef([]);

  // const [searchOriginPort, setSearchOriginPort] = useState("");
  const [orgPortCode, setOrgPortCode] = useState("");
  const [checkleave, setcheckleave] = useState("");
  // const [originPortOptionsVisible, setOriginPortOptionsVisible] =
  //   useState(false);
  // const [originPort, setOriginPort] = useState(null);
  const originPortData = useSelector((state) => state.allPort);
  const { loading, error } = useSelector((state) => state.allPort);
  const originPortDataValue = originPortData?.allportData?.result?.content;

  console.log(originPortDataValue);
  const [prevValue, setPrevValue] = useState("");
  // const [destPortOptionsVisible, setDestPortOptionsVisible] = useState(false);
  const dispatch = useDispatch();
  const filteredSeaPorts = originPortDataValue?.filter(
    (item) => item.transport_mode === "Ocean"
  );
  const filteredAirPorts = originPortDataValue?.filter(
    (item) => item.transport_mode === "Air"
  );
  const filteredCityPorts = originPortDataValue?.filter(
    (item) => item.transport_mode === "Road"
  );
  console.log(filteredSeaPorts);

  useEffect(() => {
    setOriginPort("")
  }, [])
  

  // Mock suggestions data
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

  // const handleOriginChange = (event) => {
  //   const { value } = event.target;
  //   setOrigin(value);
  // };

  // const handleOriginFocus = () => {
  //     setModalOpen(true);
  // };

  // const handleClose = () => {
  //   setModalOpen(false);
  // };

  // const handleSuggestionClick = (value) => {
  //   setOrigin(value);
  //   setModalOpen(false);
  // };

  const handleOriginPortChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setSearchOriginPort(value);
    if (value.length >= 4) {
      dispatch(allportRequest({ name: value, limits: "30" }));
      setOriginPortOptionsVisible(true);
    } else {
      setOriginPortOptionsVisible(false);
      setOriginPort(null);
    }

    if (value.length < prevValue.length) {
      console.log("prevValue.length", prevValue.length);
      setSearchOriginPort("");
      setOriginPort(null);
      setOriginPortOptionsVisible(false);
    } else {
      setSearchOriginPort(value);
    }
    setDestPortOptionsVisible(false);
    setCargoOptionsVisible(false);
  };

  const handleOriginPortSelect = (port) => {
    console.log("Port selectedlocation:", port);
    setcheckleave(port);
    // setSearchOriginPort(port?.list_value);
    // setOrgPortCode(port?.port_code);
    setOriginPortOptionsVisible(false);
    setOriginPort(port);
    // destref.current.focus()
    // setDestPortOptionsVisible(true)
    if (port?.transport_mode === "Ocean" && destPort?.transport_mode === "Air") {
      setorgerrormsg("Please select either AIR Port or City as origin");
      setSearchOriginPort("");
      setOriginPort(null);
    } else if (
      port?.transport_mode === "Air" &&
      destPort?.transport_mode === "Ocean"
    ) {
      setorgerrormsg("Please select either SEA Port or City as origin");
      setSearchOriginPort("");
      setOriginPort(null);
    } else if (port?.port_country === destPort?.port_country) {
      setorgerrormsg("Please select a different country than destination");
      setSearchOriginPort("");
      setOriginPort(null);
    } else {
      setSearchOriginPort(port?.list_value);
      setSearchOriginCode(port?.port_code);
      setorgerrormsg(null);
      destref.current.focus()
    }
  };

  const handleClose = () => {
    setOriginPort("");
    setSearchOriginPort("");
    setOriginPortOptionsVisible(false);
  };
  console.log(searchOriginPort);

  const originRef = useRef();
  console.log(originRef.current);

  useEffect(() => {
    const handler = (e) => {
      if (!originRef?.current?.contains(e.target)) {
        setOriginPortOptionsVisible(false);
      }
    };
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        setOriginPortOptionsVisible(false);
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
  console.log(orgerrormsg)

  const handleKeyDown = (event, filteredPorts) => {
    if (event.key === "ArrowUp") {
      setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : filteredPorts?.length - 1));
    } else if (event.key === "ArrowDown") {
      setSelectedIndex((prevIndex) => (prevIndex < filteredPorts?.length - 1 ? prevIndex + 1 : 0));
    } else if (event.key === "Enter") {
      if (filteredPorts?.length > 0) {
        const selectedPort = filteredPorts?.[selectedIndex];
        handleOriginPortSelect(selectedPort);
      }
    }
    else if(event.key === "Tab"){
      if (filteredPorts?.length > 0) {
        // const selectedPort = filteredPorts?.[selectedIndex];
        // handleOriginPortSelect(selectedPort);
        setOriginPortOptionsVisible(false)
        setCargoOptionsVisible(false)
      }
    }
  };

  return (
    <>
      <div
        className="column ps-2"
        style={{ display: "flex", minWidth: "29%", position: "relative" }}
      >
        <div style={{ alignContent: "center" }}>
          <Location
            style={{ width: "20px", height: "20px" }}
            className="mx-2"
          />
        </div>
        <Tooltip
          trigger={"hover"}
          title={searchOriginPort.length > 28 && searchOriginPort}
        >
          <div
            className="w-100"
          >
            <Typography
              className="bold"
              style={{
                fontSize: "14px",
                fontWeight: "700",
                lineHeight: "20px",
              }}
            >
              Origin
            </Typography>
            {originPort && (
              <CountryFlag
                countryCode={originPort.port_country}
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
              onBlur={() => setCargoOptionsVisible(false)}
              className="input-field "
              placeholder="Enter Sea/Airport, City or Zip Code"
              onKeyDown={(e) => handleKeyDown(e, originPortDataValue && [...filteredSeaPorts, ...filteredAirPorts, ...filteredCityPorts])}
              // ref={originRef}
              // onChange={handleOriginChange}
              // onClick={handleOriginFocus}
              // value={origin}
              // onBlur={() => {
              //   if (!checkleave) {
              //     setSearchOriginPort("");
              //     setOriginPortOptionsVisible(false); //this one clear the input values when mouse on leave without selectedlocation dropdowns
              //   }
              // }}
              onFocus={handleRateEngineClick}
              onChange={handleOriginPortChange}
              value={shrinkValues(searchOriginPort)}
              ref={orgref}
            />
            {/* <IoIosClose size=15  /> */}
            {searchOriginPort && (
              <IoClose
                role="button"
                style={{ position: "absolute", top: "51%", right: "20px" }}
                onClick={handleClose}
              />
            )}
            {orgerrormsg && (
              <FormHelperText style={{ color: "red" }}>
                {orgerrormsg}
              </FormHelperText>
            )}
            {originPortOptionsVisible && (
              <div
                className="outer-all-port"
                ref={originRef}
              >
                {loading ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    {/* <CircularProgress style={{ color: "red" }} /> */}
                    <img src={shipgif} width="140px" height="140px" />
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
                              onClick={() => handleOriginPortSelect(port)}
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
                              onClick={() => handleOriginPortSelect(port)}
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
                              onClick={() => handleOriginPortSelect(port)}
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

export default Origin;
