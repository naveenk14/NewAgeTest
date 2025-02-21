import { Dialog ,} from "@mui/material";
import React, { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import Dragger from "antd/es/upload/Dragger";
import { Link } from "react-router-dom";
import dropIcon from "../../../assets/Frame.png";
import { Button, Tooltip } from "antd";
import info from "../../../assets/Info.svg";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import SavDoc from "./SaveDoc";

const UploadDoc = ({ open, close }) => {
  const [forminputs, setForminputs] = useState({
    radioOn: "Packinglist",
  });

  const handleChange = (e) => {
    setForminputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  //This is for decrease count logic of text area
  const [textCount, setTextCount] = useState(250);
  const [textInput, setTextInput] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);

  useEffect(() => {
    const length = Math.abs(textInput.length - 250);
    setTextCount(length);
  }, [textInput]);
  const handleFileUpload = ({ file }) => {
    console.log("uid", file.uid);
  };
  return (
    <Dialog open={open} onClose={close} fullScreen>
      <div
        style={{ backgroundColor:"black", height: "100vh" }}
      >
        <div
          style={{
            maxWidth: "870px",
            backgroundColor: "white",
            padding: "10px 30px 10px 20px",
            height: "100%",
            overflowY: "auto",
          }}
          className="m-auto"
        >
          <div>
            <div className="mt-2" style={{ fontSize: "34px", fontWeight: "700" }}>Upload your Document</div>
           <div style={{fontSize:"10px",color:"#384656"}}>Kindly select your document type and upload your document to process your shipment</div>
          </div>
          <div className="document_type_section mt-2">
            <div className="row document_type_row">
              <div className="col-12 p-0">
                <div className="left_details d-flex align-items-start">
                  <span className="me-2">1</span>
                  <div className="Shipper_title">
                    <p className="m-0 mb-2">Document Type</p>
                    <p className="m-0">Shipper contact details added.</p>
                  </div>
                </div>
                <div className="right_details radio_list">
                  <div className="radio_item">
                    <input
                      type="radio"
                      id="packing"
                      name="radioOn"
                      value="PackingList"
                      onChange={handleChange}
                      checked={forminputs.radioOn === "PackingList"}
                    />
                    <label htmlFor="packing">Packing List</label>
                  </div>
                  <div className="radio_item">
                    <input
                      type="radio"
                      id="commercial"
                      name="radioOn"
                      value="CommercialInvoice"
                      onChange={handleChange}
                      checked={forminputs.radioOn === "CommercialInvoice"}
                    />
                    <label htmlFor="commercial">Commercial Invoice</label>
                  </div>
                  <div className="radio_item">
                    <input
                      type="radio"
                      id="cargo"
                      name="radioOn"
                      value="CargoPicture"
                      onChange={handleChange}
                      checked={forminputs.radioOn === "CargoPicture"}
                    />
                    <label htmlFor="cargo">Cargo Picture</label>
                  </div>
                  <div className="radio_item">
                    <input
                      type="radio"
                      id="other"
                      name="radioOn"
                      value="OtherType"
                      onChange={handleChange}
                      checked={forminputs.radioOn === "OtherType"}
                    />
                    <label htmlFor="other">Other Type</label>
                  </div>
                </div>
                {forminputs?.radioOn === "OtherType" && (
                  <div
                    className="other_type"
                    style={{ padding: "10px 21px 0px" }}
                  >
                    <div
                      className="textarea_description d-flex justify-content-between"
                      style={{ width: "50%" }}
                    >
                      <p
                        className=""
                        style={{
                          fontWeight: "500",
                          fontSize: "13px",
                          lineHeight: "19px",
                          letterSpacing: "1%",
                          color: "#67788E",
                          marginBottom: "5px",
                        }}
                      >
                        Tell us more about your document type
                      </p>
                      <p
                        className="m-0"
                        style={{
                          fontWeight: "500",
                          fontSize: "13px",
                          lineHeight: "19px",
                          letterSpacing: "1%",
                          color: "#67788E",
                        }}
                      >
                        {textCount}/250
                      </p>
                    </div>
                    <TextArea
                      style={{ width: "50%" }}
                      placeholder="Type here..."
                      rows={4}
                      maxLength={250}
                      onChange={(e) => setTextInput(e.target.value)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="upload_document_section">
            <div className="row upload_document_row">
              <div className="col-12 p-0">
                <div className="left_details d-flex align-items-start">
                  <span className="me-2">2</span>
                  <div className="Shipper_title">
                    <p className="m-0 mb-2">
                      Upload Documents
                      <Tooltip
                        className="ms-2"
                        placement="topLeft"
                        title={
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque deserunt tempore non{" "}
                          </p>
                        }
                      >
                        <img src={info} />
                      </Tooltip>
                    </p>
                    <p className="m-0">
                      Please upload documents related to the cargo
                    </p>
                  </div>
                </div>
                <div className="right_details">
                  <Dragger
                    multiple
                    customRequest={handleFileUpload}
                    // showUploadList={false}
                    accept=".jpeg,.png,.word,.pdf"
                    style={{ width: "50%" }}
                  >
                    <p className="ant-upload-drag-icon">
                      <img src={dropIcon} alt="" />
                    </p>
                    <p className="ant-upload-text">
                      Drag & Drop anywhere in this area or{" "}
                      <Link className="text-decoration-none">Click Here</Link>
                    </p>
                    <p className="ant-upload-hint">
                      File formats: PDF, JPEG, Word, PNG (Max file size: 2 MB).
                    </p>
                  </Dragger>
                </div>
              </div>
            </div>
          </div>
          <div className="cargo_require_section">
            <div className="row cargo_require_row">
              <div className="col-12 p-0">
                <div className="left_details d-flex align-items-start">
                  <span className="me-2">3</span>
                  <div className="Shipper_title">
                    <p className="m-0 mb-2">
                      Specify if there is any special cargo requirements
                    </p>
                    <p className="m-0">Skip if no special requirements.</p>
                  </div>
                </div>
                <div className="right_details">
                  <div
                    className="textarea_description d-flex justify-content-between"
                    style={{ width: "50%", paddingBottom: "5px" }}
                  >
                    <p
                      className="m-0"
                      style={{
                        fontWeight: "500",
                        fontSize: "13px",
                        lineHeight: "19px",
                        letterSpacing: "1%",
                        color: "#67788E",
                      }}
                    >
                      if any
                    </p>
                    <p
                      className="m-0"
                      style={{
                        fontWeight: "500",
                        fontSize: "13px",
                        lineHeight: "19px",
                        letterSpacing: "1%",
                        color: "#67788E",
                      }}
                    >
                      {textCount}/250
                    </p>
                  </div>
                  <TextArea
                    style={{ width: "50%" }}
                    placeholder="Type here..."
                    rows={4}
                    maxLength={250}
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
          <Button
              type="primary"
              style={{
                backgroundColor: "#D32D2F",
                height: "40px",
                borderRadius: "8px",
              }}
             onClick={()=>{setUploadSuccess(true)
              console.log("upload",uploadSuccess);
             }}
            >
              Send
              <ArrowCircleRightIcon className="ms-2" />
            </Button>
          </div>
        </div>
        <SavDoc open={uploadSuccess} close={()=>setUploadSuccess(false)}/>
      </div>
    </Dialog>
  );
};

export default UploadDoc;
