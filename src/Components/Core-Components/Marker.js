import React from "react";
import { Typography } from "@mui/material";

const Marker = ({ position, onClick, label }) => (
  <div
    style={{
      position: "absolute",
      top: position.top,
      left: position.left,
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(211, 45, 47, 1)",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      cursor: "pointer",
      zIndex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border:'5px solid white'
    }}
    onClick={onClick}
    aria-label={label}
  >
    <Typography className="text-white">{label}</Typography>
  </div>
);

export default Marker;
