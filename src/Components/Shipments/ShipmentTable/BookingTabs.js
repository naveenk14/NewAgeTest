import React, { useState, useEffect } from "react";
import { Tabs, Row, Col, Image } from "antd";
import AllBookings from "./AllBookings";
import { DsrDownloadRequest } from "../../../Redux/Actions/DsrDownloadAction";
import "../ShipBookingTabs.css";
import { useDispatch, useSelector } from "react-redux";
import { SearchHeader } from "./SearchHeader";
import { Dropdown } from "primereact/dropdown";
import ButtonList from "../../../assets/Button.svg";
import Buttonfade from "../../../assets/Buttonfade.svg";
import Group1 from "../../../assets/CButton.svg";
import button16 from "../../../assets/Button16.svg";
import Navbar from "../../Layout/Navbar";
import image1 from "../../../assets/Shape.svg";
import image2 from "../../../assets/Shape1.svg";
import image3 from "../../../assets/Shape2.svg";
import DailyReportTable from "./DailyReport/DailyReportTable";
import { CaretDownOutlined } from "@ant-design/icons";
import cal from "../../../assets/calVector.svg";
import ScheduleDsrModal from "./DailyReport/DailyReportModal/ScheduleDsrModal";
import { SaveDsrReqeust } from "../../../Redux/Actions/SaveDsrAction";
import { toast } from "react-toastify";
import { DsrReportRequest } from "../../../Redux/Actions/DsrReportAction";

function BookingTabs({ showText, setShowText, setShowmap }) {
  const [searchQuery] = useState("");
  const dispatch = useDispatch();
  const ShipmentData = useSelector((state) => state.Booking);
  const bookingData = ShipmentData?.booking;
  console.log(ShipmentData)
  console.log(bookingData)
  const tabCount = ShipmentData?.booking?.statuswise_count;
  const [data, setData] = useState(bookingData && bookingData?.data);
  const [schedulemodal, setSchedulemodal] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("1");
  const [isAscending, setIsAscending] = useState(true);
  const [filteredData, setFilteredData] = useState(data);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedDropdownItem, setSelectedDropdownItem] =
    useState("Past 60 Days");
  const [filterValue, setFilterValue] = useState(60);
  const [filterReport, setFilterReport] = useState();
  // const [download, setdownload] = useState();
  const [filterMonthValue, setFilterMonthValue] = useState(null);
  const [showMore, setshowMore] = useState(false)
  const [showAllData, setshowAllData] = useState(false)
  const [scrollHeight, setscrollHeight] = useState("653px")
  // const saveSuccess = useSelector((state) => state?.SaveDsr?.savedsr?.Response);
  const [popoverVisible, setPopoverVisible] = useState(false); // State to control Popover visibility
  const [dsrpopoverVisible, setDsrPopoverVisible] = useState(false); // State to control Popover visibility

  let schedule;
  if (tabCount && tabCount.length > 0) {
    schedule = tabCount[0];
  } else {
  }
  useEffect(() => {
    if (bookingData && bookingData.data) {
      setData(bookingData?.data);
    }
  }, [bookingData]);

  const filterData = (status) => {
    if (status === "All") {
      setFilteredData(data);
      setSelectedStatus("All");
    } else {
      setFilteredData(data.filter((item) => status.includes(item.status)));
      setSelectedStatus(status);
    }
  };

  useEffect(() => {
    const newFilteredData = data && data?.filter((item) =>
      item.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(newFilteredData);
  }, [searchQuery, data]);

  const items = [
    "Past 30 Days",
    "Past 60 Days",
    "Past 90 Days",
    "Past 6 Months",
  ];
  useEffect(() => {
    if (selectedDropdownItem === "Past 90 Days") {
      setFilterValue(90);
      setFilterMonthValue(null);
      setActiveTab("1");
    } else if (selectedDropdownItem === "Past 30 Days") {
      setFilterValue(30);
      setFilterMonthValue(null);
      setActiveTab("1");
    } else if (selectedDropdownItem === "Past 60 Days") {
      setFilterValue(60);
      setFilterMonthValue(null);
      setActiveTab("1");
    } else if (selectedDropdownItem === "Past 6 Months") {
      setFilterMonthValue(null);
      setFilterValue(180);
      setActiveTab("1");
    }
  }, [selectedDropdownItem]);

  const Profileusertoken = useSelector(
    (state) => state.ProfileData?.profileData?.usertoken
  );
  const payloadofdsrdownload = {
    sl_no: Profileusertoken,
    sorigin: "",
    sdest: "",
    sstatus: "",
    sshipper: "",
    sconsignee: "",
    sfrmdate: "",
    stodate: "",
    sshipmentby: "",
    simport_export: "",
    scolumns: "",
    setafrmdate: "",
    setatodate: "",
  };
  // const handleDownloadDsr = (e) => {
  //   e.preventDefault();
  //   console.log("download");
  //   dispatch(DsrDownloadRequest({ payloadofdsrdownload }));
  // };

  // const dsrPayload = {
  //   sl_no: Profileusertoken,
  //   sorigin: "",
  //   sdest: "",
  //   sstatus: "",
  //   sshipper: "",
  //   sconsignee: "",
  //   sfrmdate: "",
  //   stodate: "",
  //   sshipmentby: "",
  //   simport_export: "",
  //   setafrmdate: "",
  //   setatodate: "",
  // };

   // This is get dsr api call
    // const dispatch = useDispatch();
    // const successRsp = useSelector((state) => state?.SaveDsr?.savedsr);
    // console.log(successRsp, "scsrsp");
    // useEffect(() => {
    //   if (Profileusertoken) {
    //     dispatch(DsrReportRequest({ dsrPayload }));
    //   }
    // }, [Profileusertoken, dispatch, successRsp]);

  const DsrReportData = useSelector((state) => state.DsrReport?.dsrData?.result);
  console.log(DsrReportData)
  const [selectedColumns, setSelectedColumns] = useState(DsrReportData?.columns); // State to manage selected columns
  console.log(selectedColumns)
  let sselectcolumn = "";
  // const filteredCol = Object?.keys(filtercolumn || {})?.filter(
  //   (k) => filtercolumn[k]
  // );
  // const filteredColCopy = { ...filteredCol };
  // if (filteredColCopy && typeof filteredColCopy === "object") {
  //   sselectcolumn = Object?.values(filteredColCopy)?.join(",");
  // } else {
  //   console.error(
  //     "filtercolumn is not defined or not an object:",
  //     filteredColCopy
  //   );
  // }
  // useEffect(() => {
  //   if(selectedColumns){
  //     sselectcolumn = selectedColumns?.join(",")
  //     console.log(sselectcolumn)
  //   }
  // }, [selectedColumns])
  if(selectedColumns){
    sselectcolumn = selectedColumns?.join(",")
  }
  console.log(sselectcolumn)
  
  const payload = {
    sl_no: "1960",
    sselectcolumn: sselectcolumn,
    // spresetname: "test2",
    // spresetcol: "null",
    // sftype: "new",
  };
  const handleSaveDsr = (e) => {
    e.preventDefault();
    dispatch(SaveDsrReqeust({ payload }));
    
  };
  // useEffect(() => {
  //   if (saveSuccess === "SUCCESS") {
  //     toast.success("DSR Saved Successfully");
  //   }
  // }, [saveSuccess]);
  const onChange = (key) => {
    setActiveTab(key);
    switch (key) {
      case "1":
        filterData("All");
        setSelectedButton(null);
        setCurrentPage(1);
        break;
      case "2":
        filterData(["Booked", "Cargo Pickup", "Cargo Received"]);
        setSelectedButton(null);
        setCurrentPage(1);
        break;
      case "3":
        filterData(["In Transit", "Departed"]);
        setSelectedButton(null);
        setCurrentPage(1);
        break;
      case "4":
        filterData(["Arrived"]);
        setSelectedButton(null);
        setCurrentPage(1);
        break;
      case "5":
        filterData(["Delivered"]);
        setSelectedButton(null);
        setCurrentPage(1);
        break;
      case "6":
        filterData(["Canceled"]);
        setSelectedButton(null);
        setCurrentPage(1);
        break;
      default:
        filterData("All");
        setSelectedButton(null);
        setCurrentPage(1);
    }
  };

  console.log(DsrReportData)

  const exportExcel = () => {
    // Prepare data based on selected column order
    const excelData = DsrReportData?.data?.map((row) => {
      const orderedRow = {};
      if(selectedColumns){
        selectedColumns?.forEach((col) => {
          orderedRow[col] = row[col]; // Add data in the order of selected columns
      });
      }
      else{
        DsrReportData?.columns?.forEach((col) => {
          orderedRow[col] = row[col]; // Add data in the order of selected columns  
        })
      }
      
      console.log(orderedRow)
      return orderedRow;
  });

    import("xlsx").then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(excelData);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      saveAsExcelFile(excelBuffer, "download");
    });
  };

  const saveAsExcelFile = (buffer, fileName) => {
    import("file-saver").then((module) => {
      if (module && module.default) {
        let EXCEL_TYPE =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        let EXCEL_EXTENSION = ".xlsx";
        const data = new Blob([buffer], {
          type: EXCEL_TYPE,
        });

        module.default.saveAs(
          data,
          fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
        );
      }
    });
  };


  //for tab change according to show display showmore button

  useEffect(() => {
    if(activeTab && schedule){
      if(Number(activeTab) === 1 && Number(schedule?.all) > 10){
        setshowMore(true)
      }
      else if(Number(activeTab) === 2 && Number(schedule?.booked) > 10){
        setshowMore(true)
      }
      else if(Number(activeTab) === 3 && Number(schedule?.in_transit) > 10){
        setshowMore(true)
      }
      else if(Number(activeTab) === 4 && Number(schedule?.arrived) > 10){
        setshowMore(true)
      }
      else if(Number(activeTab) === 5 && Number(schedule?.delivered) > 10){
        setshowMore(true)
      }
      else if(Number(activeTab) === 6 && Number(schedule?.cancelled) > 10){
        setshowMore(true)
      }
      else{
        setshowMore(false)
      }
    }
    

    setshowAllData(false)
    setscrollHeight("653px")
    console.log("working")
  }, [activeTab && schedule,activeTab])


  
  
  console.log(schedule?.all,activeTab)
  console.log(activeTab)
  console.log(showMore)


  const handleUpcomingDep = () => {
    setSelectedButton("Upcoming Departures");
    const filteredDatas = data?.filter(
      (item) =>
        item.status === "Booking In Progress" ||
        item.status === "Booked" ||
        item.status === "Cargo Received" ||
        item.status === "Cargo Picked Up"
    );
    const sortedData = [...filteredDatas].sort((a, b) => {
      const dateA = new Date(a["etd/atd"]);
      const dateB = new Date(b["etd/atd"]);
      return isAscending ? dateA - dateB : dateB - dateA;
    });
    setFilteredData(sortedData);
    setIsAscending(!isAscending);
  };
  const handleUpcomingArr = () => {
    setSelectedButton("Upcoming Arrivals");
    const filteredDatas = data?.filter(
      (item) => item.status === "In Transit" || item.status === "Departed"
    );

    const sortedData = [...filteredDatas].sort((a, b) => {
      const dateA = new Date(a["eta/ata"]);
      const dateB = new Date(b["eta/ata"]);
      return isAscending ? dateA - dateB : dateB - dateA;
    });
    setFilteredData(sortedData);
    setIsAscending(!isAscending);
  };

  const handleTableChange = () => {
    setShowText(true);
  };
  const handlShowFilter = () => {
    setShowText(false);
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
    window.scrollTo(0, 0);
  }, []);
  const tabs = [
    { label: `All Bookings (${schedule?.all ? schedule?.all : 0})`, key: "1" },
    {
      label: `Booked (${schedule?.booked ? schedule?.booked : 0})`,
      key: "2",
    },
    {
      label: `In-Transit (${schedule?.in_transit ? schedule?.in_transit : 0})`,
      key: "3",
    },
    {
      label: `Arrived (${schedule?.arrived ? schedule?.arrived : 0})`,
      key: "4",
    },
    {
      label: `Delivered (${schedule?.delivered ? schedule?.delivered : 0})`,
      key: "5",
    },
    {
      label: `Cancelled (${schedule?.cancelled ? schedule?.cancelled : 0})`,
      key: "6",
    },
  ];
  return (
    <div
      className="mx-auto mb-4"
      style={{
        minWidth: "1255px",
      }}
    >
      {showText ? (
        <div>
          <p
            style={{
              marginTop: "100px",
              fontWeight: "700",
              fontSize: "28px",
              lineHeight: "38px",
              letterSpacing: "1%",
              color: "#181E25",
              marginBottom: "0px",
            }}
          >
            Daily Status Report
          </p>
          <Navbar setShowText={setShowText} setShowmap={setShowmap} />
        </div>
      ) : (
        <SearchHeader
          bookingData={bookingData}
          handleUpcomingArr={handleUpcomingArr}
          handleUpcomingDep={handleUpcomingDep}
          selectedButton={selectedButton}
          showText={showText}
        />
      )}
      <Row className="mt-3 border" style={{ borderRadius: "8px" }}>
        <Col
          span={24}
          style={{ backgroundColor: "#F8FAFC", borderRadius: "8px" }}
        >
          <Row justify="between" style={{ height: "57px" }}>
            <Col span={19}>
              {!showText ? (
                <Tabs
                  activeKey={activeTab}
                  onChange={onChange}
                  items={tabs}
                ></Tabs>
              ) : (
                ""
              )}
            </Col>
            <Col
              span={5}
              className="viewtab-col d-flex justify-content-end"
              style={{
                borderBottom: "1px solid #e7eaf0",
                height: "57px",
                float: "right",
              }}
            >
              {showText ? (
                ""
              ) : (
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
              )}
              {!showText ? (
                <>
                  <div
                    style={{
                      alignSelf: "center",
                      height: "32px",
                      width: "32px",
                    }}
                  >
                    <img
                      src={ButtonList}
                      style={{ cursor: "pointer" }}
                      onClick={handlShowFilter}
                    />
                  </div>
                  <div
                    style={{
                      alignSelf: "center",
                      width: "32px",
                      height: "32px",
                    }}
                    className="ms-1 me-2"
                    onClick={handleTableChange}
                  >
                    <img src={Group1} style={{ cursor: "pointer" }} />
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{
                      alignSelf: "center",
                      width: "32px",
                    }}
                  >
                    <img
                      src={Buttonfade}
                      style={{ cursor: "pointer" }}
                      onClick={handlShowFilter}
                    />
                  </div>
                  <div
                    style={{
                      alignSelf: "center",
                      height: "32px",
                      width: "32px",
                    }}
                    className="ms-1 me-2"
                    onClick={handleTableChange}
                  >
                    <img src={button16} style={{ cursor: "pointer" }} />
                  </div>
                </>
              )}
              {!showText ? (
                ""
              ) : (
                <div className="d-flex align-items-center">
                  <img
                    src={image1}
                    alt="img"
                    className="me-1"
                    role="button"
                    style={{ width: "12px", height: "13.5px" }}
                    onClick={() => setSchedulemodal(true)}
                  />
                  <img
                    src={image2}
                    alt="img"
                    className="mx-1"
                    style={{ width: "12px", height: "13.5px" }}
                    role="button"
                    // onClick={handleDownloadDsr}
                    onClick={exportExcel}
                  />
                  <img
                    src={image3}
                    alt="img"
                    className="ms-1 me-3"
                    style={{
                      width: "12px",
                      height: "13.5px",
                      cursor: "pointer",
                    }}
                    onClick={handleSaveDsr}
                  />
                </div>
              )}
            </Col>
          </Row>
        </Col>
        <Col
          span={24}
          style={{
            padding: "20px",
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          {!showText ? (
            <AllBookings
              filterData={filteredData}
              selectedStatus={selectedStatus}
              filterValue={filterValue}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              filterMonthValue={filterMonthValue}
              showMore={showMore}
              showAllData={showAllData}
              setshowAllData={setshowAllData}
              scrollHeight={scrollHeight}
              setscrollHeight={setscrollHeight}
              bookingData={bookingData}
              popoverVisible={popoverVisible}
              setPopoverVisible={setPopoverVisible}
            />
          ) : (
            <DailyReportTable
              filterReport={filterReport}
              setFilterReport={setFilterReport}
              // setdownload={setdownload}
              // download={download}
              selectedColumns={selectedColumns}
              setSelectedColumns={setSelectedColumns}
              dsrpopoverVisible={dsrpopoverVisible}
              setDsrPopoverVisible={setDsrPopoverVisible}
            />
          )}
        </Col>
      </Row>
      <ScheduleDsrModal
        open={schedulemodal}
        close={() => setSchedulemodal(false)}
        setSchedulemodal={setSchedulemodal}
      />
    </div>
  );
}

export default BookingTabs;
