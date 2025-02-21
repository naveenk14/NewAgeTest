import React from "react";
import Map from "./Map/Map";
import BookingTabs from "./ShipmentTable/BookingTabs";
import "./ShipBookingTabs.css";
import UpcomingSailings from "../Dashboard/Upcoming/UpcomingSailings";
import uil_globe from "../../assets/NewGlobeG.svg";
import ph_table from "../../assets/NewListB.svg";
import globBlack from "../../assets/NewGlobeB.svg";
import listGray from "../../assets/NewListG.svg";

const ShipmentsHome = ({ showmap, setShowmap, showText, setShowText,setOriginPort,setDestPort }) => {
  const haddleShowMap = () => {
    setShowmap(true);
  };
  const haddleCloseMap = () => {
    setShowmap(false);
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgb(248, 250, 252)",
      }}
    >
      <div style={{ backgroundColor: "white" }}>
        <div style={{ width: "1255px" }} className="shipmentIndex pb-4 mx-auto">
          {!showText ? (
            showmap ? (
              <div className="py-4 d-flex justify-content-end gap-1">
                <div style={{ cursor: "pointer" }}>
                  <img
                    src={listGray}
                    onClick={haddleCloseMap}
                    width="18px"
                    height="14px"
                  />
                </div>
                <div style={{ cursor: "pointer" }}>
                  <img
                    src={globBlack}
                    onClick={haddleShowMap}
                    width="15px"
                    height="15px"
                  />
                </div>
              </div>
            ) : (
              <div className="py-4 d-flex justify-content-end gap-1">
                <div style={{ cursor: "pointer" }}>
                  <img src={ph_table} onClick={haddleCloseMap} />
                </div>
                <div style={{ cursor: "pointer" }}>
                  <img src={uil_globe} onClick={haddleShowMap} />
                </div>
              </div>
            )
          ) : (
            ""
          )}
          {showText ? "" : showmap && <Map />}
        </div>
      </div>

      {!showText ? (
        <div style={{ backgroundColor: "white", height: "175px" }}></div>
      ) : (
        <div style={{ backgroundColor: "white", height: "145px" }}></div>
      )}
      {!showText ? (
        <div
          style={{ width: "1255px", marginTop: "-177px" }}
          className="mb-4 mx-auto"
        >
          <BookingTabs showText={showText} setShowText={setShowText} />
        </div>
      ) : (
        <div
          style={{ width: "1255px", marginTop: "-235px" }}
          className="mb-4 mx-auto"
        >
          <BookingTabs showText={showText} setShowText={setShowText} setShowmap={setShowmap}/>
        </div>
      )}
      <div style={{ width: "1255px" }} className="shipmentIndex pb-4 mx-auto">
        {showText ? (
          ""
        ) : (
          <div style={{ height: "90v" }}>
            {" "}
            <UpcomingSailings
              setOriginPort={setOriginPort} 
              setDestPort={setDestPort}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShipmentsHome;
