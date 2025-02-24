import React, { useState, useRef, useEffect } from "react";
// import { Typography } from "@mui/material";
// import { HiOutlineLocationMarker } from "react-icons/hi";
// import { FaArrowRightArrowLeft } from "react-icons/fa6";
// import { IoIosSearch } from "react-icons/io";
// import { RiShipFill } from "react-icons/ri";
import "./ShipmentCard.css";
import Cargo from "./cargo/Cargo";
import Origin from "./Origin/Origin";
import Destination from "./Destination/Destination";
// import { Link } from "react-router-dom";
// import Line from "../../assets/line.png";
import { SearchOutlined } from "@ant-design/icons";
import Arrow from "../../assets/arrow.png";
import { useDispatch } from "react-redux";
import { FindNewRateRequest } from "../../Redux/Actions/FindNewRateAction";
import { Tooltip } from "antd";

const ShipmentCard = ({
  setShowReselt,
  selectedCurrency,
  checkedItems,
  setCheckedItems,
  setexim,
  exim,
  setHighlightShipmentCard,
  // selectedValue,
  selectedDeliveryValue,
  insuranceValue,
  setSelectedValue,
  setSelectedDeliveryValue,
  selectedCode,
  setSelectedCode,
  selectedCode1,
  setSelectedCode1,
  originPort,
  setOriginPort,
  destPort,
  setDestPort,
  showReselt,
  selectedValue,
  toscheck,
  settoscheck,
  selectedDataToPatch,
  setorigin,
  setdes,
  UpcomingSailingsData,
  QuotationsData
}) => {
  const dispatch = useDispatch();
  const [destination] = useState("");
  const [dimmed, setdimmed] = useState(false);
  const [highlighted, setHighlighted] = useState(false);
  // const [isCargoOpen, setIsCargoOpen] = useState(false);
  // const [active, setActive] = useState(false);
  const cargoRef = useRef(null);
  const searchref = useRef()
  const nunits= useRef()
  const [originPortOptionsVisible, setOriginPortOptionsVisible] =
    useState(false);
  const [destPortOptionsVisible, setDestPortOptionsVisible] = useState(false);
  const [cargoOptionsVisible, setCargoOptionsVisible] = useState(false);
  const [searchOriginPort, setSearchOriginPort] = useState("");
  const [searchDestPort, setSearchDestPort] = useState("");
  const [searchOriginCode, setSearchOriginCode] = useState("");
  const [searchDestCode, setSearchDestCode] = useState("");
  const [finalDetails, setFinaldetails] = useState("");
  const [mode, setmode] = useState("");
  // const [exim, setexim] = useState("I");
  const [deserrormsg, setdeserrormsg] = useState(null);
  const [orgerrormsg, setorgerrormsg] = useState(null);
  const [tserrmsg, seterrmsg] = useState("");
  const [cbm, setcbm] = useState("");
  const [kg, setkg] = useState("");
  const [unit, setunits] = useState("");
  const [tosfirst, settosfirst] = useState("");
  // const [toscheck, settoscheck] = useState(false);
  const [tsDatas, settsDatas] = useState({
    package_type: "PKG",
    no_of_units: "",
    total_volume: "",
    total_weight: "",
    volume_type: "CBM",
    weight_type: "KG",
  });
  const [fclDatas, setfclDatas] = useState([
    {
      container_type: "",
      no_of_containers: null,
    },
  ]);
  const [utDatas, setutDatas] = useState([
    {
      package_type: "PKG",
      unit: "",
      height: "",
      length: "",
      width: "",
      dimensionUnit: "CM",
      weight: "",
      weightUnit: "KG",
    },
  ]);

  // const copyutDatas = [...utDatas]
  const createNewArrayWithoutPackageType = () => {
    const newArray = utDatas.map(({ package_type, ...rest }) => rest);
    return newArray;
  };

  const handleRateEngineClick = () => {
    setdimmed(true);
    setHighlighted(true);
    window.scrollTo(0,80)
  };

  console.log(UpcomingSailingsData)
  console.log(originPort)

  //for UpcomingSailingsData

  useEffect(() => {
    if(UpcomingSailingsData){
      const originPayload = {
        Transport_mode: "SEA",
        air_port_code: "",
        air_port_name: "",
        list_value: UpcomingSailingsData?.origin,
        port_code:UpcomingSailingsData?.origin_code,
        port_country:  UpcomingSailingsData?.origin_country_code,
        port_name: UpcomingSailingsData?.origin,
        type : "PORT",
        zip_code: ""
      }
      const destPayload = {
        Transport_mode: "SEA",
        air_port_code: "",
        air_port_name: "",
        list_value: UpcomingSailingsData?.destination ,
        port_code:UpcomingSailingsData?.destination_code,
        port_country:  UpcomingSailingsData?.dest_country_code,
        port_name: UpcomingSailingsData?.destination,
        type : "PORT",
        zip_code: ""
      }
      setOriginPort(originPayload)
      setDestPort(destPayload)
      setSearchOriginPort(UpcomingSailingsData?.origin)
      setSearchDestPort(UpcomingSailingsData?.destination )
      setSearchOriginCode(UpcomingSailingsData?.origin_country_code)
      setSearchDestCode(UpcomingSailingsData?.dest_country_code)
      // setCargoOptionsVisible(true)
      handleRateEngineClick()
      setCargoOptionsVisible((prev)=>!prev)
    }
  }, [UpcomingSailingsData])

  //for Quotations

  useEffect(() => {
    if(QuotationsData){
      const originPayload = {
        Transport_mode: "SEA",
        air_port_code: "",
        air_port_name: "",
        list_value: QuotationsData?.origin,
        port_code:QuotationsData?.origin_code,
        port_country:  QuotationsData?.origin_country_code,
        port_name: QuotationsData?.origin,
        type : "PORT",
        zip_code: ""
      }
      const destPayload = {
        Transport_mode: "SEA",
        air_port_code: "",
        air_port_name: "",
        list_value: QuotationsData?.destination ,
        port_code:QuotationsData?.destination_code,
        port_country:  QuotationsData?.dest_country_code,
        port_name: QuotationsData?.destination,
        type : "PORT",
        zip_code: ""
      }
      setOriginPort(originPayload)
      setDestPort(destPayload)
      setSearchOriginPort(QuotationsData?.origin)
      setSearchDestPort(QuotationsData?.destination )
      setSearchOriginCode(QuotationsData?.origin_country_code)
      setSearchDestCode(QuotationsData?.dest_country_code)
      // setCargoOptionsVisible(true)
      handleRateEngineClick()
      setCargoOptionsVisible((prev)=>!prev)
    }
  }, [QuotationsData])
  

  // useEffect(() => {
  //   if (destination && cargoRef.current) {
  //     cargoRef.current.focus();
  //   }
  // }, [destination]);

  // const handleCargoFocus = () => {
  //   setIsCargoOpen(true);
  // };
  // const handleConfirmCargo = () => {
  //   setIsCargoOpen(false);
  // };

  // const [error, seterror] = useState();
  // function extractOriginCode(input) {
  //   const regex = /\b[A-Z0-9]{6}\b/;
  //   const match = (input ?? "").match(regex);

  //   return match ? match[0] : null;
  // }
  // const inputString = selectedValue;
  // const OriginCode = "extractOriginCode(inputString)";

  let tosValue = "";

  if (exim === "I") {
    if (
      checkedItems.DestinationCharges &&
      checkedItems.originCharges &&
      checkedItems.cargoPickup &&
      checkedItems.CargoDelivery
    ) {
      tosValue = "EXW";
    } else if (
      checkedItems.DestinationCharges &&
      checkedItems.originCharges &&
      checkedItems.cargoPickup
    ) {
      tosValue = "EXW";
    } else if (checkedItems.DestinationCharges && checkedItems.cargoPickup) {
      tosValue = "EXW";
    } else if (
      checkedItems.DestinationCharges &&
      checkedItems.originCharges &&
      checkedItems.CargoDelivery
    ) {
      tosValue = "FCA";
    } else if (checkedItems.DestinationCharges && checkedItems.originCharges) {
      tosValue = "FCA";
    } else if (checkedItems.DestinationCharges && checkedItems.CargoDelivery) {
      tosValue = "FCA";
    } else if (checkedItems.DestinationCharges) {
      tosValue = "FOB";
    } else if (checkedItems.originCharges && checkedItems.cargoPickup) {
      tosValue = "EXW";
    }
    // else if (checkedItems.DestinationCharges && checkedItems.cargoPickup && !checkedItems.CargoDelivery ) {
    //   console.log("works")
    //   tosValue = "EXW";
    // }
    else if (checkedItems.originCharges) {
      tosValue = "FCA";
    } else {
      tosValue = "FOB";
    }
  } else if (exim === "E") {
    if (
      // checkedItems.originCharges &&
      checkedItems.cargoPickup &&
      checkedItems.CargoDelivery
    ) {
      tosValue = "DAP";
    } else if (
      // checkedItems.originCharges &&
      !checkedItems.cargoPickup &&
      checkedItems.CargoDelivery
    ) {
      tosValue = "DAP";
    } else if (
      // checkedItems.originCharges &&
      checkedItems.cargoPickup &&
      !checkedItems.CargoDelivery
    ) {
      tosValue = "CFR";
    } else if (checkedItems.originCharges && checkedItems.cargoPickup) {
      tosValue = "CFR";
    } else if (checkedItems.DestinationCharges && checkedItems.CargoDelivery) {
      tosValue = "DAP";
    } else if (checkedItems.originCharges) {
      tosValue = "CFR";
    } else {
      tosValue = "CFR";
    }
  }

  console.log(tosValue);

  const TOSLogic = () => {
    if (
      originPort?.type === "PORT" &&
      destPort?.type === "PORT" &&
      exim === "I"
    ) {
      settosfirst("FOB");
    } else if (
      originPort?.type === "PORT" &&
      destPort?.type === "PORT" &&
      exim === "E"
    ) {
      settosfirst("CFR");
    } else if (
      originPort?.type === "PORT" &&
      destPort?.type === "PICKUP" &&
      exim === "I"
    ) {
      settosfirst("FCA");
    } else if (
      originPort?.type === "PORT" &&
      destPort?.type === "PICKUP" &&
      exim === "E"
    ) {
      settosfirst("DAP");
    } else if (
      originPort?.type === "PICKUP" &&
      destPort?.type === "PORT" &&
      exim === "I"
    ) {
      settosfirst("EXW");
    } else if (
      originPort?.type === "PICKUP" &&
      destPort?.type === "PORT" &&
      exim === "E"
    ) {
      settosfirst("CFR");
    } else if (
      originPort?.type === "PICKUP" &&
      destPort?.type === "PICKUP" &&
      exim === "I"
    ) {
      settosfirst("EXW");
    } else if (
      originPort?.type === "PICKUP" &&
      destPort?.type === "PICKUP" &&
      exim === "E"
    ) {
      settosfirst("DAP");
    }
  };

  useEffect(() => {
    TOSLogic();
  }, [originPort, destPort, exim]);

  const inputdata = {
    freight_mode:
      (originPort && originPort?.Transport_mode === "SEA") ||
      originPort?.Transport_mode === "CITY"
        ? "S"
        : "A",
    lcl_fcl_air:
      (mode === "LCLTOTAL" || mode === "LCLUNIT") &&
      (originPort?.Transport_mode !== "AIR" ||
        destPort?.Transport_mode !== "AIR")
        ? "LCL"
        : (mode === "FCL" && originPort?.Transport_mode !== "AIR") ||
          destPort?.Transport_mode !== "AIR"
        ? "FCL"
        : originPort?.Transport_mode === "AIR" ||
          destPort?.Transport_mode === "AIR"
        ? "AIR"
        : null,
    import_export: exim,
    package_type:
      mode === "LCLTOTAL"
        ? tsDatas?.package_type
        : mode === "LCLUNIT"
        ? utDatas[0]?.package_type
        : mode === "FCL"
        ? tsDatas?.container_type
        : null,
    no_of_units:
      mode === "LCLTOTAL"
        ? tsDatas?.no_of_units
        : mode === "LCLUNIT"
        ? unit
        : 0,
    total_volume:
      mode === "LCLTOTAL"
        ? tsDatas?.total_volume.toString()
        : mode === "LCLUNIT"
        ? cbm.toString()
        : 0,
    total_weight:
      mode === "LCLTOTAL"
        ? tsDatas?.total_weight.toString()
        : mode === "LCLUNIT"
        ? kg.toString()
        : 0,
    lcl_dimensions:
      mode === "LCLUNIT" ? createNewArrayWithoutPackageType() : [],
    fcl_dimensions: mode === "FCL" ? fclDatas : [],
    volume_type:
      mode === "LCLTOTAL" ? "CBM" : mode === "LCLUNIT" ? "CBM" : null,
    weight_type: mode === "LCLTOTAL" ? "KG" : mode === "LCLUNIT" ? "KG" : null,
    origin: originPort ? originPort?.port_code: null,
    destination: destPort ? destPort?.port_code: null,
    origin_country_code: originPort ? originPort?.port_country: null,
    dest_country_code: destPort ? destPort?.port_country: null,
    // TOS: toscheck ? console.log("my",tosfirst : toscheck? console.log("k",tosValue) : null,
    TOS: !toscheck ? tosfirst : toscheck ? tosValue : null,
    // TOS: tosfirst?tosfirst:tosValue,
    is_pickup_req: checkedItems.cargoPickup ? "Y" : "N",
    pickup_place: checkedItems.cargoPickup ? selectedCode : "N",
    is_hazardous: checkedItems.NonHarzardousCargo ? "N" : "Y",
    is_stackable: checkedItems.StackableCargo ? "Y" : "N",
    is_insurance: checkedItems.CargoInsurance ? "Y" : "N",
    UID: "15085",
    currency: selectedCurrency,
  };
  console.log(tosfirst, tosValue);
  console.log(tosValue);
  console.log(inputdata);
  console.log(checkedItems);

  //This is for AirRate Search
  const inputAirData = {
    freight_mode: "A",
    lcl_fcl_air: "AIR",
    import_export: exim,
    package_type:
      mode === "LCLTOTAL"
        ? tsDatas?.package_type
        : mode === "LCLUNIT"
        ? utDatas[0]?.package_type
        : mode === "FCL"
        ? tsDatas?.container_type
        : null,
    no_of_units:
      mode === "LCLTOTAL"
        ? tsDatas?.no_of_units
        : mode === "LCLUNIT"
        ? unit
        : 0,
    total_volume:
      mode === "LCLTOTAL"
        ? tsDatas?.total_volume.toString()
        : mode === "LCLUNIT"
        ? cbm.toString()
        : 0,
    total_weight:
      mode === "LCLTOTAL"
        ? tsDatas?.total_weight.toString()
        : mode === "LCLUNIT"
        ? kg.toString()
        : 0,
    lcl_dimensions:
      mode === "LCLUNIT" ? createNewArrayWithoutPackageType() : [],
    fcl_dimensions: mode === "FCL" ? fclDatas : [],
    volume_type:
      mode === "LCLTOTAL" ? "CBM" : mode === "LCLUNIT" ? "CBM" : null,
    weight_type: mode === "LCLTOTAL" ? "KG" : mode === "LCLUNIT" ? "KG" : null,
    // origin: "DEACH",
    // origin: searchOriginCode ? searchOriginCode : null,
    // destination: searchDestCode ? searchDestCode : null,
    origin: originPort ? originPort?.air_port_code : null,
    destination: destPort ? destPort?.air_port_code : null,
    origin_country_code: originPort ? originPort?.port_country : null,
    dest_country_code: destPort ? destPort?.port_country : null,
    TOS: tosValue,
    is_pickup_req: checkedItems.cargoPickup ? "Y" : "N",
    is_hazardous: checkedItems.NonHarzardousCargo ? "N" : "Y",
    is_stackable: checkedItems.StackableCargo ? "Y" : "N",
    is_insurance: checkedItems.CargoInsurance ? "Y" : "N",
    UID: "15085",
    currency: selectedCurrency,
    is_delivery_req: "N",
    is_export_added: "N",
    is_import_added: "N",
  };

  const air = {
    TOS: "FOB",
    UID: "15085",
    currency: "USD",
    dest_country_code: "AE",
    destination: "DXB",
    fcl_dimensions: [],
    freight_mode: "A",
    import_export: "I",
    is_delivery_req: "N",
    is_export_added: "N",
    is_hazardous: "N",
    is_import_added: "N",
    is_insurance: "N",
    is_pickup_req: "N",
    is_stackable: "Y",
    lcl_dimensions: [],
    lcl_fcl_air: "AIR",
    no_of_units: 1,
    origin: "BOM",
    origin_country_code: "IN",
    package_type: "PKG",
    total_volume: "5",
    total_weight: "100",
    volume_type: "CBM",
    weight_type: "KG",
  };

  const initialChecks = {
    originCharges: false,
    exportClearance: false,
    cargoPickup: false,
    internationalFreight: true,
    DestinationCharges: false,
    ImportClearance: false,
    CargoDelivery: false,
    CargoInsurance: false,
    StackableCargo: true,
    NonHarzardousCargo: true,
  };

  console.log(originPort);
  const handleSearch = () => {
    // settoscheck(false)
    // setdimmed(false)
    if (originPort && destPort && finalDetails) {
      setShowReselt(true);
      setHighlighted(false);
      settoscheck(false);
      setdimmed(false)
      console.log("mounted in");
      setCheckedItems(initialChecks);
      setorigin(originPort?.port_name);
      setdes(destPort?.port_name);
      // settoscheck(false);
      // dispatch(FindNewRateRequest({ inputdata }));

      // if(tosfirst === "FOB" && exim === "I" && originPort?.type === "PORT" && destPort?.type === "PORT" ){
      //     setCheckedItems((prev)=>{
      //       return {...prev,DestinationCharges:true}
      //     })
      // }
      setSelectedValue(originPort && originPort?.zip_code);
      setSelectedDeliveryValue(destPort && destPort?.zip_code);
      // setSelectedCode(originPort && originPort?.zip_code)
      // setSelectedCode1(destPort && destPort?.zip_code)
      // if(originPort && originPort?.Transport_mode === "CITY"){
      //   setCheckedItems((prev) => {
      //         return { ...prev, originCharges: true,cargoPickup:true };
      //       });
      // }
      // if(destPort && destPort?.Transport_mode === "CITY"){
      //   setCheckedItems((prev)=>{
      //     return { ...prev, DestinationCharges: true,CargoDelivery:true };
      //   })
      // }
      // if(exim && exim === "I" && !checkedItems?.DestinationCharges){
      //   setCheckedItems((prev)=>{
      //     return { ...prev, DestinationCharges: true };
      //   })
      // }
      // if(exim && exim === "E" && !checkedItems?.originCharges){
      //   setCheckedItems((prev)=>{
      //     return { ...prev, originCharges: true };
      //   })
      // }

      if (
        tosfirst === "FOB" &&
        originPort?.type === "PORT" &&
        destPort?.type === "PORT" &&
        exim === "I"
      ) {
        setCheckedItems((prev) => {
          return { ...prev, DestinationCharges: true };
        });
      } else if (
        tosfirst === "FCA" &&
        originPort?.type === "PORT" &&
        destPort?.type === "PORT" &&
        exim === "I"
      ) {
        setCheckedItems((prev) => {
          return { ...prev, DestinationCharges: true, originCharges: true };
        });
      } else if (
        tosfirst === "CFR" &&
        originPort?.type === "PORT" &&
        destPort?.type === "PORT" &&
        exim === "E"
      ) {
        setCheckedItems((prev) => {
          return { ...prev, originCharges: true };
        });
      } else if (
        tosfirst === "FOB" &&
        originPort?.type === "PORT" &&
        destPort?.type === "PICKUP" &&
        exim === "I"
      ) {
        setCheckedItems((prev) => {
          return { ...prev, DestinationCharges: true, CargoDelivery: true };
        });
      } else if (
        tosfirst === "FCA" &&
        originPort?.type === "PORT" &&
        destPort?.type === "PICKUP" &&
        exim === "I"
      ) {
        setCheckedItems((prev) => {
          return {
            ...prev,
            DestinationCharges: true,
            CargoDelivery: true,
            originCharges: true,
          };
        });
      } else if (
        tosfirst === "EXW" &&
        originPort?.type === "PICKUP" &&
        destPort?.type === "PORT" &&
        exim === "I"
      ) {
        setCheckedItems((prev) => {
          return {
            ...prev,
            DestinationCharges: true,
            originCharges: true,
            cargoPickup: true,
          };
        });
      } else if (
        tosfirst === "CFR" &&
        originPort?.type === "PICKUP" &&
        destPort?.type === "PORT" &&
        exim === "E"
      ) {
        setCheckedItems((prev) => {
          return { ...prev, originCharges: true, cargoPickup: true };
        });
      } else if (
        tosfirst === "EXW" &&
        originPort?.type === "PICKUP" &&
        destPort?.type === "PICKUP" &&
        exim === "I"
      ) {
        setCheckedItems((prev) => {
          return {
            ...prev,
            DestinationCharges: true,
            originCharges: true,
            cargoPickup: true,
            CargoDelivery: true,
          };
        });
      } else if (
        tosfirst === "DAP" &&
        originPort?.type === "PICKUP" &&
        destPort?.type === "PICKUP" &&
        exim === "E"
      ) {
        setCheckedItems((prev) => {
          return {
            ...prev,
            DestinationCharges: true,
            originCharges: true,
            cargoPickup: true,
            CargoDelivery: true,
          };
        });
      } else if (
        tosfirst === "DAP" &&
        originPort?.type === "PORT" &&
        destPort?.type === "PICKUP" &&
        exim === "E"
      ) {
        setCheckedItems((prev) => {
          return {
            ...prev,
            DestinationCharges: true,
            originCharges: false,
            cargoPickup: false,
            CargoDelivery: true,
          };
        });
      } else if (
        tosfirst === "DDP" &&
        originPort?.type === "PICKUP" &&
        destPort?.type === "PICKUP" &&
        exim === "E"
      ) {
        setCheckedItems((prev) => {
          return {
            ...prev,
            DestinationCharges: true,
            originCharges: true,
            cargoPickup: true,
            CargoDelivery: true,
          };
        });
      }
      dispatch(FindNewRateRequest({ inputdata }));

      // settoscheck(true);
      // dispatch(FindNewRateRequest({ air }));
    } else {
      if (!originPort) {
        setorgerrormsg("Please add Origin");
      } else {
        setorgerrormsg("");
      }
      if (!destPort) {
        setdeserrormsg("Please add Destination");
      } else {
        setdeserrormsg("");
      }
      if (!finalDetails) {
        seterrmsg("Please add Cargo details");
      } else {
        seterrmsg("");
      }
    }
    setHighlightShipmentCard(false);
  };
  const handleSwap = () => {
    // console.log(initialChecks)
    // console.log(checkedItems)
    // setCheckedItems(initialChecks)
    if (originPort && destPort && searchOriginPort && searchDestPort) {
      settoscheck(false);
      // setCheckedItems(initialChecks)
      setSearchDestPort(searchOriginPort);
      setSearchOriginPort(searchDestPort);
      setSearchDestCode(searchOriginCode);
      setSearchOriginCode(searchDestCode);
      setDestPort(originPort);
      setOriginPort(destPort);
      setexim((prev) => (prev === "I" ? "E" : "I"));
      // setutexim((prev) => (prev === "I" ? "E" : "I"));
      // setfclexim((prev) => (prev === "I" ? "E" : "I"));
    } else if (originPort && searchOriginPort) {
      setSearchDestPort(searchOriginPort);
      setDestPort(originPort);
      setSearchOriginPort(searchDestPort)
      setOriginPort(destPort)
      // setOriginPortOptionsVisible(false)
    } else if (destPort && searchDestPort) {
      setSearchOriginPort(searchDestPort);
      setOriginPort(destPort);
      setSearchDestPort(searchOriginPort);
      setDestPort(originPort);
      // setOriginPortOptionsVisible(false)
    } else {
      if (searchOriginPort && !originPort) {
        setSearchOriginPort("");
        setOriginPort(false);
        setOriginPortOptionsVisible(false);
      } else if (searchDestPort && !destPort) {
        setSearchDestPort("");
        setDestPort(false);
        setDestPortOptionsVisible(false);
      }
    }
  };

  // console.log(searchDestCode);
  // console.log(finalDetails);
  // console.log(mode);

  useEffect(() => {
    if (toscheck) {
      if (exim === "I") {
        setCheckedItems({
          ...checkedItems,
          DestinationCharges: true,
          originCharges: false,
        });
      } else if (exim === "E") {
        setCheckedItems({
          ...checkedItems,
          originCharges: true,
          DestinationCharges: false,
        });
      }
    }
  }, [exim]);

  if (checkedItems.cargoPickup === false) {
    setSelectedCode(false);
  }
  if (checkedItems.CargoDelivery === false) {
    setSelectedCode1(false);
  }

  console.log(selectedCode, selectedCode1);
  const hasPageBeenrendered = useRef(false);

  useEffect(() => {
    if (hasPageBeenrendered.current) {
      console.log("rendred");
      if (
        (checkedItems.cargoPickup && !selectedCode) ||
        (checkedItems.CargoDelivery &&
          // !selectedDeliveryValue &&
          !selectedCode1) ||
        !showReselt
      ) {
        return;
      } else if (toscheck) {
        console.log("ren");
        dispatch(FindNewRateRequest({ inputdata }));
      }
      // if(!checkedItems.CargoDelivery){
      //   setSelectedCode1(false)
      // }
    }

    hasPageBeenrendered.current = true;
  }, [
    selectedCurrency,
    checkedItems.originCharges && checkedItems.cargoPickup,
    checkedItems.DestinationCharges && checkedItems.CargoDelivery,
    checkedItems.originCharges,
    checkedItems.DestinationCharges,
    checkedItems.exportClearance,
    checkedItems.ImportClearance,
    checkedItems.StackableCargo,
    checkedItems.NonHarzardousCargo,
    selectedCode && checkedItems.cargoPickup,
    insuranceValue,
    // selectedValue,
    selectedCode1 && checkedItems.CargoDelivery,
    // selectedCode1,
  ]);

  console.log("tos", tosValue);
  console.log(selectedCode, selectedCode1);
  console.log(selectedValue, selectedDeliveryValue);
  console.log(hasPageBeenrendered);

  const shrinkValues = (text) => {
    if (text?.length <= 28) {
      return text;
    } else {
      return text?.slice(0, 27).trim().split("").join("") + "...";
    }
  };
  const destref = useRef();
  const orgref = useRef()

  // useEffect(() => {
  //   const handler = (e) => {
  //     console.log(e.target,searchref?.current)
  //     if (searchref?.current?.contains(e.target)) {  
  //       console.log("its worked")
  //       setdimmed(false);
  //       setHighlighted(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handler);
  //   // document.addEventListener("keydown", handleEscapeKey);

  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //     // document.removeEventListener("keydown", handleEscapeKey);
  //   };
  // })
  

  return (
    <div style={{ maxWidth: "1255px" }} className="mx-auto">
      {dimmed ?(
        <div
          className="dimmeds-background"
          onClick={() => setdimmed(false)}
        ></div>
      ):null}
      <div
        className={`card shadow rate-engine-box ${
          highlighted ? "highlighted" : ""
        }`}
        style={{
          minWidth: "1255px",
          border: "1px solid #E7EAF0",
          borderRadius: "8px",
        }}
        // onClick={()=>handleRateEngineClick()}
      >
        <div className="card-body d-flex p-0" style={{ height: "102px" }}>
          <Origin
            setOriginPortOptionsVisible={setOriginPortOptionsVisible}
            originPortOptionsVisible={originPortOptionsVisible}
            setDestPortOptionsVisible={setDestPortOptionsVisible}
            setCargoOptionsVisible={setCargoOptionsVisible}
            originPort={originPort}
            setOriginPort={setOriginPort}
            destPort={destPort}
            setSearchOriginPort={setSearchOriginPort}
            searchOriginPort={searchOriginPort}
            setSearchOriginCode={setSearchOriginCode}
            searchOriginCode={searchOriginCode}
            orgerrormsg={orgerrormsg}
            setorgerrormsg={setorgerrormsg}
            shrinkValues={shrinkValues}
            selectedDataToPatch={selectedDataToPatch}
            destref={destref}
            orgref={orgref}
            handleRateEngineClick={handleRateEngineClick}
          />
          <div
            className="align-content-center ps-2"
            style={{ minWidth: "3.03%", zIndex:"10",position:"relative" }}
            
          >
            <img
              src={Arrow}
              role="button"
              onClick={handleSwap}
              width="26px"
              height="26px"
              style={{
                alignContent: "center",
                margin: "auto",
                alignSelf: "center",
               
              }}
            />
            <div style={{ position:"absolute",top:"30%",left:"50%",borderRight:"3px solid rgba(245, 247, 249, 1)",height:"42px",width:"2px",zIndex:"-1"}}>

            </div>
          </div>
          <Destination
            setOriginPortOptionsVisible={setOriginPortOptionsVisible}
            destPortOptionsVisible={destPortOptionsVisible}
            setDestPortOptionsVisible={setDestPortOptionsVisible}
            setCargoOptionsVisible={setCargoOptionsVisible}
            destPort={destPort}
            setDestPort={setDestPort}
            originPort={originPort}
            setSearchDestPort={setSearchDestPort}
            searchDestPort={searchDestPort}
            setSearchDestCode={setSearchDestCode}
            searchDestCode={searchDestCode}
            deserrormsg={deserrormsg}
            setdeserrormsg={setdeserrormsg}
            shrinkValues={shrinkValues}
            selectedDataToPatch={selectedDataToPatch}
            destref={destref}
            orgref={orgref}
            handleRateEngineClick={handleRateEngineClick}
            nunits={nunits}
          />
          {/* <div className="icon">
            <div className="divider"></div>
          </div> */}
          <Cargo
            cargoOptionsVisible={cargoOptionsVisible}
            setCargoOptionsVisible={setCargoOptionsVisible}
            setFinaldetails={setFinaldetails}
            exim={exim}
            setexim={setexim}
            setmode={setmode}
            tserrmsg={tserrmsg}
            seterrmsg={seterrmsg}
            // utexim={utexim}
            // setutexim={setutexim}
            // fclexim={fclexim}
            // setfclexim={setfclexim}
            tsDatas={tsDatas}
            settsDatas={settsDatas}
            fclDatas={fclDatas}
            setfclDatas={setfclDatas}
            utDatas={utDatas}
            setutDatas={setutDatas}
            cbm={cbm}
            setcbm={setcbm}
            kg={kg}
            setkg={setkg}
            unit={unit}
            setunits={setunits}
            originPort={originPort}
            destPort={destPort}
            setDestPortOptionsVisible={setDestPortOptionsVisible}
            searchref={searchref}
            handleRateEngineClick={handleRateEngineClick}
            nunits ={nunits}
          />
          {/* Search button */}
          <div
            style={{ minWidth: "5%" }}
            className="d-flex align-content-center justify-content-around align-items-center"
            onClick={handleSearch}
            // ref={searchref}
            // tabIndex={0}
            onKeyDown={handleSearch}
          >
            <div style={{ alignContent: "center" }}>
              <div
                className="px-3 search_focus"
                style={{
                  backgroundColor: "#0DA3DE",
                  fontWeight: "900",
                  borderRadius: "8px",
                  height: "52px",
                  color: "white",
                  alignContent: "center ",
                  alignItems: "center",
                  // zIndex:dimmed && "1000"
                }}
                ref={searchref}
                role="button"
                tabIndex={0}
              >
                <SearchOutlined
                  width="20px"
                  style={{
                    fontWeight: "700",
                    alignSelf: "center",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                />
              </div>
            </div>
            {/* <div className="align-content-center ">
              <img src={Line} />
            </div> */}
            {/* <div
              className="d-flex align-content-center justify-content-start pe-4"
              style={{alignContent:'center'}}
            >
              
              <Link to="/">
                <button
                  style={{
                    backgroundColor: "rgba(240, 30, 30, 1)",
                    color: "white",
                    maxWidth: "150px",
                   
                    borderRadius: "5px",
                    padding: "8px",
                    border: "none",
                    alignSelf:'center'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "23px",
                    }}
                  >
                    Quick Booking
                  </Typography>
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* {isCargoOpen && (
        <div className="overlay">
          <div className="suggestions-cargo cargo-port">
            <Cargo onClose={handleConfirmCargo} />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ShipmentCard;
