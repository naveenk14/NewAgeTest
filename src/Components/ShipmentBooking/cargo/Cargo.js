import React, { useState, useRef, useEffect } from "react";
import { FormHelperText, Typography } from "@mui/material";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Modal from "@mui/material/Modal";
import "../ShipmentCard.css";
import CargoDetails from "./CargoDetails";
import { ReactComponent as Ship } from "../../../assets/cargo.8d7c215b.svg";
import { Dropdown } from "primereact/dropdown";
import { IoClose } from "react-icons/io5";
import { containerpackRequest } from "../../../Redux/Actions/ContainerPackAction";
import { useDispatch } from "react-redux";

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

const Cargo = ({
  setCargoOptionsVisible,
  setDestPortOptionsVisible,
  cargoOptionsVisible,
  exim,
  setexim,
  setFinaldetails,
  setmode,
  tserrmsg,
  seterrmsg,
  // fclexim,
  // setfclexim,
  // utexim,
  // setutexim,
  tsDatas,
  settsDatas,
  fclDatas,
  setfclDatas,
  utDatas,
  setutDatas,
  cbm,
  setcbm,
  kg,
  setkg,
  unit,
  setunits,
  originPort,
  destPort,
  searchref,
  handleRateEngineClick,
  nunits
}) => {
  const [lastsaved, setlastsaved] = useState("");
  const [activeIndex, setactiveIndex] = useState(0);
  const [cargo, setCargo] = useState("");
  const [showcargo, setshowcargo] = useState(false);
  const [isByTotalShipmentOpen, setIsByTotalShipmentOpen] = useState(true);
  const [isByUnitTypeOpen, setIsByUnitTypeOpen] = useState(false);
  // const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const cargoRef = useRef();
  const carref = useRef();
  console.log(cargoRef.current);

  useEffect(() => {
    const handler = (e) => {
      console.log(e.target.className);
      if (
        !cargoRef?.current?.contains(e.target) &&
        !carref?.current.contains(e.target) &&
        e.target.className !==
          /*"MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root"*/ "MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters Mui-selected MuiMenuItem-root MuiMenuItem-gutters Mui-selected css-1km1ehz" &&
        e.target.className !==
          /*"MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters Mui-selected MuiMenuItem-root MuiMenuItem-gutters Mui-selected css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root"*/ "MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-1km1ehz" &&
        e.target.className !==
          /*"MuiBackdrop-root MuiBackdrop-invisible MuiModal-backdrop css-g3hgs1-MuiBackdrop-root-MuiModal-backdrop"*/ "MuiBackdrop-root MuiBackdrop-invisible MuiModal-backdrop css-esi9ax" 
      ) {
        console.log("success");
        setCargoOptionsVisible(false);
      }
    };
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        setCargoOptionsVisible(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [setCargoOptionsVisible]);

  // const handleCargoChange = (event) => {
  //   const { value } = event.target;
  //   setCargo(value);
  // };

  const handleCargoFocus = () => {
    setDestPortOptionsVisible(false);
    setCargoOptionsVisible(true);
  };

  // const handleCloseModal = () => {
  //   setModalOpen(false);
  // };

  //This is for total shipment

  // const [tsDatas, settsDatas] = useState({
  //   package_type: "",
  //   no_of_units: "",
  //   total_volume: "",
  //   total_weight: "",
  //   volume_type: "CBM",
  //   weight_type: "KG",
  // });

  const [errors, seterrors] = useState({
    no_of_units: false,
    total_volume: false,
    total_weight: false,
  });

  //This is for Unit Shipment

  const [utclickedId, setutclickedId] = useState([0]);

  //this is for fcl

  // const [fclinputFields, setfclInputFields] = useState( [{}]
  // );
  // const [fclsaveddatas, setfclsaveddatas] = useState([]
  // );
  // const [fclediteddata, setfclediteddata] = useState({});
  // const [fcleditedId, setfcleditedId] = useState("");
  const [clickedId, setclickedId] = useState([0]);

  // const [fclerrors, setfclerrors] = useState({
  //     no_of_containers: false,
  //     container_type:false,
  //   }
  // );
  // const [fclediterrors, setfclediterrors] = useState({
  //   no_of_containers: false,
  // });

  //This is for error

  const handleClose = () => {
    setCargoOptionsVisible(false);
    setFinaldetails("");
    setCargo("");
    setmode("");
    setlastsaved("LCLTOTAL");
  };

  console.log(lastsaved);

  // useEffect(() => {
  //   dispatch(containerpackRequest())
  //   console.log("dis")
  // }, [])

  useEffect(() => {
    if (lastsaved === "LCLTOTAL") {
      setIsByUnitTypeOpen(false);
      setIsByTotalShipmentOpen(true);
      setactiveIndex(0);
    } else if (lastsaved === "LCLUNIT") {
      setIsByUnitTypeOpen(true);
      setIsByTotalShipmentOpen(false);
      setactiveIndex(0);
    } else if (lastsaved === "FCL") {
      // setIsByUnitTypeOpen(false);
      // setIsByTotalShipmentOpen(false);
      setactiveIndex(1);
    }
  }, [lastsaved]);
  console.log(lastsaved);

  // useEffect(() => {
  //   setshowcargo("")
  // }, [activeIndex])

  return (
    <>
      <div
        className="column "
        ref={carref}
        // onClick={() => setCargoOptionsVisible((prev) => !prev)}
        style={{ display: "flex", minWidth: "33%", position: "relative" }}
      >
        <div className="align-content-center">
          <Ship style={{ width: "20px", height: "20px" }} className="mx-2" />
        </div>
        <div className="w-100">
          <Typography
            className="fw-bold"
            style={{ fontSize: "14px", fontWeight: "700", lineHeight: "20px" }}
          >
            Cargo
          </Typography>
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
            placeholder="Enter your Cargo details"
            // ref={cargoRef}
            // onChange={handleCargoChange}
            onFocus={() => {
              handleRateEngineClick();
              // setCargoOptionsVisible(true);
            }}
            // onBlur={()=>setCargoOptionsVisible(false)}
            onClick={() => setCargoOptionsVisible((prev) => !prev)}
            value={showcargo ? cargo : ""}
            readOnly
            // tabIndex={0}
          />
          {/* <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                editable placeholder="Enter your Cargo details" className="w-full md:w-14rem" /> */}
          {cargo && (
            <IoClose
              role="button"
              style={{ position: "absolute", top: "51%", right: "20px" }}
              onClick={handleClose}
            />
          )}
          {tserrmsg && (
            <FormHelperText
              style={{
                color: "red",
              }}
            >
              {tserrmsg}
            </FormHelperText>
          )}
          {cargoOptionsVisible && (
            <div className="outer-cargo-port" ref={cargoRef}>
              <CargoDetails
                setCargo={setCargo}
                setCargoOptionsVisible={setCargoOptionsVisible}
                seterrmsg={seterrmsg}
                errors={errors}
                seterrors={seterrors}
                tsDatas={tsDatas}
                settsDatas={settsDatas}
                exim={exim}
                setexim={setexim}
                setFinaldetails={setFinaldetails}
                setmode={setmode}
                originPort={originPort}
                destPort={destPort}
                // utexim={utexim}
                // setutexim={setutexim}
                // fclexim={fclexim}
                // setfclexim={setfclexim}
                setshowcargo={setshowcargo}
                // inputFields={inputFields}
                // setInputFields={setInputFields}
                // saveddatas={saveddatas}
                // setsaveddatas={setsaveddatas}
                // editeddata={editeddata}
                // setediteddata={setediteddata}
                // editedId={editedId}
                // seteditedId={seteditedId}
                // uterrors={uterrors}
                // setuterrors={setuterrors}
                // utediterrors={utediterrors}
                // setutediterrors={setutediterrors}
                utDatas={utDatas}
                setutDatas={setutDatas}
                utclickedId={utclickedId}
                setutclickedId={setutclickedId}
                // fclinputFields={fclinputFields}
                // setfclInputFields={ setfclInputFields}
                // fclsaveddatas={fclsaveddatas}
                // setfclsaveddatas={setfclsaveddatas}
                // fclediteddata={fclediteddata}
                // setfclediteddata={setfclediteddata}
                // fcleditedId={fcleditedId}
                // setfcleditedId={setfcleditedId}
                fclDatas={fclDatas}
                setfclDatas={setfclDatas}
                clickedId={clickedId}
                setclickedId={setclickedId}
                // fclerrors={fclerrors}
                // setfclerrors={setfclerrors}
                // fclediterrors={fclediterrors}
                // setfclediterrors={setfclediterrors}
                cargo={cargo}
                showcargo={showcargo}
                setlastsaved={setlastsaved}
                lastsaved={lastsaved}
                activeIndex={activeIndex}
                setactiveIndex={setactiveIndex}
                isByTotalShipmentOpen={isByTotalShipmentOpen}
                setIsByTotalShipmentOpen={setIsByTotalShipmentOpen}
                isByUnitTypeOpen={isByUnitTypeOpen}
                setIsByUnitTypeOpen={setIsByUnitTypeOpen}
                cbm={cbm}
                setcbm={setcbm}
                kg={kg}
                setkg={setkg}
                unit={unit}
                setunits={setunits}
                searchref={searchref}
                nunits={nunits}
              />
            </div>
          )}
        </div>
      </div>

      {/* <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{top:'50%', left:'50%'}}
      >
        <CargoDetails onClose={handleCloseModal} />
      </Modal> */}
    </>
  );
};

export default Cargo;
