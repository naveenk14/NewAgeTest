import { Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <div
      className="container_fluid d-flex justify-content-between bg-dark text-white"
      style={{
        minWidth: "1255px",
        width: "100%",
        height: "55px",
        alignItems: "center",
        padding: "20px 24px 20px 24px",
        position: "relative",
        bottom: "0px",
        zIndex: "999",
        // position:"fixed"
      }}
    >
      <div
        className="footer_content d-flex justify-content-start gap-5"
        style={{ width: "453px", color: "#FFFFFF" }}
      >
        <Typography
          sx={{ fontSize: "15px", fontWeight: "400", lineHeight: "23.44px" }}
        >
          Terms and Service
        </Typography>
        <Typography
          sx={{ fontSize: "15px", fontWeight: "400", lineHeight: "23.44px" }}
        >   
          Privacy Policy
        </Typography>
      </div>
      <div>
        <Typography
          sx={{ fontSize: "15px", fontWeight: "400", lineHeight: "23.44px" }}
        >
          All Rights Reserved @ NewageNXT 2024
        </Typography>
      </div>
    </div>
  );
};
