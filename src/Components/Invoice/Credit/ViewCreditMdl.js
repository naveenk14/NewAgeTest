import {  Row, Col, Button, Tooltip } from "antd";
import React, { useState } from "react";
import creditLimit from "../../../assets/creditLimit.svg";
import creditSpend from "../../../assets/creditSpend.svg";
import money from "../../../assets/money.png";
import { DataTable } from "primereact/datatable";
import Column from "antd/es/table/Column";
import { Dialog } from "@mui/material";
import CreditRequestMdl from "./creditRequestMdl";

const ViewCreditMdl = ({ open, close }) => {
  const [reqModal, setReqMdl] = useState(false);
  const tableHeaders = [
    { label: "Location", key: "location" },
    { label: "Segment", key: "segment" },
    { label: "Credit Amount", key: "credintAmount" },
    { label: "Credit Days", key: "creaditDays" },
  ];
  const tableBody = [
    {
      location: "Ahmadabad",
      segment: "Un-Asingned",
      credintAmount: "400000",
      creaditDays: "30",
    },
    {
      location: "Ahmadabad",
      segment: "Un-Asingned",
      credintAmount: "400000",
      creaditDays: "30",
    },
    {
      location: "Ahmadabad",
      segment: "Un-Asingned",
      credintAmount: "400000",
      creaditDays: "30",
    },
    {
      location: "Ahmadabad",
      segment: "Un-Asingned",
      credintAmount: "400000",
      creaditDays: "30",
    },
    {
      location: "Ahmadabad",
      segment: "Un-Asingned",
      credintAmount: "400000",
      creaditDays: "30",
    },
  ];
  const renderTruncatedText = (text, length = 20) => {
    text = text ? String(text) : ""; // Convert to string and handle null/undefined

    if (text.length <= length) {
      return text;
    } else {
      const truncatedText = text.slice(0, length).trim() + "..";
      return (
        <Tooltip title={text}>
          <span>{truncatedText}</span>
        </Tooltip>
      );
    }
  };
  const handleClick = () => {
    setReqMdl(true);
  };
  return (
    <Dialog
      open={open}
      footer={null}
      onClose={close}
      maxWidth={830}
      className="invoiceMdl"
    >
      <div style={{ fontWeight: 700, fontSize: "24px" }}>My Credit</div>
      <div className="shadow p-4 mt-3">
        <div>
          <Row>
            <Col style={{ borderRight: "1px solid #B9B2B2" }}>
              <div
                className="d-flex flex-direction-column gap-3 "
                style={{ paddingRight: "50px" }}
              >
                <img src={creditLimit} alt="credit" />
                <div>
                  <div className="creditText">Total Credit Limit</div>
                  <div className="creditTextAmt">5,00,000 INR</div>
                </div>
              </div>
            </Col>
            <Col style={{ borderRight: "1px solid #B9B2B2" }}>
              <div
                className="d-flex flex-direction-column gap-3"
                style={{ paddingRight: "50px" }}
              >
                <img src={creditSpend} alt="credit" />
                <div>
                  <div className="creditText">Credit Spent</div>
                  <div className="creditTextAmt">2,00,000 INR</div>
                </div>
              </div>
            </Col>
            <Col>
              <div
                className="d-flex flex-direction-column gap-3"
                style={{ paddingRight: "50px" }}
              >
                <img src={money} alt="credit" />
                <div>
                  <div className="creditText">Credit Balance</div>
                  <div className="creditTextAmt">3,00,000 INR</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-3">
          <Button
            type="primary"
            style={{ background: "#D32D2F" }}
            onClick={handleClick}
          >
            Request More Credit
          </Button>
        </div>
        <CreditRequestMdl open={reqModal} close={() => setReqMdl(false)} closeCredit={close} />
      </div>
      <div className="shadow mt-3 p-4">
        <DataTable value={tableBody}>
          {tableHeaders.map((header, index) => (
            <Column
              key={index}
              fixed={header.key}
              header={header.label}
              body={(rowData) => renderTruncatedText(rowData[header.key])}
              headerClassName="invoiceTblHeader"
              bodyClassName="invoiceTblbody"
            />
          ))}
        </DataTable>
      </div>
    </Dialog>
  );
};

export default ViewCreditMdl;
