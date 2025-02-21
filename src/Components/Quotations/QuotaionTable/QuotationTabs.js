import React, { useState, useEffect } from "react";
import { Tabs, Row, Col, Image } from "antd";
import "../../Shipments/ShipBookingTabs.css";
import { useDispatch, useSelector } from "react-redux";
import QuotationTable from "./QuotationTable";
import { Dropdown } from "primereact/dropdown";
import {  CaretDownOutlined } from "@ant-design/icons";
import cal from "../../../assets/calVector.svg";
import { QuotationRequest } from "../../../Redux/Actions/QuotationAction";

const QuotationTabs = ({setHighlightShipmentCard,selectedDataToPatch,setSelectedDataToPatch}) => {
    const dispatch = useDispatch();
  const quotationData = useSelector((state) => state?.QuotationList?.Quotation?.result);
  const tabCount = quotationData?.statuswise_count
  console.log(tabCount)
  console.log(quotationData)
  const [activeKey, setActiveKey] = useState("1");
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(quotationData && quotationData?.content);
  const [globalFilter, setGlobalFilter] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [showMore, setshowMore] = useState(false)
  const [showAllData, setshowAllData] = useState(false)
  const [scrollHeight, setscrollHeight] = useState("653px")
  const [popoverVisible, setPopoverVisible] = useState(false); // State to control Popover visibility
    const [filterValue, setFilterValue] = useState(30);
  const [selectedDropdownItem, setSelectedDropdownItem] =
    useState("Past 30 Days");
    const items = [
      "Past 30 Days",
      "Past 3 Months",
      "Past 6 Months",
      "Past 1 Year",
    ]; 
  
console.log(filteredData)
console.log(data)

let schedule;
  if (tabCount && tabCount?.length > 0) {
    schedule = tabCount[0];
  } 

console.log(schedule)

useEffect(() => {
    if (quotationData && quotationData?.content) {
      console.log("works")
      setData(quotationData?.content);
    }
  }, [quotationData?.content]);

  const filterData = (status) => {
    console.log(status)
    if (status === "All") {
      console.log(data)
      setFilteredData(data);
      setSelectedStatus("All");
    } else {
      setFilteredData( data.filter((item) => status.includes(item.status)));
      setSelectedStatus(status);
    }
  };

  useEffect(() => {
      const lowercasedFilter = globalFilter?.toLowerCase();
      const filteredData = quotationData?.content?.filter((item) =>
        Object.keys(item).some((key) =>
          String(item[key]).toLowerCase().includes(lowercasedFilter)
        )
      );
      setFilteredData(filteredData);
      setCurrentPage(1);
    }, [globalFilter, quotationData?.content]);
  
    useEffect(() => {
      const filterDaysMap = {
        "Past 30 Days": 30,
        "Past 3 Months": 91,
        "Past 6 Months": 182,
        "Past 1 Year": 365,
      };
      setFilterValue(filterDaysMap[selectedDropdownItem]);
    }, [selectedDropdownItem]);

  // useEffect(() => {
  //   if (quotationData) {
  //     setData(quotationData);
  //   }
  // }, [quotationData]);

    const payload = {
      filter_days: filterValue
      // quotation_type: "",
      // spagesize: "",
      // sperpage: "",
      // quotation_no: "",
      // origin: "",
      // destination: "",
      // mode: "",
      // etd: "",
      // eta: "",
    };
    useEffect(() => {
        dispatch(QuotationRequest({ payload }));
      
    }, [dispatch, filterValue]);

  useEffect(() => {
    console.log(typeof activeKey)
    setActiveKey("1");
    filterData("All");
    // setCurrentPage(1);
  }, [selectedDropdownItem]);

  // useEffect(() => {
  //   filterData("All");
  //   // setCurrentPage(1);
  // }, []);

  const onChange = (key) => {
    setActiveKey(key);
    switch (key) {
      case "1":
        filterData("All");
        setCurrentPage(1);
        break;
      case "2":
        filterData(["active"]);
        setCurrentPage(1);
        break;
      case "3":
        filterData(["booked"]);
        setCurrentPage(1);
        break;
      case "4":
        filterData(["expired"]);
        setCurrentPage(1);
        break;
      case "5":
        filterData(["pending"]);
        setCurrentPage(1);
        break;
      default:
        filterData("All");
        setCurrentPage(1);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const tabs = [
    { label: `All Quotations (${schedule?.all ? schedule?.all : 0})`, key: "1" },
    {
      label: `Active (${schedule?.active ? schedule?.active : 0})`,
      key: "2",
    },
    {
      label: `Booked (${schedule?.booked ? schedule?.booked : 0})`,
      key: "3",
    },
    {
      label: `Expired (${schedule?.expired ? schedule?.expired : 0})`,
      key: "4",
    },
    {
      label: `Requested (${schedule?.requested ? schedule?.requested : 0})`,
      key: "5",
    },
  ];

  console.log(activeKey)
  console.log(data)

    //for tab change according to show display showmore button

    useEffect(() => {
      if(activeKey && schedule){
        if(Number(activeKey) === 1 && Number(schedule?.all) > 10){
          setshowMore(true)
        }
        else if(Number(activeKey) === 2 && Number(schedule?.active) > 10){
          setshowMore(true)
        }
        else if(Number(activeKey) === 3 && Number(schedule?.booked) > 10){
          setshowMore(true)
        }
        else if(Number(activeKey) === 4 && Number(schedule?.expired) > 10){
          setshowMore(true)
        }
        else if(Number(activeKey) === 5 && Number(schedule?.requested) > 10){
          setshowMore(true)
        }
        else{
          setshowMore(false)
        }
      }
      
  
      setshowAllData(false)
      setscrollHeight("653px")
      console.log("working")
    }, [activeKey && schedule])

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
  return (
    <div
      className="mx-auto"
      style={{
        minWidth: "1255px",
        borderRadius: "8px",
      }}
    >
      <Row style={{ borderRadius: "8px" }}>
        <Col span={24} style={{ backgroundColor: "#F8FAFC",borderRadius: "8px 8px 0px 0px", border: "1px solid #f0f0f0",borderBottom: "0px" }}>
          <Row justify="space-between" style={{ height: "57px" }}>
            <Col span={20}>
              <Tabs
                activeKey={activeKey}
                onChange={onChange}
                items={tabs}
              ></Tabs>
            </Col>
            <Col className="d-flex " >
              <div
                className="dropdownfield mx-2"
                style={{ alignContent: "center" ,height:"57px"}}
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
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{ padding: "20px", backgroundColor: "white",borderRadius: "0px 0px 8px 8px", border: "1px solid #f0f0f0"}}>
          <QuotationTable
            filterData={filteredData}
            selectedStatus={selectedStatus}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setActiveKey={setActiveKey}
            selectedDropdownItem={selectedDropdownItem}
            setSelectedDropdownItem={setSelectedDropdownItem}
            setHighlightShipmentCard={setHighlightShipmentCard}
            selectedDataToPatch={selectedDataToPatch}
            setSelectedDataToPatch={setSelectedDataToPatch} 
            showMore={showMore}
            showAllData={showAllData}
            setshowAllData={setshowAllData}
            scrollHeight={scrollHeight}
            setscrollHeight={setscrollHeight}
            popoverVisible={popoverVisible}
            setPopoverVisible={setPopoverVisible}
            filterValue={filterValue}
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        </Col>
      </Row>
    </div>
  );
};

export default QuotationTabs;
