import { Dialog } from "@mui/material";
import { Button } from "antd";
import React from "react";

const CreditRequestMdl = ({ open, close, closeCredit }) => {
  const handleClick = () => {
    close();
    closeCredit();
  };
  return (
    <Dialog open={open} onClose={close} maxWidth={300} className="invoiceMdl">
      <div style={{ fontWeight: 500, fontSize: 26 }}>Credit Request Sent</div>

      <div style={{ fontWeight: 400, fontSize: 14 }} className="mt-2">
        Your request for more credit has been sent to out finance team
        successfully.
        <br /> They will get back to you shortly.{" "}
      </div>
      <div className="d-flex justify-content-end mt-4">
        <Button
          type="primary"
          style={{ background: "#D32D2F" }}
          onClick={handleClick}
        >
          OK
        </Button>
      </div>
    </Dialog>
  );
};

export default CreditRequestMdl;
