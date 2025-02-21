import React, { useState, useEffect } from "react";
import { Input, Image, Tabs, Tooltip, Button } from "antd";
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
import "./invoiceTbl.css";
import { Dropdown } from "primereact/dropdown";
import { CaretDownOutlined } from "@ant-design/icons";
import cal from "../../../assets/calVector.svg";
import Pagination from "../../Core-Components/Pagination";

const CreditTable = () => {
  const [searchvalue, setSearchvalue] = useState("");
  const [activeTab, setActiveTab] = useState("1");
  const dataq = datas?.map((data) => data);
  const [filteredData, setFilteredData] = useState(dataq);
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
  const tabs = [
    { label: "All", key: "1" },
    {
      label: "Pending",
      key: "2",
    },
    {
      label: "Overdue",
      key: "3",
    },
  ];

  const onChange = (key) => {
    setActiveTab(key);
  };

  const handleSubmit = () => {};

  //   table

  const [tblFilter, setTblFilter] = useState({
    invoiceNo: [],
    invoiceDate: [],
    houseNo: [],
    dueDate: [],
    days: [],
    amount: [],
    balance: [],
  });
  useEffect(() => {
    const filterDataTable = dataq.filter((filteredItem) =>
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
        invoiceNo: [],
        invoiceDate: [],
        houseNo: [],
        dueDate: [],
        days: [],
        amount: [],
        balance: [],
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
      if (option.label.length <= 14) {
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
    { label: "Invoice Number", key: "invoiceNo" },
    { label: "Invoice Data", key: "invoiceDate" },
    { label: "House Number", key: "houseNo" },
    { label: "Due Date", key: "dueDate" },
    { label: "Days", key: "days" },
    { label: "Amount", key: "amount" },
    { label: "Balance", key: "balance" },
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
                  {field === "invoiceNo" ? "Invoice Number" : ""}
                  {field === "invoiceDate" ? "Invoice Data" : ""}
                  {field === "houseNo" ? "House Number" : ""}
                  {field === "dueDate" ? "Due Date" : ""}
                  {field === "days" ? "Days" : ""}
                  {field === "amount" ? "Amount" : ""}
                  {field === "balance" ? "Balance" : ""}

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
    <div>
      <div>
        <Input
          placeholder="Search  PO/ Invoice..."
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
      </div>
      <div className="mt-4">
        <div
          style={{ background: "#F8FAFC", margin: 0 }}
          className="invoiceTab d-flex justify-content-between"
        >
          <Tabs activeKey={activeTab} onChange={onChange} items={tabs}></Tabs>
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
                scrollHeight="320px"
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
                  style={{ width: "80px" }}
                  body={
                    <Button type="primary" style={{ background: "#F01E1E" }}>
                      Download
                    </Button>
                  }
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

export default CreditTable;
