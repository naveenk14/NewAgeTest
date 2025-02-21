import React, { useState } from "react";
import "../invoice.css";
import moneyImage from "../../../assets/money.png";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DownloadIcon from "../../../assets/Download.png";
import CreditTable from "./CreditTable";
import ViewCreditMdl from "./ViewCreditMdl";

const InvoiceDetails = () => {
  const [showCredit, setShowCredit] = useState(false);

  return (
    <div>
      <div style={{ maxWidth: "1255px", background: "white" }} className="pb-4">
        <div className="row w-50 px-4 d-flex mt-1">
          <div className="col-6 d-flex">
            <div className="my-auto p-1" style={{ backgroundColor: "#F8FAFC" }}>
              <img src={moneyImage} width="34px" height="34px" />
            </div>

            <div className="p-3">
              <div
                className=""
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "#495A6E",
                }}
              >
                Total Due Amount
              </div>
              <div style={{ fontSize: "24px", fontWeight: 700 }}>
                10000{" "}
                <span style={{ fontSize: "18px", fontWeight: 500 }}>AED</span>
              </div>
              <div
                className=""
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "rgba(73, 90, 110, 1)",
                }}
              >
                Unpaid Invoices : 103
              </div>
            </div>
          </div>
          <div className="col-6 d-flex ">
            <div
              className=" my-auto p-1"
              style={{ backgroundColor: "#F8FAFC" }}
            >
              <img src={moneyImage} width="34px" height="34px" />
            </div>
            <div className="p-3">
              <div
                className=""
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "rgba(73, 90, 110, 1)",
                }}
              >
                Overdue Amount
              </div>
              <div style={{ fontSize: "24px", fontWeight: 700 }}>
                3000{" "}
                <span style={{ fontSize: "18px", fontWeight: 500 }}>AED</span>
              </div>
              <div
                className=""
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "rgba(73, 90, 110, 1)",
                }}
              >
                Overdue Invoices : 10
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-100 d-flex mt-2 justify-content-between"
          style={{ padding: "16px 34px" }}
        >
          <div className="" style={{ paddingLeft: "10px" }}>
            <Typography
              style={{
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "34px",
              }}
            >
              Ageing + Outstanding details
            </Typography>
            <Typography
              className="outstanding-text"
              style={{
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "24px",
              }}
            >
              Total Outstanding Amount
            </Typography>
          </div>

          <div
            className="d-flex justify-content-end "
            style={{ paddingRight: "10px", alignSelf: "center" }}
          >
            <div className="my-auto" style={{ paddingRight: "30px" }}>
              <Link
                onClick={() => setShowCredit(true)}
                className=" invoice-link"
                style={{
                  textDecoration: "underline",
                  color: "#000088",
                  fontSize: "14px",
                  fontWeight: 700,
                }}
                to="/invoice"
              >
                View My Credit
              </Link>
            </div>
            <ViewCreditMdl
              open={showCredit}
              close={() => setShowCredit(false)}
            />
            <div className="">
              <button
                className="d-flex align-items-center justify-content-center rounded "
                style={{
                  minWidth: "150px",
                  height: "40px",
                  backgroundColor: "#F01E1E",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                }}
              >
                <span
                  className="d-flex me-3"
                  style={{ width: "16px", height: "16px" }}
                >
                  <img src={DownloadIcon} />
                </span>
                <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                  Download
                </Typography>
              </button>
            </div>
          </div>
        </div>
        <div className=" w-100 " style={{ padding: "16px 34px" }}>
          <table className="w-100" style={{ textAlign: "start" }}>
            <thead>
              <th
                style={{
                  borderRight: "1px solid rgba(231, 234, 240, 1)",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "24px",
                    color: "rgba(73, 90, 110, 1)",
                  }}
                >
                  0 - 30 Days
                </Typography>
              </th>
              <th
                style={{
                  borderRight: "1px solid rgba(231, 234, 240, 1)",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "24px",
                    color: "rgba(73, 90, 110, 1)",
                  }}
                >
                  31 - 60 Days
                </Typography>
              </th>
              <th
                style={{
                  borderRight: "1px solid rgba(231, 234, 240, 1)",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "24px",
                    color: "rgba(73, 90, 110, 1)",
                  }}
                >
                  61 - 90 Days
                </Typography>
              </th>
              <th
                style={{
                  borderRight: "1px solid rgba(231, 234, 240, 1)",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "24px",
                    color: "rgba(73, 90, 110, 1)",
                  }}
                >
                  91 - 120 Days
                </Typography>
              </th>
              <th
                style={{
                  borderRight: "1px solid rgba(231, 234, 240, 1)",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "24px",
                    color: "rgba(73, 90, 110, 1)",
                  }}
                >
                  Over 120 Days
                </Typography>
              </th>
              <th
                style={{
                  borderRight: "1px solid rgba(231, 234, 240, 1)",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "24px",
                    color: "rgba(73, 90, 110, 1)",
                  }}
                >
                  Unadjusted
                </Typography>
              </th>
              <th
                style={{
                  borderRight: "1px solid rgba(231, 234, 240, 1)",
                  paddingLeft: "16px",
                }}
              >
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "24px",
                    color: "rgba(73, 90, 110, 1)",
                  }}
                >
                  Net Outstanding Amont
                </Typography>
              </th>
            </thead>
            <tbody>
              <td
                style={{
                  borderRight: "1px solid rgba(231, 234, 240, 1)",
                  paddingLeft: "16px",
                }}
              >
                <Typography className="bold" style={{ fontSize: "20px" }}>
                  3000 <span>AED</span>
                </Typography>
              </td>
              <td
                style={{
                  borderRight: "1px solid rgba(231, 234, 240, 1)",
                  paddingLeft: "16px",
                }}
              >
                <Typography className="bold" style={{ fontSize: "20px" }}>
                  3000 <span>AED</span>
                </Typography>
              </td>
              <td
                style={{
                  borderRight: "1px solid rgba(231, 234, 240, 1)",
                  paddingLeft: "16px",
                }}
              >
                <Typography className="bold" style={{ fontSize: "20px" }}>
                  3000 <span>AED</span>
                </Typography>
              </td>
              <td
                style={{
                  borderRight: "1px solid rgba(231, 234, 240, 1)",
                  paddingLeft: "16px",
                }}
              >
                <Typography className="bold" style={{ fontSize: "20px" }}>
                  3000 <span>AED</span>
                </Typography>
              </td>
              <td
                style={{
                  borderRight: "1px solid rgba(231, 234, 240, 1)",
                  paddingLeft: "16px",
                }}
              >
                <Typography className="bold" style={{ fontSize: "20px" }}>
                  3000 <span>AED</span>
                </Typography>
              </td>
              <td
                style={{
                  borderRight: "1px solid rgba(231, 234, 240, 1)",
                  paddingLeft: "16px",
                }}
              >
                <Typography className="bold" style={{ fontSize: "20px" }}>
                  -
                </Typography>
              </td>
              <td
                style={{
                  borderRight: "1px solid rgba(231, 234, 240, 1)",
                  paddingLeft: "16px",
                }}
              >
                <Typography className="bold" style={{ fontSize: "20px" }}>
                  -
                </Typography>
              </td>
            </tbody>
          </table>
          <div style={{ marginTop: "50px" }}>
            <CreditTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
