import { Dialog } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Button } from "antd";
import { VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import check from "../../../../../assets/4ceac65b0a2ff744cfb424800dc07dcf.gif"

const DsrUnsubscribeModal
 = ({ open, close,setopenUnsubscribe }) => {

  const modalref = useRef();
  console.log(modalref);

  useEffect(() => {
    const handler = (e) => {
      if (!modalref?.current?.contains(e.target)) {
        console.log("success")
        setopenUnsubscribe(false)
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <Dialog open={open} onClose={close} fullScreen>
      <div
        style={{
          height: "100vh",
          alignContent: "center",
        }}
      >
        
        <div
          ref={modalref}
          className="card m-auto"
          style={{ height: "513.93px", width: "527px" }}
        >
          <div className="align-self-center my-5">
            <img
              src={check}
              alt="check"
              width="179.93px"
              height="179.93px"
            />
          </div>
          <div
            style={{
              fontWeight: "500",
              fontSize: "24px",
              width: "411px",
              alignSelf: "center",
              lineHeight: "34px",
              letterSpacing: "1%",
            }}
          >
            <div className="text-center">
              DSR Unsubscribed Successfully!
            </div>
            {/* <div className="text-center">Your Booking # 12169300432</div> */}
          </div>
          <p style={{ textAlign: "center", color: "#384656" }} className="mt-1">
            Kindly click on Continue to view your DSR Report!{" "}
          </p>
          <div className="d-flex justify-content-center mt-4">
          {/* <Link to="/profile" className="text-decoration-none" > */}
            <Button
              type="primary"
              style={{
                backgroundColor: "#0DA3DE",
                height: "40px",
                borderRadius: "8px",
                lineHeight: "24px",
              }}
              onClick={close}
            >
              Continue to DSR
              <ArrowCircleRightIcon className="ms-2" />
            </Button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default DsrUnsubscribeModal