import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ReactComponent as Location } from "../../../assets/location.svg";
import { Typography } from "@mui/material";
import { portRequest } from "../../../Redux/Actions/PortAction";
import "./Port.css";
import CountryFlag from "../../Core-Components/CountryFlag";
import { Col, Row } from "antd";
import { opensailingRequest } from "../../../Redux/Actions/OpneSailingAction";
import { CircularProgress, Box } from "@mui/material";
import { Select, Menu } from "antd";
import { CalendarOutlined, CaretDownOutlined } from "@ant-design/icons";
import shipgif from '../../../assets/shipnxtgif.gif'
import anchor from '../../../assets/anchor.svg'
import { AiOutlineSwap } from "react-icons/ai";

const { Option } = Select;

export const Port = () => {
  const [searchOriginPort, setSearchOriginPort] = useState("");
  const [orgPortCode, setOrgPortCode] = useState("");
  const [desPortCode, setDesPortCode] = useState("");
  const [searchDestPort, setSearchDestPort] = useState("");
  const [originPort, setOriginPort] = useState(null);
  const [destPort, setDestPort] = useState(null);
    const [originPortOptionsVisible, setOriginPortOptionsVisible] =
      useState(false);
  const [destPortOptionsVisible, setDestPortOptionsVisible] = useState(false);
  const outerRef = useRef(null);
  const [selectedVolume, setSelectedVolume] = useState("LCL");
  const volume = ["FCL", "LCL", "AIR"];
  const originPortData = useSelector((state) => state.Port);
  console.log(originPortData)
  const { loading, error } = useSelector((state) => state.Port);
  const originPortDataValue = originPortData?.portData?.result?.content;
  console.log("originPortvalue", originPortDataValue);
  const [prevValue, setPrevValue] = useState("");
  const dispatch = useDispatch();
  const handleVolumeChange = (volume) => {
    setSelectedVolume(volume);
  };
  const handleOriginPortChange = (event) => {
    const { value } = event.target;
    setSearchOriginPort(value);
    if (value.length >= 4) {
      dispatch(portRequest({ name: value, limits: "4" }));
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
  };

  const handleDestPortChange = (event) => {
    const { value } = event.target;
    setSearchDestPort(value);
    if (value.length >= 4) {
      dispatch(portRequest({ name: value, limits: "4" }));
      setDestPortOptionsVisible(true);
    } else {
      setDestPortOptionsVisible(false);
      setDestPort(null);
    }
    setOriginPortOptionsVisible(false);
  };

  const handleOriginPortSelect = (port) => {
    console.log("Port selected:", port);
    setSearchOriginPort(port?.port_name);
    setOrgPortCode(port?.port_code);
    setOriginPortOptionsVisible(false);
    setOriginPort(port);
  };
  const handleDestPortSelect = (port) => {
    console.log("Dest selected:", port);
    setSearchDestPort(port?.port_name);
    setDesPortCode(port?.port_code);
    setDestPortOptionsVisible(false);
    setDestPort(port);
  };

  useEffect(() => {
    if (searchOriginPort && searchDestPort) {
      console.log(
        "API call with origin and destination ports:",
        searchOriginPort,
        searchDestPort
      );

      const originName = searchOriginPort;
      const destinationName = searchDestPort;

      dispatch(opensailingRequest({ originName, destinationName }));
    }
  }, [orgPortCode, desPortCode]);

  const handleClickOutside = (event) => {
    console.log("clicked");
    if (outerRef.current && !outerRef.current.contains(event.target)) {
      setDestPortOptionsVisible(false);
      setOriginPortOptionsVisible(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSwap =()=>{
    setSearchDestPort(searchOriginPort)
    setSearchOriginPort(searchDestPort)
    setDesPortCode(orgPortCode)
    setOrgPortCode(desPortCode)
    setOriginPort(destPort)
    setDestPort(originPort)
} 

  return (
    <div
      ref={outerRef}
      className=" w-100 d-flex justify-content-between sailing-heading"
      style={{
        backgroundColor: "#F8FAFC",
        borderBottom: "1px solid #E7EAF0",
        padding: "0 20px 0 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "850px",
          justifyContent: "space-between",
        }}
      >
        <Typography
          className=" "
          style={{ fontSize: "15px", fontWeight: "500",color:"#181E25" }}
        >
          Upcoming Sailings
        </Typography>{" "}
        <div
          className="d-flex my-2 rounded-1 focusSearch"
          style={{
            border: "1px solid #E7EAF0",
            padding: "6px 10px",
            justifyContent: "space-between",
            background: "white",
            position: "relative",
            width: "300px",
            // "&:focusWithin":{
            //   borderColor:"#FCE2D5",
            //   boxShadow:"0 0 0 2px #FCE2D5",
            // }
          }}
        >
          <Location className="pt-1" style={{ width: "22px" }} />
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "13px",
              color: "#495A6E",
              padding: "3px",
            }}
          >
            Origin:{" "}
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
              width: "100%",
              fontWeight: "400",
              fontSize: "13px",
              position: "relative",
            }}
            placeholder="Enter Port"
            className="placeholder-color focusSearch-input"
            onChange={handleOriginPortChange}
            value={searchOriginPort}
            />


          <ArrowDropDownIcon />
          {originPortOptionsVisible && (
            <div className="outer-port">
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
                <div className="inner-port">
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
                      Sea Port
                    </p>
                  </div>
                  <div>
                    {originPortDataValue?.map((port, index) => (
                      <div
                        key={index}
                        onClick={() => handleOriginPortSelect(port)}
                        className=""
                      >
                        <Row className="justify-content-between p-2 port-content">
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
                                  {port?.port_name}-{port?.air_port_code}
                                </p>
                                <p className="portCountry">
                                  {port?.port_country}
                                </p>
                              </div>
                            </Row>
                          </Col>
                          <Col style={{ marginRight: "20px" }}>
                            <img
                              src={anchor}
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
            </div>
          )}{" "}
        </div>
        <AiOutlineSwap role="button" className="mx-2" onClick={()=>handleSwap()} />
        <div
          className="d-flex my-2 rounded-1 focusSearch"
          style={{
            border: "1px solid #E7EAF0",
            padding: "6px 10px",
            justifyContent: "space-between",
            background: "white",
            position: "relative",
            width: "330px",
          }}
        >
          <Location className="pt-1" style={{ width: "22px" }} />
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "13px",
              color: "#495A6E",
              padding: "3px",
            }}
          >
            Destination:{" "}
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
              width: "100%",
              fontWeight: "400",
              fontSize: "13px",
            }}
            placeholder="Enter Port"
            className="placeholder-color focusSearch-input"
            onChange={handleDestPortChange}
            value={searchDestPort}
          />
          <ArrowDropDownIcon />
          {destPortOptionsVisible && (
            <div className="outer-dest-port">
              {loading ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "200px",
                  }}
                >
                  {/* <CircularProgress style={{ color: "red" }} /> */}
                  <img src={shipgif} width="140px" height="140px" />
                </Box>
              ) : (
                <div className="inner-port">
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
                      Sea Port
                    </p>
                  </div>
                  <div>
                    {originPortDataValue?.map((port, index) => (
                      <div
                        key={index}
                        onClick={() => handleDestPortSelect(port)}
                        className=""
                      >
                        <Row className="justify-content-between p-2 port-content">
                          <Col className="d-flex">
                            <Row className=" gap-2">
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
                              src={anchor}
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
            </div>
          )}{" "}
        </div>
      </div>
      <div className="my-2" style={{ float: "left" }}>
        <Select
          defaultValue={selectedVolume}
          className=""
          style={{ width: 80, height:40,margin:"8px 0"}}
          onChange={handleVolumeChange}
          suffixIcon={<CaretDownOutlined style={{ color: "#67788E" }}/>}
          
        >
          {volume.map((vol, index) => (
            <Option key={index} value={vol} disabled={vol !== 'LCL'}>
              {vol}
            </Option>
          ))}
        </Select>
    </div>
    </div>
  );
};
