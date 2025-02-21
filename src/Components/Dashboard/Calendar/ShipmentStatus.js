import React, { useState } from "react";
import { Typography } from "@mui/material";

const ShipmentStatus = () => {
  const [shipments] = useState([
    { status: "Hold", count: 2, color: "rgba(249, 65, 68, 1)" },
    { status: "Awaiting Schedule", count: 5, color: "rgb(0,0,0,1)" },
    { status: "Early", count: 6, color: "rgba(106, 177, 135, 1)" },
    { status: "On-Time", count: 10, color: "rgba(44, 160, 44, 1)" },
    { status: "Late", count: 5, color: "rgba(144, 190, 109, 1)" },
  ]);
  const [selectedStatus, setSelectedStatus] = useState("Early");

  const handleClick = (status) => {
    setSelectedStatus(status);
  };

  return (
    <div
      className="mt-1 d-flex flex-column align-items-start shadow calendar w-100"
      style={{
        border: "1px solid rgba(231, 232, 242, 1)",
        borderRadius: "8px",
        minHeight: "382px",
      }}
    >
      <div className="shipment-bars d-flex align-items-end p-3 w-100 mt-3">
        {shipments.map((shipment, index) => (
          <div
            className="shipment-bar d-flex flex-column align-items-center "
            key={index}
            onClick={() => handleClick(shipment.status)}
            style={{ cursor: "pointer", width: "20%" }}
          >
            <button
              style={{
                backgroundColor:
                  selectedStatus === shipment.status
                    ? `red`
                    : "rgba(217, 217, 217, 1)",
                color: selectedStatus === shipment.status ? `white` : "black",
                fontSize: "13px",
                fontWeight: "500",
                borderRadius: "50%",
                border: "none",
                width: "30px",
                height: "30px",
              }}
            >
              {shipment.count}
            </button>
            <div
              className="shipment-progress mt-2"
              style={{
                width: "25.13px", // Width of the vertical bars
                height: `${shipment.count * 24}px`, // Assuming each shipment count is 20px
                backgroundColor: shipment.color,
                boxShadow:
                  selectedStatus === shipment.status
                    ? `2px 2px 5px  rgba(0,0,0,0.2), 5px 5px 5px  rgba(0,0,0,0.2), 7px 7px 5px  rgba(0,0,0,0.2) `
                    : "none",
              }}
            />
            <Typography
            className="mt-2"
              sx={{
                fontSize: selectedStatus === shipment.status ? "12px" : "11px",
                fontWeight:
                  selectedStatus === shipment.status ? "bolder" : "normal",
                color:"black",
                textAlign:selectedStatus === shipment.status ? "underline" : "normal",
              }}
            >
              {shipment.status}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShipmentStatus;
