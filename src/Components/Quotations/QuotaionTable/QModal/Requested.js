import { Button, Modal } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { VscClose } from 'react-icons/vsc'

const Requested = ({ requstedModal, handleCancel }) => {

  return (
    <Modal
      open={requstedModal}
      onCancel={handleCancel}
      style={{ marginTop: "-70px" }}
    >
      <div
        className="py-4 text-center"
        style={{
          width: "545px",
          height: "255px",
          backgroundColor: "white",
          borderRadius: "8px",
        }}
      >
        {/* <div className="modal_cancel_icon" style={{position:"absolute", right:"-50px",top:"0",cursor:"pointer"}}>
                <VscClose size={22} color='#ffff' onClick={() =>handleCancel()} />
            </div> */}
        <div
          className=""
          style={{ fontSize: "24px", fontWeight: 500, lineHeight: "34px" }}
        >
          Our team has received your request
        </div>
        <div className="mt-1" style={{color:"#384656"}}>We shall contact you soon regarding your request</div>

        <div className="pt-4 pb-1" style={{color:"#495A6E"}}>Uploaded Document</div>
        <div className="" style={{ fontWeight: "500", fontSize: "15px" }}>
          <Link style={{ color: "#384656" }}>MSDS Document</Link>
        </div>
        <div className="d-flex justify-content-center pt-4">
          <Button
            type="primary"
            style={{
              background: "rgba(240, 30, 30, 1)",
              color: "white",
              borderRadius: "8px",
              height: "40px",
            }}
          >
            Okay
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Requested;
