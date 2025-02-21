import { Dialog } from "@mui/material";
import React from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Button } from "antd";
import check from "../../assets/check.gif"

const SendOtp = ({ open, close, setForgotPwd }) => {
  const handleGo = () => {
    close();
    setForgotPwd(false);
  };
  return (
    <Dialog open={open} onClose={close} fullScreen>
      <div
        style={{
          backgroundColor: "black",
          height: "100vh",
          alignContent: "center",
        }}
      >
        <div
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
              Password send to your mail id Successfully !!
            </div>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <Button type="primary" className="logbtn" onClick={handleGo}>
              Go to login
              <ArrowCircleRightIcon className="ms-2" />
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default SendOtp;
