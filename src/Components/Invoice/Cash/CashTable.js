import React, { useState, useEffect } from "react";
import { Input, Image, Row, Col, Tooltip, Button } from "antd";
import Search from "../../../assets/SearchVector.svg";
import { DataTable } from "primereact/datatable";
import { datas } from "./data";
import { MultiSelect } from "primereact/multiselect";
import { Column } from "primereact/column";
import { CloseOutlined } from "@ant-design/icons";
import { Tag } from "primereact/tag";
import { IconButton } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Dropdown } from "primereact/dropdown";
import { CaretDownOutlined } from "@ant-design/icons";
import cal from "../../../assets/calVector.svg";
import Pagination from "../../Core-Components/Pagination";
import ttlShipment from "../../../assets/ttlShipment.svg";
import ttlBookAmt from "../../../assets/ttlBookAmt.svg";
import money from "../../../assets/money.png";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { InvoiceCashAction } from "../../../Redux/Actions/InvoiceCashAction";

const CashTable = () => {
  const dispatch = useDispatch();
  const [searchvalue, setSearchvalue] = useState("");
  const [expandedRows, setExpandedRows] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const invoice = useSelector((state) => state.InvoiceC.InvoiceCash.data);
  const invoiceCashData = datas?.map((data) => data);
  const [filteredData, setFilteredData] = useState(invoiceCashData);
  const [data, setData] = useState(filteredData);
  const [clicked, setClicked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [selectedDropdownItem, setSelectedDropdownItem] =
    useState("Past 30 Days");
  const items = [
    "Past 30 Days",
    "Past 3 Months",
    "Past 6 Months",
    "Past 1 Year",
  ];

  const handleSubmit = () => {};

  //   table
  const [tblFilter, setTblFilter] = useState({
    shipment_id: [],
    pol: [],
    pod: [],
    booking_date_and_time: [],
    service: [],
    etd: [],
    eta: [],
  });
  const payload = {
    filter_month: selectedDropdownItem,
    spagesize: "",
    sperpage: "",
    invoice_no: "",
    origin: "",
    destination: "",
    mode: "",
    from_date: "",
    to_date: "",
  };
  useEffect(() => {
    dispatch(InvoiceCashAction({payload}));
  }, [dispatch,selectedDropdownItem]);

  useEffect(() => {
    const filterDataTable = invoiceCashData?.filter((filteredItem) =>
      Object.keys(tblFilter).every(
        (key) =>
          tblFilter[key]?.length === 0 ||
          tblFilter[key]?.includes(filteredItem[key])
      )
    );
    setFilteredData(filterDataTable);
    setCurrentPage(1);
  }, [tblFilter]);

  const getUniqueOptions = (array, key) => {
    if (!Array.isArray(array) || !array?.length) {
      return [];
    }
    return Array.from(new Set(array.map((data) => data[key]))).map(
      (value, index) => ({
        label: value,
        value,
        key: index,
      })
    );
  };
  const valueTemplate = () => {
    return (
      <div>
        <Image
          src={cal}
          alt="cal"
          style={{
            width: "12px",
            height: "12px",
            marginTop: "-2px",
            marginRight: "7px",
          }}
        />
        <span
          style={{
            color: "#495A6E",
            fontWeight: "400",
            fontSize: "13px",
            lineHeight: "19px",
            letterSpacing: "1%",
            textAlign: "center",
          }}
        >
          {selectedDropdownItem}
        </span>
        <CaretDownOutlined className="ms-1" style={{ color: "#67788E" }} />
      </div>
    );
  };
  const dropdownbutton = document.querySelector(".p-dropdown-trigger");
  if (dropdownbutton) {
    dropdownbutton.remove();
  }
  useEffect(() => {
    if (clicked) {
      setData(filteredData);
    }
  }, [clicked]);
  const renderTruncatedText = (text, length = 20) => {
    text = text ? String(text) : "";
    if (text?.length <= length) {
      return text;
    } else {
      const truncatedText = text?.slice(0, length)?.trim() + "..";
      return (
        <Tooltip title={text}>
          <span>{truncatedText}</span>
        </Tooltip>
      );
    }
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  //   Extract the data for the current page
  const currentPageData = filteredData?.slice(startIndex, endIndex);

  const sort = (col) => {
    const handleSort = (key) => {
      let direction = "asc";
      if (sortConfig.key === key && sortConfig.direction === "asc") {
        direction = "desc";
      }
      setSortConfig({ key, direction });
      const sortedData = [...filteredData].sort((a, b) => {
        const valA = a[key];
        const valB = b[key];
        if (!isNaN(valA) && !isNaN(valB)) {
          return direction === "asc" ? valA - valB : valB - valA;
        }
        return direction === "asc"
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA);
      });
      setFilteredData(sortedData);
    };
    return (
      <div className="d-flex sorticon" style={{ flexDirection: "column" }}>
        <IconButton
          onClick={() => handleSort(col)}
          className="p-0"
          // style={{ color: "white" }}
        >
          <ExpandLessIcon className="sortup" />
        </IconButton>
        <IconButton
          onClick={() => handleSort(col)}
          className="p-0"
          // style={{ color: "white" }}
        >
          <ExpandMoreIcon className="sortdown" />
        </IconButton>
      </div>
    );
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleChangeFilter = (field, filterValues) => {
    if (field === "all") {
      setTblFilter({
        shipment_id: [],
        pol: [],
        pod: [],
        booking_date_and_time: [],
        service: [],
        etd: [],
        eta: [],
      });
    } else {
      setTblFilter((prevFilters) => ({
        ...prevFilters,
        [field]: filterValues,
      }));
    }
  };

  function MultiSelectFilter(filterKey, options, value, additionalStyles) {
    const renderOption = (option) => {
      if (option?.label?.length <= 14) {
        return <span>{option.label}</span>;
      } else {
        const truncatedText = option.label?.slice(0, 14).trim() + "..";
        return (
          <Tooltip placement="topLeft" title={option.label}>
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
          width: "20px",
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
  const tableHeaders = [
    { label: "Shipment", key: "shipment_id" },
    { label: "POL", key: "pol" },
    { label: "POD", key: "pod" },
    { label: "Booking Date & Time", key: "booking_date_and_time" },
    { label: "Services", key: "service" },
    { label: "ETD", key: "etd" },
    { label: "ETA", key: "eta" },
  ];
  const FilterTag = ({ field, filterValues, handleChangeFilter }) => {
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
                  backgroundColor: "#F01E1E",
                  marginRight: "10px",
                  position: "relative",
                  fontSize: "10px",
                }}
                className="px-2 py-1"
                rounded
              >
                <div>
                  {field === "shipment_id" ? "Shipment" : ""}
                  {field === "pol" ? "POL" : ""}
                  {field === "pod" ? "POD" : ""}
                  {field === "booking_date_and_time"
                    ? "Booking Date & Time"
                    : ""}
                  {field === "service" ? "Services" : ""}
                  {field === "etd" ? "ETD" : ""}
                  {field === "eta" ? "ETA" : ""}

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


  const handleRowToggle = (e) => {
    let newExpandedRows = expandedRows ? [...expandedRows] : [];
    if (newExpandedRows.includes(e.data)) {
      newExpandedRows = newExpandedRows?.filter((item) => item !== e.data);
    } else {
      newExpandedRows.push(e.data);
    }
    setExpandedRows(newExpandedRows);
  };

  const expanderColumnBody = (rowData) => {
    return (
      <div
        onClick={(e) => handleRowToggle({ originalEvent: e, data: rowData })}
      >
        {expandedRows?.includes(rowData) ? (
          <ArrowDropUpIcon />
        ) : (
          <ArrowDropDownIcon />
        )}
      </div>
    );
  };
  const rowExpansionTemplate = (data) => {
    const actionBody = (rowData) => {
      return (
        <div style={{ paddingTop: 10, paddingBottom: 10 }}>
          <Button
            type="primary"
            style={{ background: "#F01E1E", width: 160 }}
            onClick={() => window.open(rowData.download_link, "_blank")}
          >
            Download
          </Button>
        </div>
      );
    };

    return (
      <div className="p-3">
        <DataTable
          value={data.transactions}
          selectionMode="multiple"
          selection={selectedData}
          onSelectionChange={(e) => setSelectedData(e.value)}
        >
          <Column
            selectionMode="multiple"
            style={{ width: 70 }}
            align={"center"}
          />
          <Column
            field="transaction"
            header="Transaction"
            style={{ width: 230 }}
          ></Column>
          <Column
            field="Payment_method"
            header="Payment Method"
            style={{ width: 230 }}
          ></Column>
          <Column
            field="transaction_date_and_time"
            header="Transaction Date & Time"
            style={{ padding: 10, width: 230 }}
          ></Column>
          <Column
            field="actions"
            header="Action"
            body={actionBody}
            style={{ width: 150 }}
          ></Column>
        </DataTable>
      </div>
    );
  };

  const rowClassName = (rowData) => {
    return {
      "highlighted-row": rowData.shipment_id === "Total Shipments",
    };
  };

  return (
    <div style={{ maxWidth: "1255px", background: "white", padding: "34px" }}>
      <div>
        <div className="invoiceTab d-flex justify-content-between">
          <Input
            placeholder="Search booking id,origin,destination..."
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
              width: "350px",
              height: "36px",
              borderRadius: "6px",
              border: "2px solid #E7EAF0",
              padding: "9px 11px 9px 11px",
            }}
            value={searchvalue}
            onChange={(e) => setSearchvalue(e.target.value)}
            onKeyDown={(e) => handleSubmit(e)}
          />
          <div
            className="dropdownfield mx-2"
            style={{ alignContent: "center" }}
          >
            <Dropdown
              value={selectedDropdownItem}
              onChange={(e) => {
                setSelectedDropdownItem(e.value);
              }}
              options={items}
              valueTemplate={valueTemplate}
              className="w-full md:w-14rem datehover"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </div>
      <Row className="mt-4">
        <Col style={{ borderRight: "1px solid #E7EAF0" }}>
          <div
            className="d-flex flex-direction-column gap-3 "
            style={{ paddingRight: "50px" }}
          >
            <img src={ttlShipment} alt="credit" />
            <div>
              <div className="creditText">Total Shipments</div>
              <div className="creditTextAmt">5,00,000 INR</div>
            </div>
          </div>
        </Col>
        <Col style={{ borderRight: "1px solid #E7EAF0" }}>
          <div
            className="d-flex flex-direction-column gap-3"
            style={{ paddingLeft: 50, paddingRight: 50 }}
          >
            <img src={ttlBookAmt} alt="credit" />
            <div>
              <div className="creditText">Total Booking Amount </div>
              <div className="creditTextAmt">2,00,000 INR</div>
            </div>
          </div>
        </Col>
        <Col>
          <div
            className="d-flex flex-direction-column gap-3"
            style={{ paddingLeft: 50 }}
          >
            <img src={money} alt="credit" />
            <div>
              <div className="creditText">Pending Amount </div>
              <div className="creditTextAmt">3,00,000 INR</div>
            </div>
          </div>
        </Col>
      </Row>
      <div className="mt-4">
        <div
          style={{
            backgroundColor: "white",
          }}
          className="mt-5"
        >
          <div>
            {Object.keys(tblFilter)?.some(
              (key) => tblFilter[key]?.length > 0
            ) && (
              <div
                className="d-flex ps-2 justify-content-between "
                style={{
                  padding: "10px 0px",
                  marginTop: "-43px",
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
                      backgroundColor: "#F01E1E",
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
          </div>
          <div className="">
            <div>
              <DataTable
                value={currentPageData}
                selectionMode="multiple"
                scrollable
                scrollHeight="400px"
                expandedRows={expandedRows}
                onRowToggle={(e) => setExpandedRows(e.data)}
                rowExpansionTemplate={rowExpansionTemplate}
                rowClassName={rowClassName}
                style={{ height: 400 }}
              >
                {tableHeaders.map((header, index) => (
                  <Column
                    key={index}
                    field={header.key}
                    className="p-3"
                    style={{ width: "80px" }}
                    header={
                      <div className="d-flex justify-content-between p-3">
                        {header.label}
                        {MultiSelectFilter(
                          header.key,
                          getUniqueOptions(data, header.key),
                          tblFilter[header.key]
                        )}
                        {sort(header.key)}
                      </div>
                    }
                    body={(rowData) => renderTruncatedText(rowData[header.key])}
                  />
                ))}
                <Column
                  expander
                  style={{ width: "3em" }}
                  body={expanderColumnBody}
                />
              </DataTable>
            </div>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalItems={filteredData?.length}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashTable;
