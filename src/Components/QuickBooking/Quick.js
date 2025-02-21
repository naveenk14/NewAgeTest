import React from "react";
import Navbar from "../Layout/Navbar";
import { Typography } from "@mui/material";
import Qbooking from "./Qbooking";
import "./quickBooking.css";

const Quick = () => {
  return (
    // <div
    //   style={{
    //     width: "100%",
    //     background:
    //       "linear-gradient(to bottom, white 20%,  rgb(248, 250, 252) 15%)",
    //   }}
    // >

    <div
      style={{
        //  maxWidth: "1255px",
        background: "#F8FAFC",
        paddingTop: "20px",
        paddingBottom: "50px",
      }}
      className="shipmentIndex  px-auto container-fluid"
    >
      <div className="white-box container-fluid"></div>
      <div className="text-show">
        <div>
          <Typography
            style={{ fontSize: "28px", fontWeight: "700", color: "black" }}
            className="shipments-head text-dark"
          >
            Quick Booking
          </Typography>
          <div>
            <Navbar />
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "30px", maxWidth: "1255px" }}
        className="mx-auto "
      >
        <Qbooking />
      </div>
    </div>
  );
};

export default Quick;
