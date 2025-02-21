import { Dialog } from "@mui/material";
import React, { useState, useEffect } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { VscClose } from "react-icons/vsc";

const SavDoc = ({ open, close }) => {
  const navigate = useNavigate();
  return (
    <Dialog open={open} onClose={close}>
        <div
          className="card m-auto"
          style={{ height: "527.93px", width: "527px" }}
        >
          <div className="align-self-center my-5">
            <img
              src="https://s3-alpha-sig.figma.com/img/2a3a/4da6/4ceac65b0a2ff744cfb424800dc07dcf?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EnZFOJMtd38-0sb2pIziCfanmSaSErGyBc5K5f3hoNgpfaWLNRyOWE8BQs7Nfm2bmQXnNW-XdamoCLwM4in~dMSXJl3kD6TCIbvi7IFWKGIi35DJPqqFCLZ~KymhsC4psdVgfLZv9zuJL-YD9B24oXmcEu2Lz-H8qaAnxqNBa21IIiVV2wJpPuwawpl-hksIGFvFJksn0roevkaB-m8c8y7c46HAC6Ri186wgpOAUiSiWx~qKwzKLEjbY8I4RX~FuJZr2X0qq-54KRycwgQmrdX9FZT5hWP8aBsMKfMwTIt-tlTcYh7E9jXpECpcOuQW09ip0v4JEarW249VlcxpnQ__"
              alt="check"
              width="179.93px"
              height="179.93px"
            />
          </div>
          <div
            style={{ fontWeight: "500", fontSize: "24px", textAlign: "center" }}
          >
            <div>Thank you for uploading your documents</div>
          </div>
          <p style={{ textAlign: "center", color: "#29333D" }} className="mt-1">
            Our service team will connect you shortly for booking confirmation!
          </p>
          <div className="d-flex justify-content-center mt-5">
            <Button
              type="primary"
              style={{
                backgroundColor: "#D32D2F",
                height: "40px",
                borderRadius: "8px",
              }}
              onClick={() => navigate("/")}
            >
              Continue to Dashboard
              <ArrowCircleRightIcon className="ms-2" />
            </Button>
          </div>
        </div>
      
    </Dialog>
  );
};

export default SavDoc;
