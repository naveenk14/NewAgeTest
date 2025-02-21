import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import sort from "../../../assets/sort.png";
import { Modal } from "antd";
import { mapRequest } from "../../../Redux/Actions/MapAction";
import { useDispatch, useSelector } from "react-redux";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import ShipmentBase from "../../ShipmentDetails/ShipmentTable/ShipmentBase";
import { Dialog, DialogContent } from "@mui/material";
import { map } from "leaflet";

export default function MapMarker({
  showModal,
  onClose,
  markerId,
  // bookingData,
}) {
  const [filteredData, setFilteredData] = useState([]);
  const [notfoundmodal, setNotfoundmodal] = useState(false);
  const [filterdata, setFilterData] = useState("");
  const [modal, setmodal] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(mapRequest());
  // }, [dispatch]);

  const mapData = useSelector((state) => state.Map);
  const mapMarkerData = mapData?.MapData?.countries;

  const ShipmentData = useSelector((state) => state.Booking);
  const bookingData = ShipmentData?.booking;

  useEffect(() => {
    if (mapMarkerData) {
      const flattenedData = mapMarkerData.flatMap(
        (country) => country.hbl_list
      );
      setFilteredData(flattenedData);
    }
  }, [mapMarkerData]);

  const dataShow = filteredData?.map((data) => data.hbl_no);
  console.log(
    "datas",
    filteredData?.map((data) => data.hbl_no)
  );

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

  const handleSort = (col) => {
    const sorted = [...filteredData].sort((a, b) => {
      const valA = a[col];
      const valB = b[col];
      if (!isNaN(valA) && !isNaN(valB)) {
        return valA - valB;
      }
      if (col === "etd/atd" || col === "eta/ata") {
        const dateA = parseDate1(valA);
        const dateB = parseDate1(valB);
        return dateA - dateB;
      }
      return valA > valB ? 1 : -1;
    });
    setFilteredData(sorted);
  };
  const parseDate1 = (dateString) => {
    const parts = dateString.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]);
  };

  const handleSortDown = (col) => {
    const sorted = [...filteredData].sort((a, b) => {
      const valA = a[col];
      const valB = b[col];

      // Check if the values are numbers
      if (!isNaN(valA) && !isNaN(valB)) {
        return valB - valA;
      }

      // Handle date strings
      if (col === "etd/atd" || col === "eta/ata") {
        const dateA = parseDate2(valA);
        const dateB = parseDate2(valB);
        return dateB - dateA;
      }

      // Default string comparison
      return valA < valB ? 1 : -1;
    });
    setFilteredData(sorted);
  };

  const parseDate2 = (dateString) => {
    const parts = dateString.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]);
  };
  const bodyHblNo = (rowData) => {
    const handleHblClick = () => {
      showMore(rowData?.hbl_no);
    };
    return (
      <div className="text-start">
        <span style={{ cursor: "pointer" }} onClick={handleHblClick}>
          {rowData?.hbl_no}
        </span>
      </div>
    );
  };
  const filteredIds = bookingData?.data?.filter((item) => item?.id);
  console.log("Filtered Id:", filteredIds);
  const showMore = (hbl_no) => {
    const filteredId = bookingData?.data?.filter((item) => hbl_no === item?.id);
    if (filteredId?.length) {
      setFilterData(filteredId);
      setmodal(true);
      setNotfoundmodal(false);
    } else {
      setmodal(false);
      setNotfoundmodal(true);
    }
  };

  return (
    <Modal
      open={showModal}
      onCancel={onClose}
      className="mapTable"
      key="id"
      style={{
        position: "absolute",
        width: "500px",
        height: "50px",
        marginLeft: "57%",
        marginTop: "-8%",
      }}
      footer={null}
      closable={false}
    >
      <div>
        <div className="shadow modalmap">
          <DataTable
            value={filteredData}
            className="p-0 p-datatable-custom"
            scrollable
            scrollHeight="210px"
          >
            <Column
              field="hbl_no"
              align="left"
              body={bodyHblNo}
              header={
                <span style={{ fontSize: "13px" }} className="d-flex">
                  Booking ID
                  <div
                    className="d-flex sorticon"
                    style={{ flexDirection: "column" }}
                  >
                    <IconButton
                      onClick={() => {
                        handleSort("hbl_no");
                      }}
                      className="p-0"
                      style={{ color: "white" }}
                    >
                      <ExpandLessIcon className="sortup" />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        handleSortDown("hbl_no");
                      }}
                      className="p-0"
                      style={{ color: "white" }}
                    >
                      <ExpandMoreIcon className="sortdown" />
                    </IconButton>
                  </div>
                </span>
              }
              headerClassName="custom-header1 p-1"
              className="p-1 text-start"
            />
            <Column
              field="sea_air"
              align="left"
              header={
                <span style={{ fontSize: "13px" }} className="d-flex">
                  Mode
                  <div
                    className="d-flex sorticon"
                    style={{ flexDirection: "column" }}
                  >
                    <IconButton
                      onClick={() => {
                        handleSort("mode");
                      }}
                      className="p-0"
                      style={{ color: "white" }}
                    >
                      <ExpandLessIcon className="sortup" />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        handleSortDown("mode");
                      }}
                      className="p-0"
                      style={{ color: "white" }}
                    >
                      <ExpandMoreIcon className="sortdown" />
                    </IconButton>
                  </div>
                </span>
              }
              headerClassName="custom-header1 p-1 "
              className="text-start p-1"
            />
            <Column
              field="route"
              align="left"
              header={
                <span style={{ fontSize: "13px" }} className="d-flex ">
                  Route
                  <div
                    className="d-flex sorticon"
                    style={{ flexDirection: "column" }}
                  >
                    <IconButton
                      onClick={() => {
                        handleSort("route");
                      }}
                      className="p-0"
                      style={{ color: "white" }}
                    >
                      <ExpandLessIcon className="sortup" />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        handleSortDown("route");
                      }}
                      className="p-0"
                      style={{ color: "white" }}
                    >
                      <ExpandMoreIcon className="sortdown" />
                    </IconButton>
                  </div>
                </span>
              }
              headerClassName="custom-header1 p-1 "
              className="text-start p-1"
            />
            <Column
              field="status"
              align="left"
              header={
                <span style={{ fontSize: "13px" }} className="d-flex">
                  Status
                  <div
                    className="d-flex sorticon"
                    style={{ flexDirection: "column" }}
                  >
                    <IconButton
                      onClick={() => {
                        handleSort("status");
                      }}
                      className="p-0"
                      style={{ color: "white" }}
                    >
                      <ExpandLessIcon className="sortup" />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        handleSortDown("status");
                      }}
                      className="p-0"
                      style={{ color: "white" }}
                    >
                      <ExpandMoreIcon className="sortdown" />
                    </IconButton>
                  </div>
                </span>
              }
              bodyClassName="custom-cell"
              className="p-1 text-start"
              headerClassName="custom-header1 p-1"
            />
          </DataTable>
        </div>
      </div>
      {modal && Shipmentpopup(filterdata)}
      {notfoundmodal && Notfoundpopup()}
    </Modal>
  );
}
