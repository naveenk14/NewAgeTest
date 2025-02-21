import React, { useState } from "react";
import { Typography } from "@mui/material";
import DatePicker from "./DatePicker";
import ShipmentStatus from "./ShipmentStatus";
import "./HomeCalendar.css";
import CalendarEvent from "./CalendarEvent";

const HomeCalendar = () => {
  const [isByDatePickerOpen, setIsByDatePickerOpen] = useState(true);
  const [isByShipmentStatusOpen, setIsByShipmentStatusOpen] = useState(false);

  const toggleByDatePicker = () => {
    setIsByDatePickerOpen(true);
    setIsByShipmentStatusOpen(false);
  };

  const toggleByShipmentStatus = () => {
    setIsByShipmentStatusOpen(true);
    setIsByDatePickerOpen(false);
  };

  return (
    <div className="shadow home-calendar w-100 mt-5" style={{
      minWidth: "1269px",
      borderRadius: "8px",
    }}>
      <div className="d-flex text-center  w-100 ">
        <div
           className={`w-50 p-3 date-pick ${isByDatePickerOpen ? 'active' : ''}`}
          role="button"
          onClick={toggleByDatePicker}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "700",}}>
            Calendar Event
          </Typography>
        </div>
        <div
           className={`w-50 p-3 date-pick ${isByShipmentStatusOpen ? 'active' : ''}`}
          role="button"
          onClick={toggleByShipmentStatus}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
            Shipment Status
          </Typography>
        </div>
      </div>

      {isByDatePickerOpen && (
        <div className="d-flex">
          <div className="px-5 py-3 w-50">
            {" "}
            <DatePicker />
          </div>
          <div className="px-5 py-3 w-50">
            {" "}
            <CalendarEvent />
          </div>
        </div>
      )}

      {isByShipmentStatusOpen && (
        <div className="d-flex w-100">
          {" "}
          <div className="px-5 py-3 w-50">
            <ShipmentStatus />
          </div>
          <div className="px-5 py-3 w-50">
            {" "}
            <CalendarEvent />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeCalendar;
