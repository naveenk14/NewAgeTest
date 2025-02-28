import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import Pagination from "../../Core-Components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "antd";
import CountryFlag from "../../Core-Components/CountryFlag";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Row, Col, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IconButton } from "@mui/material";
import Vector from "../../../assets/Vector1.png";
import Verified from "../../../assets/Verified.png";
import Requested from "./QModal/Requested";
import { useNavigate } from "react-router-dom";
import { QuotationRequest } from "../../../Redux/Actions/QuotationAction";
import { CircularProgress, Box } from "@mui/material";
import { MultiSelect } from "primereact/multiselect";
import { Tag } from "primereact/tag";
import { CloseOutlined } from "@ant-design/icons";
import "../../Dashboard/ShipmentHistory/ShipmentHistory.css";
import shipgif from "../../../assets/shipnxtgif.gif";
// import { FindNewRateRequest } from "../../../Redux/Actions/FindNewRateAction";
import getSymbolFromCurrency from "currency-symbol-map";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { QuotationDownloadRequest } from "../../../Redux/Actions/QuotationDownloadAction";

const QuotationTable = ({
  filterData,
  selectedStatus,
  currentPage,
  setCurrentPage,
  selectedDropdownItem,
  setHighlightShipmentCard,
  selectedDataToPatch,
  setSelectedDataToPatch,
  showMore,
  showAllData,
  setshowAllData,
  scrollHeight,
  setscrollHeight,
  popoverVisible,
  setPopoverVisible,
  filterValue,
  globalFilter,
  setGlobalFilter
  // setSelectedDropdownItem,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  console.log(filterValue)
  const [requstedModal, setrequstedModal] = useState(false);
  const [filteredData, setFilteredData] = useState(filterData);
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(filteredData);
  const [selectfield, setselectfield] = useState("");
  // const [showAllData, setshowAllData] = useState(false)
  // const [scrollHeight, setscrollHeight] = useState("653px")
  console.log(filterData)
  console.log(data)

  const itemsPerPage = 10;
  const quotationData = useSelector(
    (state) => state?.QuotationList?.Quotation?.result?.content
  );
  const { loading } = useSelector((state) => state?.QuotationList);
  const [tblFilter, setTblFilter] = useState({
    ref_id: [],
    origin: [],
    destination: [],
    load: [],
    weight: [],
    Volume: [],
    tos: [],
    rate_validity: [],
    status: [],
  });
  useEffect(() => {
    const filterDataTable = filterData?.filter((item) =>
      Object.keys(tblFilter).every(
        (key) =>
          tblFilter[key]?.length === 0 || tblFilter[key]?.includes(item[key])
      )
    );
    console.log(filterDataTable)
    setFilteredData(filterDataTable);
    setCurrentPage(1);
  }, [tblFilter, filterData]);
  const getUniqueOptions = (array, key) => {
    if (!Array.isArray(array) || !array?.length) {
      return [];
    }
    return Array.from(new Set(array.map((data) => data[key]))).map((value) => ({
      label: value,
      value,
    }));
  };

  useEffect(() => {
    if (clicked) {
      setData(filteredData);
    }
  }, [clicked]);
  const refId_ = getUniqueOptions(data, "ref_id");
  const Org_ = getUniqueOptions(data, "origin");
  const dest_ = getUniqueOptions(data, "destination");
  const load_ = getUniqueOptions(data, "load");
  const weight_ = getUniqueOptions(data, "weight");
  const volume_ = getUniqueOptions(data, "Volume");
  const tos_ = getUniqueOptions(data, "tos");
  const rate_ = getUniqueOptions(data, "rate_validity");
  const status_ = getUniqueOptions(data, "status");
  const handleChangeFilter = (field, filterValues) => {
    if (field === "all") {
      setTblFilter({
        ref_id: [],
        origin: [],
        destination: [],
        load: [],
        weight: [],
        volume: [],
        tos: [],
        rate_validity: [],
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
        ref_id: [],
        origin: [],
        destination: [],
        load: [],
        weight: [],
        volume: [],
        tos: [],
        rate_validity: [],
        status: [],
      });
    }
  }, [selectedStatus]);

  function MultiSelectFilter(
    filterKey,
    options,
    value,
    headerText,
    additionalStyles
  ) {
    const renderOption = (option) => {
      if (option.label.length <= 14) {
        return <span>{option.label}</span>;
      } else {
        const truncatedText = option.label?.slice(0, 14).trim() + "...";
        return (
          <Tooltip placement="topLeft" title={option.label}>
            <span role="button">{truncatedText}</span>
          </Tooltip>
        );
      }
    };
    const dynamicWidth = headerText?.length * 8 + "px";
    return (
      <MultiSelect
        className="custom-multi-select"
        value={value}
        options={options}
        filter
        style={{
          position: "absolute",
          opacity: "0",
          width: dynamicWidth,
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

  // const payload = {
  //   filter_days: filterValue
  //   // quotation_type: "",
  //   // spagesize: "",
  //   // sperpage: "",
  //   // quotation_no: "",
  //   // origin: "",
  //   // destination: "",
  //   // mode: "",
  //   // etd: "",
  //   // eta: "",
  // };
  // useEffect(() => {
  //     dispatch(QuotationRequest({ payload }));
    
  // }, [dispatch, filterValue]);

  

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // Extract the data for the current page
  // const currentPageData = filteredData?.slice(startIndex, endIndex);
  const currentPageData = showAllData
    ? filteredData
    : filteredData?.slice(
        startIndex,
        10
        // startIndex + itemsPerPage
      );
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
                  {field === "ref_id" ? "Quotation No" : ""}
                  {field === "load" ? "Load" : ""}
                  {field === "tos" ? "TOS" : ""}
                  {field === "status" ? "Action" : ""}
                  {field === "rate_validity" ? "Rate Validity" : ""}
                  {field === "origin" ? "Origin" : ""}
                  {field === "destination" ? "Destination" : ""}
                  {field === "weight" ? "Weight" : ""}
                  {field === "Volume" ? "Volume" : ""}
                  &nbsp; :{" "}
                  {filterValues?.length === 1 ? (
                    <span className="me-2">{filterValues[0]}</span>
                  ) : (
                    <span>
                      {filterValues[0]}&nbsp;
                      <Button
                        style={{ backgroundColor: "#0DA3DE", border: "none" }}
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
  const actionBodyTemplate = (rowData) => {
    console.log(rowData);
    let buttonLabel;
    let btnClass;
    btnClass = "cargo-picked-up";
    if (rowData.status === "requested") {
      buttonLabel = (
        <>
          Requested{" "}
          <img src={Vector} style={{ marginTop: "-2px", marginLeft: "4px" }} />
        </>
      );
      btnClass = "waringBtn";
    } else if (rowData.status === "Book For $300") {
      buttonLabel = "Book For $300";
      btnClass = "dangerBtn";
    } else if (rowData.status === "active") {
      buttonLabel = `Book For ${rowData?.quotation_currency} ${
        rowData?.quotation_amount
      }`;
      btnClass = "dangerBtn";
    } else if (rowData.status === "Find New Rates" || "expired") {
      buttonLabel = (
        <>
          Find New Rates{" "}
          <img src={Vector} style={{ marginTop: "-2px", marginLeft: "4px" }} />
        </>
      );
      btnClass = "waringBtn";
    } else if (rowData.status === "booked") {
      buttonLabel = (
        <>
          <img
            src={Verified}
            style={{ marginTop: "-2px", marginRight: "4px" }}
          />{" "}
          Booked
        </>
      );
      btnClass = "booked";
    }
    const hadleModalOpen = () => {
      console.log(rowData)
      if (rowData.status === "Requested") {
        setrequstedModal(true);
      } else if (rowData.status === "Active") {
        navigate("/quick");
      } else if (rowData.status === "expired") {
        setHighlightShipmentCard(true);
        navigate('/quotation',{state:{rowData}}) 
        // setSelectedDataToPatch(rowData);
      }
    };

    const downloadFile = () => {
      // console.log(rowData?.quotation_link);
      // const fileUrl = rowData?.quotation_link; // The file URL from the API response
      // const link = document.createElement("a");
      // link.target = "_blank";
      // link.href = fileUrl;
      // link.setAttribute("download", "file.pdf"); // Optionally specify the file name
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
      // const data = await fetch(rowData?.quotation_link)
      const payload = rowData && rowData?.EqId;
      dispatch(QuotationDownloadRequest({payload}));
    };

    return (
      <>
        <Button
          outlined
          className={btnClass}
          style={{
            background: "#0DA3DE",
            color: "white",
            borderRadius: "8px",
            width: "160px",
            height: "30px",
            padding: "",
            gap: "8px",
          }}
          label={buttonLabel}
          onClick={hadleModalOpen}
        />
        <span role="button" className="p-2" onClick={() => downloadFile()}>
          <MdOutlineFileDownload size={20} />
        </span>
      </>
    );
  };
  const shipmentTemplate = (rowData) => {
    return (
      <div style={{ textAlign: "start" }}>
        <div className="bold px-4">{rowData?.ref_id}</div>
      </div>
    );
  };
  const originBodyTemplate = (rowData) => {
    console.log(rowData);
    return (
      <div className="origin-cell" style={{ textAlign: "start" }}>
        <CountryFlag countryCode={rowData?.origin_countrycode} />
        <span
          style={{
            padding: "8px",
            fontWeight: "400",
            width: "50px",
            textWrap: "wrap",
            textAlign: "start",
          }}
        >
          {rowData?.origin.length <= 10 ? (
            rowData?.origin
          ) : (
            <Tooltip placement="topLeft" title={rowData?.origin}>
              <span role="button">
                {rowData?.origin.slice(0, 9).trim().split(" ").join("") + ".."}
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
        <span style={{ padding: "8px", fontWeight: "400", textWrap: "wrap" }}>
          {rowData?.destination.length <= 10 ? (
            rowData?.destination
          ) : (
            <Tooltip placement="topLeft" title={rowData?.destination}>
              <span role="button">
                {rowData?.destination.slice(0, 9).trim().split("").join("") +
                  ".."}
              </span>
            </Tooltip>
          )}
        </span>
      </div>
    );
  };

  const renderHeader = () => {
    return (
      <>
        <Row
          justify="space-between"
          className="w-full pb-3"
          style={{ backgroundColor: "white" }}
        >
          <Col>
            <Input
              placeholder="Search Ref id , origin, destination... "
              prefix={<SearchOutlined style={{ color: "#94A2B2" }} />}
              style={{
                width: "368.13px",
                padding: "4px 11px",
                borderRadius: "4px",
              }}
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
            />
          </Col>
        </Row>
        <Row style={{ backgroundColor: "white" }}>
          <Col>
            {Object.keys(tblFilter)?.some(
              (key) => tblFilter[key]?.length > 0
            ) && (
              <div
                className="d-flex ps-2 justify-content-between"
                style={{
                  marginBottom: "9px",
                  padding: "5px 0px",
                  marginTop: "-11px",
                  minWidth: "1214px",
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
          </Col>
        </Row>
      </>
    );
  };
  const noData = () => {
    return (
      <div
        className="no-options "
        style={{ alignSelf: "center", height: "595px" }}
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
        }}
      >
        {/* <CircularProgress style={{ color: "red" }} /> */}
        <img src={shipgif} width="140px" height="140px" />
      </Box>
    );
  }
  const sort = (col) => {
    const handleSort = (col) => {
      console.log("Ascending");
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
      console.log("Descending");
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

  console.log(quotationData);

  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <DataTable
        value={currentPageData}
        style={{ minHeight: "653px" }}
        scrollable={true}
        scrollHeight={scrollHeight}
        header={renderHeader}
        emptyMessage={noData}
      >
        <Column
          field="ref_id"
          header={
            <span
              style={{ fontFamily: "Roboto", cursor: "pointer" }}
              className="px-4 d-flex"
            >
              Quotation No
              {MultiSelectFilter("ref_id", refId_, tblFilter.ref_id, "Ref. ID")}
              {sort("ref_id")}
            </span>
          }
          body={shipmentTemplate}
        ></Column>

        <Column
          field="origin"
          header={
            <span
              style={{ fontFamily: "Roboto", cursor: "pointer" }}
              className="d-flex"
            >
              Origin
              {MultiSelectFilter("origin", Org_, tblFilter.origin, "Origin")}
              {sort("origin")}
            </span>
          }
          body={originBodyTemplate}
          headerClassName="custom-header p-3"
          className="p-3"
        ></Column>
        <Column
          field="destination"
          header={
            <span
              className="p-3 d-flex"
              style={{ fontFamily: "Roboto", cursor: "pointer" }}
            >
              Destination
              {MultiSelectFilter(
                "destination",
                dest_,
                tblFilter.destination,
                "Destination"
              )}
              {sort("destination")}
            </span>
          }
          body={destinationBodyTemplate}
          className="p-3"
        ></Column>
        <Column
          field="load"
          header={
            <span className="p-3 d-flex">
              Load
              {MultiSelectFilter("load", load_, tblFilter.load, "Load")}
              {sort("load")}
            </span>
          }
          bodyClassName="custom-cell"
          className="p-3"
        ></Column>
        <Column
          field="weight"
          header={
            <span className="p-3 d-flex">
              Weight
              {MultiSelectFilter("weight", weight_, tblFilter.weight, "WEIGHT")}
              {sort("weight")}
            </span>
          }
          bodyClassName="custom-cell"
          className="p-3 text-start"
        ></Column>
        <Column
          field="Volume"
          header={
            <span className="p-3 d-flex">
              Volume
              {MultiSelectFilter("Volume", volume_, tblFilter.volume, "VOLUME")}
              {sort("Volume")}
            </span>
          }
          bodyClassName="custom-cell"
          className="p-3 text-start"
        ></Column>
        <Column
          field="tos"
          header={
            <span className="p-3 d-flex">
              TOS
              {MultiSelectFilter("tos", tos_, tblFilter.tos, "TOS")}
              {sort("tos")}
            </span>
          }
          bodyClassName="custom-cell"
          className="p-3 text-start"
        ></Column>
        <Column
          field="rate_validity"
          header={
            <span className="p-3 d-flex">
              Rate Validity
              {MultiSelectFilter(
                "rate_validity",
                rate_,
                tblFilter.rate_validity,
                "Rate Validity"
              )}
              {sort("rate_validity")}
            </span>
          }
          bodyClassName="custom-cell"
          className="text-start p-3"
        ></Column>
        <Column
          field="status"
          body={actionBodyTemplate}
          header={
            <span className="p-3 d-flex">
              Action
              {MultiSelectFilter("status", status_, tblFilter.status, "Action")}
              {sort("status")}
            </span>
          }
          className="p-3 text-start"
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
        itemsPerPage={itemsPerPage}
      /> */}
      <Requested
        requstedModal={requstedModal}
        handleCancel={() => setrequstedModal(false)}
      />
    </div>
  );
};

export default QuotationTable;
