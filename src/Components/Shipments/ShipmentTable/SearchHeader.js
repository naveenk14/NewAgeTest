import React, { useState } from "react";
import { Row, Col, Input, Image } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./Booking.css";
import ShipmentBase from "../../ShipmentDetails/ShipmentTable/ShipmentBase";
import { Dialog, DialogContent } from "@mui/material";
import Search from "../../../assets/SearchVector.svg";
import { FaArrowCircleRight } from "react-icons/fa";

export const SearchHeader = ({ bookingData }) => {
  const [notfoundmodal, setNotfoundmodal] = useState(false);
  const [modal, setmodal] = useState(false);
  const [searchvalue, setSearchvalue] = useState("");
  const [filterdata, setFilterData] = useState("");
  const [searchHistory, setSearchHistory] = useState([]); // New state for storing search history

  console.log(searchHistory, "searchHistory");

  const handleSubmit = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      console.log(searchvalue);
      const filteredId = bookingData?.data?.filter(
        (item) =>
          searchvalue === item?.id ||
          searchvalue === item?.order_no ||
          searchvalue === item?.hbl_number
      );
      console.log(filteredId, "item");
      if (filteredId.length) {
        setFilterData(filteredId);
        setmodal(true);
        setNotfoundmodal(false);
        setSearchHistory((prevState) => [...prevState, searchvalue]);
        // setSearchvalue("");
      } else {
        setmodal(false);
        setNotfoundmodal(true);
        console.log("not exist");
      }
    }
  };

  const Shipmentpopup = () => {
    return (
      <ShipmentBase open={modal} close={setmodal} rowData={filterdata[0]} />
    );
  };

  const Notfoundpopup = () => {
    return (
      <Dialog open={notfoundmodal} onClose={() => setNotfoundmodal(false)}>
        <DialogContent>
          <p>Data Not found !</p>
        </DialogContent>
      </Dialog>
    );
  };
  return (
    <>
      <Row justify="space-between" className="w-full mb-3">
        <Col>
          <Input
            placeholder="Search shipment by PO/ Booking / HBL / Invoice Number"
            // prefix={<SearchOutlined style={{ color: "#94A2B2" }} />}
            prefix={
              <Image
                src={Search}
                alt="search"
                style={{ marginTop: "-4px" }}
                className="pe-1"
              />
            }
            className="search-input"
            style={{
              width: "524px",
              height: "36px",
              borderRadius: "6px",
              border: "2px solid #E7EAF0",
              padding: "9px 11px 9px 11px",
            }}
            suffix={
              <FaArrowCircleRight size={20} color="#0DA3DE" role="button"  onClick={(e) => handleSubmit(e)} />
            }
            value={searchvalue}
            onChange={(e) => setSearchvalue(e.target.value)}
            onKeyDown={(e) => handleSubmit(e)}
          />
        </Col>
        {/* <Col className="d-flex ">
          <div className="d-flex  justify-content-end ">
            <button
              className={`${
                selectedButton === "Upcoming Departures" ? "selected" : ""
              } upcoming-dep me-2 `}
              onClick={handleUpcomingDep}
            >
              Upcoming Departures
            </button>
            <button
              className={`${
                selectedButton === "Upcoming Arrivals" ? "  selected" : ""
              } upcoming-dep me-2`}
              onClick={handleUpcomingArr}
            >
              Upcoming Arrivals
            </button>
            
          </div>
        </Col> */}
        {modal && Shipmentpopup(filterdata)}
        {notfoundmodal && Notfoundpopup()}
      </Row>
    </>
  );
};
