import { Dialog } from "@mui/material";
import React, { useState, useEffect } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Button } from "antd";
import { VscClose } from "react-icons/vsc";

const PasswordChangeSuccess
 = ({ open, close }) => {

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
              src="https://s3-alpha-sig.figma.com/img/2a3a/4da6/4ceac65b0a2ff744cfb424800dc07dcf?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CsvKX7ZBdE~7O3ZDF7eQI6El3FIozdx046-02P0hdfa~sQMTULNdpbJuSGuCwygCE-GkXJkv8PFjCmOpVroOjOM7e2BJUh41beR4jAVB5ihR7Rofn1EK~NB1N5WQVuCEe89vITTA~Lxe8sDNtDZQMFFW~ypAylZ10D45OQMWG43YfjTNP44pCeWkk~FDBX954CSsQLK3~1yP5RI4t1CoGuCXcPW3VasvRRUvF5tA~136TKd16MWiaEICw~VksdGSpvZyxOd8vuh9oueKrujEbuXa7kCzYk~lZ~Pv1LlhECE5zxefSbRP-LHWvM86GeISaCzwZ8MjHzwVLbj0-rFdqw__"
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
              Your Password Changed Successfully!
            </div>
            {/* <div className="text-center">Your Booking # 12169300432</div> */}
          </div>
          <p style={{ textAlign: "center", color: "#384656" }} className="mt-1">
            Kindly click on Continue to view your Profile!{" "}
          </p>
          <div className="d-flex justify-content-center mt-4">
          {/* <Link to="/profile" className="text-decoration-none" > */}
            <Button
              type="primary"
              style={{
                backgroundColor: "#D32D2F",
                height: "40px",
                borderRadius: "8px",
                lineHeight: "24px",
              }}
              onClick={close}
            >
              Continue to Profile
              <ArrowCircleRightIcon className="ms-2" />
            </Button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default PasswordChangeSuccess
;