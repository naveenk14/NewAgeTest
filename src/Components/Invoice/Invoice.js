import { Typography } from "@mui/material";
import "./invoice.css";
import React from "react";
import Navbar from "../Layout/Navbar";
import InvoiceDetails from "./Credit/InvoiceDetails";
import CashTable from "./Cash/CashTable";
import "./Credit/invoiceTbl.css";

const Invoice = () => {
  return (
    <>
      <div
        style={{
          // width: "100%",
          background: "#F8FAFC",
          paddingTop: "20px",
          paddingBottom: "50px",
        }}
      >
        <div className="invoiceC  mx-auto container-fluid">
          <div className="white-box container-fluid"></div>
          <div className="text-show">
            <div>
              <Typography
                style={{ fontSize: "28px", fontWeight: "700" }}
                className="shipments-head"
              >
                Invoice
              </Typography>
              <div>
                <Navbar />
              </div>
            </div>
          </div>
          <div
            className="shadow mx-auto mt-3"
            style={{ maxWidth: "1255px", position: "relative", zIndex: 1 }}
          >
            {/* <InvoiceDetails /> */}
            <CashTable />
          </div>
        </div>
      </div>
      {/* <div style={{height:"90vh",textAlign:"center",alignItems:"center",alignContent:"center"}}>No Data Found</div> */}
    </>
  );
};

export default Invoice;
