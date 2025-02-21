import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import Pagination from "../../Core-Components/Pagination";
import { useDispatch } from "react-redux";
import { bookingRequest } from "../../../Redux/Actions/BookingAction";
import { Tooltip } from "antd";
import CountryFlag from "../../Core-Components/CountryFlag";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./Booking.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import ShipmentBase from "../../ShipmentDetails/ShipmentTable/ShipmentBase";
import { MultiSelect } from "primereact/multiselect";
import { useSelector } from "react-redux";
import { Tag } from "primereact/tag";
import { CloseOutlined } from "@ant-design/icons";
import { CircularProgress, Box } from "@mui/material";
import "../../Dashboard/ShipmentHistory/ShipmentHistory.css";
import shipgif from "../../../assets/shipnxtgif.gif";
import { IoCloseCircleSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";

const AllBookings = ({
  filterData,
  filterValue,
  currentPage,
  setCurrentPage,
  filterMonthValue,
  selectedStatus,
  showMore,
  showAllData,
  setshowAllData,
  scrollHeight,
  setscrollHeight,
  bookingData,
  popoverVisible,
  setPopoverVisible,
}) => {
  const itemsPerPage = 5;
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState(filterData);
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(filteredData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRowData, setModalRowData] = useState(null);
  const { loading } = useSelector((state) => state.Booking);
  const [selectfield, setselectfield] = useState("");
  // const [showAllData, setshowAllData] = useState(false)
  const [tblFilter, setTblFilter] = useState({
    id: [],
    order_no: [],
    mode: [],
    origin: [],
    destination: [],
    eta_ata: [],
    etd_atd: [],
    status: [],
  });
  const payload = {
    // filter_month: filterMonthValue ? filterMonthValue : "",
    // booking_type: "",
    // status: "",
    // spagesize: "",
    // sperpage: "",
    // booking_number: "",
    // origin: "",
    // destination: "",
    // mode: "",
    // etd: "",
    // eta: "",
    booking_id: "609766",
    filter_days: filterValue ? filterValue : "",
  };

  useEffect(() => {
    dispatch(bookingRequest({ payload }));
  }, [filterValue, filterMonthValue]);

  useEffect(() => {
    const filterDataTable = filterData
      ?.map((item, index) => ({
        key: index,
        ...item,
      }))
      .filter((filteredItem) =>
        Object.keys(tblFilter).every(
          (key) =>
            tblFilter[key]?.length === 0 ||
            tblFilter[key]?.includes(filteredItem[key])
        )
      );
    setFilteredData(filterDataTable);
    setCurrentPage(1);
  }, [tblFilter, filterData]);

  const getUniqueOptions = (array, key) => {
    if (!Array.isArray(array) || !array?.length) {
      return [];
    }
    return Array.from(new Set(array.map((data) => data[key]))).map(
      (value, index) => ({
        key: index,
        label: value,
        value,
      })
    );
  };

  useEffect(() => {
    if (clicked) {
      setData(filteredData);
    }
  }, [clicked]);

  const ShipId = getUniqueOptions(data, "id");
  const orderId_ = getUniqueOptions(data, "order_no");
  const Mode_ = getUniqueOptions(data, "mode");
  const Org_ = getUniqueOptions(data, "origin");
  const dest_ = getUniqueOptions(data, "destination");
  const eta_ = getUniqueOptions(data, "eta_ata");
  const etd_ = getUniqueOptions(data, "etd_atd");
  const status_ = getUniqueOptions(data, "status");

  const handleChangeFilter = (field, filterValues) => {
    if (field === "all") {
      setTblFilter({
        id: [],
        order_no: [],
        mode: [],
        origin: [],
        destination: [],
        eta_ata: [],
        etd_atd: [],
        status: [],
      });
    } else {
      setTblFilter((prevFilters) => ({
        ...prevFilters,
        [field]: filterValues,
      }));
    }
  };

  useEffect(() => {
    if (selectedStatus !== null) {
      setTblFilter({
        id: [],
        order_no: [],
        mode: [],
        origin: [],
        destination: [],
        eta_ata: [],
        etd_atd: [],
        status: [],
      });
    }
  }, [selectedStatus]);

  function MultiSelectFilter(filterKey, options, value, additionalStyles) {
    const renderOption = (option) => {
      if (option?.label?.length <= 14) {
        return <span>{option.label}</span>;
      } else {
        const truncatedText = option?.label?.slice(0, 14)?.trim() + "..";
        return (
          <Tooltip placement="topLeft" title={option?.label}>
            <span role="button">{truncatedText}</span>
          </Tooltip>
        );
      }
    };

    return (
      <MultiSelect
        className="custom-multi-select"
        value={value}
        options={options}
        filter
        style={{
          position: "absolute",
          opacity: "0",
          width: "150px",
          fontSize: "10px",
          ...additionalStyles,
        }}
        showSelectAll={false}
        onChange={(e) => handleChangeFilter(filterKey, e.value)}
        onFocus={() => setClicked(true)}
        onBlur={() => setClicked(false)}
        display="chip"
        placeholder="Select"
        itemTemplate={renderOption}
        filterPlaceholder="Search"
      />
    );
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = Math.min(startIndex + itemsPerPage, filteredData?.length);

  const showModal = (rowData) => {
    setModalRowData(rowData);
    setIsModalOpen(true);
  };

  const actionBodyTemplate = (rowData) => {
    let buttonLabel;
    let btnClass;
    if (rowData.action === "Track") {
      buttonLabel = "More";
      btnClass = "cargo-picked-up";
    } else if (rowData.action === "Booking In Progress") {
      buttonLabel = "-";
    } else if (rowData.action === "Cargo Picked Up") {
      buttonLabel = "More";
      btnClass = "cargo-picked-up";
    }
    return (
      <Button
        outlined
        className={btnClass}
        style={{
          background: "rgba(240, 30, 30, 1)",
          color: "white",
          borderRadius: "8px",
          width: "80px",
          height: "30px",
          padding: "",
          gap: "8px",
        }}
        label={buttonLabel}
        onClick={() => showModal(rowData)}
      />
    );
  };

  const shipmentTemplateId = (rowData) => {
    return (
      <div style={{ textAlign: "start" }}>
        <span className="">
          {rowData?.order_no?.length <= 20 ? (
            rowData?.order_no
          ) : (
            <Tooltip placement="topLeft" title={rowData?.order_no}>
              <span role="button">
                {rowData?.order_no?.slice(0, 20)?.trim()?.split(" ")?.join("") +
                  ".."}
              </span>
            </Tooltip>
          )}
        </span>
      </div>
    );
  };
  const shipmentTemplateFilterData = (rowData) => {
    return (
      <div style={{ textAlign: "start" }}>
        <span className="">
          {rowData?.id?.length <= 20 ? (
            rowData?.id
          ) : (
            <Tooltip placement="topLeft" title={rowData?.id}>
              <span role="button">
                {rowData?.id?.slice(0, 20)?.trim()?.split(" ")?.join("") + ".."}
              </span>
            </Tooltip>
          )}
        </span>
      </div>
    );
  };
  const originBodyTemplate = (rowData) => {
    return (
      <div className="origin-cell" style={{ textAlign: "start" }}>
        <CountryFlag countryCode={rowData?.origin_countrycode} />
        <span
          style={{
            paddingLeft: "8px",
            fontWeight: "400",
            // width: "50px",
            textAlign: "start",
          }}
        >
          {rowData?.origin?.length <= 14 ? (
            rowData?.origin
          ) : (
            <Tooltip placement="topLeft" title={rowData?.origin}>
              <span role="button">
                {rowData?.origin?.slice(0, 13)?.trim()?.split(" ")?.join("") +
                  ".."}
              </span>
            </Tooltip>
          )}
        </span>
      </div>
    );
  };
  const destinationBodyTemplate = (rowData) => {
    return (
      <div className="origin-cell" style={{ textAlign: "start" }}>
        <CountryFlag countryCode={rowData?.destination_countrycode} />
        <span
          style={{ paddingLeft: "8px", fontWeight: "400", textWrap: "wrap" }}
        >
          {rowData?.destination?.length <= 14 ? (
            rowData?.destination
          ) : (
            <Tooltip placement="topLeft" title={rowData?.destination}>
              <span role="button">
                {rowData?.destination
                  ?.slice(0, 13)
                  ?.trim()
                  ?.split("")
                  ?.join("") + ".."}
              </span>
            </Tooltip>
          )}
        </span>
      </div>
    );
  };
  // const bodyTemplate = (rowData) => {
  //   const hasUpdated =
  //     rowData?.is_updated === "Y" ? rowData?.updated_message : "";

  //   return (
  //     <div className="message">
  //       <span className={hasUpdated ? "text-red" : ""}>
  //         {hasUpdated ? (
  //           <Tooltip
  //             placement="topLeft"
  //             title={
  //               <span>
  //                 <div style={{ fontSize: "13px" }}>ETD Changed</div>
  //                 <div style={{ fontSize: "10px" }}>
  //                   {/* {rowData?.updated_message} */}
  //                   Previous ETD : 10/05/2024 <br />
  //                   New ETD : 12/05/2024
  //                 </div>
  //               </span>
  //             }
  //           >
  //             <span role="button">{rowData?.etd_atd}</span>
  //           </Tooltip>
  //         ) : (
  //           rowData?.etd_atd
  //         )}
  //       </span>
  //     </div>
  //   );
  // };
  const bodyTemplate = (rowData) => {
    const { actual_departure, estimated_departure } = rowData;
    // Variable to store the result
    let dayDifference = "";

    // Check if either date is empty
    if (actual_departure && estimated_departure) {
      // Convert to Date objects
      const actualDate = new Date(actual_departure);
      const estimatedDate = new Date(estimated_departure);

      // Calculate the time difference in milliseconds
      const timeDifference = actualDate - estimatedDate;

      // Convert milliseconds to days
      dayDifference = timeDifference / (1000 * 60 * 60 * 24);
    }

    const getDepartMessage = () => {
      if (dayDifference === "") return null;
      if (dayDifference === 0) return { color: "#00c500" };
      if (dayDifference > 0) return { color: "red" };
      if (dayDifference < 0) return { color: "#00c500" };
    };

    const departInfo = getDepartMessage();
    const EtdTitle = () => {
      if (dayDifference === "") return null;
      if (dayDifference === 0) return <div>Departed On-time</div>;
      if (dayDifference > 0)
        return (
          <div>
            Departed Late{" "}
            <span style={{ color: "red", fontWeight: "700" }}>
              {" "}
              (+{dayDifference} days)
            </span>
          </div>
        );
      if (dayDifference < 0)
        return (
          <div>
            Departed Early{" "}
            <span style={{ color: "#00c500", fontWeight: "700" }}>
              ({dayDifference} days)
            </span>
          </div>
        );
    };
    return (
      <div className="message">
        <span
          style={{
            color: departInfo ? departInfo.color : "",
            fontWeight: "500",
          }}
        >
          {departInfo ? (
            <Tooltip
              placement="topLeft"
              title={
                <span>
                  <div style={{ fontSize: "13px" }}>{EtdTitle()}</div>
                  <div style={{ fontSize: "10px" }}>
                    {/* {rowData?.updated_message} */}
                    Estimated Departure : {rowData.estimated_departure} <br />
                    Actual Departure : {rowData.actual_departure}
                  </div>
                </span>
              }
            >
              <span role="button">{rowData?.etd_atd}</span>
            </Tooltip>
          ) : (
            rowData?.etd_atd
          )}
        </span>
      </div>
    );
  };

  const bodyTemplateEta = (rowData) => {
    const {
      actuval_arrival,
      estimated_arrival,
    } = rowData;
    // Variable to store the result
    let dayDifference = "";

    // Check if either date is empty
    if (actuval_arrival && estimated_arrival) {
      // Convert to Date objects
      const actualDate = new Date(actuval_arrival);
      const estimatedDate = new Date(estimated_arrival);

      // Calculate the time difference in milliseconds
      const timeDifference = actualDate - estimatedDate;

      // Convert milliseconds to days
      dayDifference = timeDifference / (1000 * 60 * 60 * 24);
    }

    console.log(dayDifference); // Will print the result or an empty string
    const getArrivalMessage = () => {
      if (dayDifference === "") return null;
      if (dayDifference === 0) return { color: "#00c500" };
      if (dayDifference > 0) return { color: "red" };
      if (dayDifference < 0) return { color: "#00c500" };
    };
    const arrivalInfo = getArrivalMessage();
    const EtaTitle = () => {
      if (dayDifference === "") return null;
      if (dayDifference === 0) return <div>Arrived On-time</div>;
      if (dayDifference > 0)
        return (
          <div>
            Arrived Late{" "}
            <span style={{ color: "red", fontWeight: "700" }}>
              {" "}
              (+{dayDifference} days)
            </span>
          </div>
        );
      if (dayDifference < 0)
        return (
          <div>
            Arrived Early{" "}
            <span style={{ color: "#00c500", fontWeight: "700" }}>
              ({dayDifference} days)
            </span>
          </div>
        );
    };
    return (
      <div className="message">
        <span
          style={{
            color: arrivalInfo ? arrivalInfo.color : "",
            fontWeight: "500",
          }}
        >
          {arrivalInfo ? (
            <Tooltip
              placement="topLeft"
              title={
                <span>
                  <div style={{ fontSize: "13px" }}>{EtaTitle()}</div>
                  <div style={{ fontSize: "10px" }}>
                    Estimated Arrival : {rowData.estimated_arrival} <br />
                    Actual Arrival : {rowData.actuval_arrival}
                  </div>
                </span>
              }
            >
              <span role="button">{rowData?.eta_ata}</span>
            </Tooltip>
          ) : (
            rowData?.eta_ata
          )}
        </span>
      </div>
    );
  };

  // const bodyTemplateEta = (rowData) => {
  //   const hasUpdated =
  //     rowData?.is_updated === "Y" ? rowData?.updated_message : "";
  //   return (
  //     <div className="message">
  //       <span className={hasUpdated ? "text-red" : ""}>
  //         {hasUpdated ? (
  //           <Tooltip
  //             placement="topLeft"
  //             title={
  //               <span>
  //                 <div style={{ fontSize: "13px" }}>ETA Changed</div>
  //                 <div style={{ fontSize: "10px" }}>
  //                   Previous ETA : 10/05/2024 <br />
  //                   New ETA : 12/05/2024
  //                 </div>
  //               </span>
  //             }
  //           >
  //             <span role="button">{rowData?.eta_ata}</span>
  //           </Tooltip>
  //         ) : (
  //           rowData?.eta_ata
  //         )}
  //       </span>
  //     </div>
  //   );
  // };
  const sort = (col) => {
    const handleSort = (col) => {
      const sorted = [...filteredData].sort((a, b) => {
        const valA = a[col];
        const valB = b[col];
        if (!isNaN(valA) && !isNaN(valB)) {
          return valA - valB;
        }
        return valA > valB ? 1 : -1;
      });
      setFilteredData(sorted);
    };

    const handleSortDown = (col) => {
      const sorted = [...filteredData].sort((a, b) => {
        const valA = a[col];
        const valB = b[col];
        if (!isNaN(valA) && !isNaN(valB)) {
          return valB - valA;
        }
        return valA < valB ? 1 : -1;
      });
      setFilteredData(sorted);
    };

    return (
      <div>
        <div className="d-flex sorticon" style={{ flexDirection: "column" }}>
          <IconButton
            onClick={() => {
              handleSort(col, "asc");
            }}
            className="p-0"
          >
            <ExpandLessIcon className="sortup" />
          </IconButton>
          <IconButton
            onClick={() => {
              handleSortDown(col, "desc");
            }}
            className="p-0"
          >
            <ExpandMoreIcon className="sortdown" />
          </IconButton>
        </div>
      </div>
    );
  };

  const paginatedData = showAllData ? filteredData : filteredData;
  // : filteredData?.slice(
  //     startIndex,
  //     10
  //     // startIndex + itemsPerPage
  //   );
  const noData = () => {
    return (
      <div
        className="no-options "
        style={{ alignSelf: "center", height: "353px" }}
      >
        No Data Found
      </div>
    );
  };
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "353px",
          // alignSelf:"center"
        }}
      >
        {/* <CircularProgress style={{ color: "#0DA3DE " }} /> */}
        <img src={shipgif} width="140px" height="140px" />
      </Box>
    );
  }
  const FilterTag = ({ field, filterValues, handleChangeFilter }) => {
    const popoverRef = useRef(null); // Reference for the popover
    const handleClick = (field) => {
      setselectfield(field);
      setPopoverVisible((prev) => !prev);
      console.log(field);
      console.log(selectfield);
    };
    // Close the popover if clicked outside
    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target)) {
          setselectfield("");
          setPopoverVisible(false); // Close the popover if clicked outside
        }
      };

      // Attach event listener
      if (popoverVisible) {
        document.addEventListener("mousedown", handleOutsideClick);
      }

      // Cleanup the event listener when popover is closed or unmounted
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, [popoverVisible]);
    const renderTags = (field, filterValues) => {
      return (
        <div
          ref={popoverRef}
          style={{
            position: "absolute",
            top: "0",
            width: "100%",
            background: "white",
            zIndex: "10",
            borderRadius: "8px",
            boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)",
            margin: "25px 0px",
          }}
        >
          <ul style={{ padding: "8px", margin: "0px" }}>
            {filterValues?.map((item, index) => {
              return (
                <li
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    listStyle: "none",
                    color: "#000000c9",
                  }}
                  key={index}
                >
                  {item}{" "}
                  <IoCloseCircleSharp
                    role="button"
                    onClick={() => {
                      handleDeleteValue(field, item);
                    }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      );
    };

    const handleDeleteValue = (field, value) => {
      console.log(field, value);
      const newValues = filterValues.filter((item) => item !== value);
      console.log(field, newValues);
      handleChangeFilter(field, newValues);
    };
    if (!Array.isArray(filterValues)) {
      return null;
    }
    const renderedColumns = new Set();
    return (
      <>
        {filterValues.map((option) => {
          if (!renderedColumns.has(field)) {
            renderedColumns.add(field);
            return (
              <Tag
                key={field}
                style={{
                  backgroundColor: "#0DA3DE",
                  marginRight: "10px",
                  position: "relative",
                  fontSize: "10px",
                }}
                className="px-2 py-1"
                rounded
              >
                <div style={{ position: "relative" }}>
                  {field === "order_no" ? "Order No" : ""}
                  {field === "id" ? "Shipment Id" : ""}
                  {field === "mode" ? "Mode" : ""}
                  {field === "eta_ata" ? "ETA/ATA" : ""}
                  {field === "etd_atd" ? "ETD/ATD" : ""}
                  {field === "status" ? "Status" : ""}
                  {field === "origin" ? "Origin" : ""}
                  {field === "destination" ? "Destination" : ""}
                  &nbsp; :{" "}
                  {filterValues?.length === 1 ? (
                    <span className="me-2">{filterValues[0]}</span>
                  ) : (
                    <span>
                      {filterValues[0]}&nbsp;
                      <Button
                        style={{ backgroundColor: "#0da3de", border: "none" }}
                        variant="contained"
                        onClick={() => handleClick(field)}
                      >
                        <BsThreeDotsVertical
                          size={10}
                          style={{ marginBottom: "3px", marginLeft: "6px" }}
                        />
                      </Button>
                      {popoverVisible &&
                        field === selectfield &&
                        renderTags(field, filterValues)}
                    </span>
                  )}
                  <span className="ms-2">
                    <CloseOutlined
                      onClick={() => {
                        handleChangeFilter(field, []);
                      }}
                    />
                  </span>
                </div>
              </Tag>
            );
          }
          return null;
        })}
      </>
    );
  };

  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      {Object.keys(tblFilter)?.some((key) => tblFilter[key]?.length > 0) && (
        <div
          className="d-flex ps-2"
          style={{
            marginBottom: "9px",
            padding: "5px 0px",
            marginTop: "-11px",
          }}
        >
          {Object.entries(tblFilter).map(([field, filterValues]) => (
            <FilterTag
              key={field}
              field={field}
              filterValues={filterValues}
              handleChangeFilter={handleChangeFilter}
            />
          ))}
          {Object.keys(tblFilter)?.some(
            (key) => tblFilter[key]?.length > 0
          ) && (
            <Tag
              style={{
                backgroundColor: "#0DA3DE",
                marginRight: "10px",
                position: "relative",
                fontSize: "10px",
                marginLeft: "auto",
              }}
              className="px-2 py-1"
              rounded
            >
              <div>
                Clear All
                <span className="ms-2">
                  <CloseOutlined
                    onClick={() => handleChangeFilter("all", [])}
                  />
                </span>
              </div>
            </Tag>
          )}
        </div>
      )}
      <DataTable
        value={filteredData ? paginatedData : bookingData?.data}
        // reorderableColumns
        // reorderableRows
        // onRowReorder={(e) => setFilteredData(e.value)}
        scrollable={true}
        scrollHeight={scrollHeight}
        dataKey="shipmentId"
        className={`${
          filteredData?.length === 0 ? "text-center" : ""
        } scrolloftable`}
        // style={{ height: "653px", overflowY: "auto", marginBottom: "10px" }}
        // style={{overflowY: "auto" }}
        emptyMessage={noData()}
      >
        <Column
          field="id"
          header={
            <span
              style={{ fontFamily: "Roboto", cursor: "pointer" }}
              className=" d-flex"
            >
              Shipment ID
              {MultiSelectFilter("id", ShipId, tblFilter.id)}
              {sort("id")}
            </span>
          }
          body={shipmentTemplateFilterData}
          style={{ paddingRight: "10px", width: "170px" }}
        ></Column>
        <Column
          field="order_no"
          header={
            <span
              style={{ fontFamily: "Roboto", cursor: "pointer" }}
              className="py-3 d-flex "
            >
              Order No
              {MultiSelectFilter("order_no", orderId_, tblFilter.order_no)}
              {sort("order_no")}
            </span>
          }
          body={shipmentTemplateId}
          style={{ paddingLeft: "10px", paddingRight: "10px", width: "185px" }}
          headerClassName="custom-header"
        ></Column>
        <Column
          field="mode"
          header={
            <span
              style={{ fontFamily: "Roboto", cursor: "pointer" }}
              className=" d-flex"
            >
              Mode
              {MultiSelectFilter("mode", Mode_, tblFilter.mode)}
              {sort("mode")}
            </span>
          }
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
        ></Column>

        <Column
          field="origin"
          header={
            <span
              style={{ fontFamily: "Roboto", cursor: "pointer" }}
              className="d-flex"
            >
              Origin
              {MultiSelectFilter("origin", Org_, tblFilter.origin)}
              {sort("origin")}
            </span>
          }
          body={originBodyTemplate}
          headerClassName="custom-header"
          style={{ width: "185px", paddingLeft: "10px", paddingRight: "10px" }}
        ></Column>
        <Column
          field="destination"
          header={
            <span
              className=" d-flex"
              style={{ fontFamily: "Roboto", cursor: "pointer" }}
            >
              Destination
              {MultiSelectFilter("destination", dest_, tblFilter.destination)}
              {sort("destination")}
            </span>
          }
          body={destinationBodyTemplate}
          style={{ width: "185px", paddingLeft: "10px", paddingRight: "10px" }}
        ></Column>

        <Column
          field="etd_atd"
          header={
            <span className=" d-flex" style={{ position: "relative" }}>
              ETD/ATD
              {MultiSelectFilter("etd_atd", etd_, tblFilter.etd_atd)}
              {sort("etd_atd")}
            </span>
          }
          body={bodyTemplate}
          bodyClassName="custom-cell"
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
        ></Column>
        <Column
          field="eta_ata"
          header={
            <span className=" d-flex">
              ETA/ATA
              {MultiSelectFilter("eta_ata", eta_, tblFilter.eta_ata)}
              {sort("eta_ata")}
            </span>
          }
          body={bodyTemplateEta}
          bodyClassName="custom-cell"
          style={{ paddingLeft: "10px", paddingRight: "10px" }}
        ></Column>
        <Column
          field="status"
          header={
            <span className=" d-flex">
              Status
              {MultiSelectFilter("status", status_, tblFilter.status)}
              {sort("status")}
            </span>
          }
          headerStyle={{
            width: "130px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
          bodyClassName={(rowData) =>
            rowData.status === "Booking In Progress"
              ? "booking-progress-cell"
              : "booked-cell "
          }
          className="text-start my-3"
          style={{ marginLeft: "10px", marginRight: "10px" }}
        ></Column>
        <Column
          field="action"
          body={actionBodyTemplate}
          header={<span>Action</span>}
          className=" text-start"
          headerStyle={{ paddingLeft: "10px" }}
        ></Column>
      </DataTable>
      {showMore && (
        <span
          role="button"
          className="show-more"
          onClick={() => {
            return (
              setshowAllData(!showAllData),
              setscrollHeight((prev) => (prev === "653px" ? "1243px" : "653px"))
            );
          }}
        >
          {showAllData ? "Show Less" : "Show More"}
        </span>
      )}
      {/* <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={filteredData?.length}
        onPageChange={() => setCurrentPage(1)}
        itemsPerPage={itemsPerPage}
      /> */}
      <ShipmentBase
        open={isModalOpen}
        close={setIsModalOpen}
        rowData={modalRowData}
      />
    </div>
  );
};

export default AllBookings;
