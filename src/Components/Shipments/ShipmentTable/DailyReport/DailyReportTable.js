import React, { useEffect, useState, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./DailyReportTable.css";
import Pagination from "../../../Core-Components/Pagination";
import group from "../../../../assets/Group 20851.svg";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Columns from "./Columns";
import { Tooltip } from "antd";
import { MultiSelect } from "primereact/multiselect";
import { Tag } from "primereact/tag";
import { CloseOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { DsrReportRequest } from "../../../../Redux/Actions/DsrReportAction";
import { CircularProgress, Box } from "@mui/material";
import shipgif from "../../../../assets/shipnxtgif.gif";
import DynamicColumnsTable from "./DynamicColumns";
import { IoCloseCircleSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button } from "primereact/button";

function DailyReportTable({
  filterReport,
  setFilterReport,
  // setdownload,
  // download,
  setSelectedColumns,
  selectedColumns,
  dsrpopoverVisible,
  setDsrPopoverVisible
}) {
  // //This is for get usertoken from profile API data
  const Profileusertoken = useSelector(
    (state) => state.ProfileData?.profileData?.usertoken
  );
  console.log(Profileusertoken)
  const [selectfield, setselectfield] = useState("");
  const [showAllData, setshowAllData] = useState(false);
  const [scrollHeight, setscrollHeight] = useState("653px");
  const payload = {
    Sl_no: Profileusertoken
    // sorigin: "",
    // sdest: "",
    // sstatus: "",
    // sshipper: "",
    // sconsignee: "",
    // sfrmdate: "",
    // stodate: "",
    // sshipmentby: "",
    // simport_export: "",
    // setafrmdate: "",
    // setatodate: "",
  };
  // // This is get dsr api call
  const dispatch = useDispatch();
  const successRsp = useSelector((state) => state?.SaveDsr?.savedsr);
  console.log(successRsp, "scsrsp");
  useEffect(() => {
    if (Profileusertoken) {
      dispatch(DsrReportRequest({ payload }));
    }
  }, [Profileusertoken, dispatch, successRsp]);

  //Hooks and Variables
  const { loading } = useSelector((state) => state.DsrReport);
  const DsrReportData = useSelector((state) => state.DsrReport.dsrData?.result);
  console.log(DsrReportData)
  // const initData = DsrReportData?.data
  // const [columnOrder, setcolumnOrder] = useState([]);

  const columns = DsrReportData?.columns?.map((col) => ({ field: col, header: col }));
  const datas = DsrReportData?.data;
  // const [selectedColumns, setSelectedColumns] = useState(DsrReportData?.columns); // State to manage selected columns
  const selectColumns = selectedColumns ?  selectedColumns?.map((col) => ({ field: col, header: col })): columns;
  // Handle column reorder
  const onColumnReorder = (e) => {
    const reorderedColumns = e.columns.map((col) => col?.props?.field);
    console.log(e)
    console.log(reorderedColumns)
    setSelectedColumns(reorderedColumns);
};
  console.log(columns)
  console.log(selectColumns)
  console.log(selectedColumns)
  console.log(datas)

  // const DsrColumns = DsrReportData?.columns; //get column datas from dsr api response
  // const DsrDatas = DsrReportData?.data; //get datas from dsr api response
  // const clonednewArray = DsrDatas?.map((a) => ({ ...a })) || [];
  const DsrDataObj = DsrReportData?.data?.[0]; //get first for column logic
  const DsrCopied = { ...DsrDataObj }; //this copies data from previous line data
  const DsrModifiedArray = Object?.keys(DsrCopied || {}); //change objects into array
  console.log(DsrModifiedArray);
  // console.log(DsrColumns);

  //This is modify arrayofvalues into objects with default true value

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //This function is used to change the
  // function changeKey(arr) {
  //   var newArr = [];
  //   for (var i = 0; i < arr.length; i++) {
  //     var obj = arr[i];
  //     const altObj = Object.fromEntries(
  //       Object.entries(obj).map(([key, value]) => [
  //         key.split(" ").join("_"),
  //         value,
  //       ])
  //     );
  //     newArr.push(altObj);
  //   }
  //   return newArr;
  // }

  // const datasArray = changeKey(clonednewArray);
  // console.log(datasArray);

  // const ColumnObject = DsrColumns?.reduce(
  //   (o, key) => ({ ...o, [key]: true }),
  //   {}
  // );

  // const ColumnObject = DsrModifiedArray?.reduce(
  //   (o, key) => ({ ...o, [key]: true }),
  //   {}
  // );
  // console.log(ColumnObject);

  // let comparisonResult = {};
  // if (columnOrder.length) {
  //   columnOrder?.forEach((item) => {
  //     comparisonResult[item] = DsrModifiedArray?.includes(item);
  //   });
  // } else {
  //   DsrColumns?.forEach((item) => {
  //     comparisonResult[item] = DsrModifiedArray?.includes(item);
  //   });
  // }

  // console.log(comparisonResult);
  // const [checked, setChecked] = useState(comparisonResult);
  // console.log(checked);

  // const TableColumnObject = DsrColumns?.reduce(
  //   (o, key) => ({ ...o, [key]: true }),
  //   {}
  // );
  // console.log(TableColumnObject);

  //This is for modify array of values into objects with empty array for storing datas
  const dsrfilter = DsrModifiedArray?.reduce(
    (o, key) => ({ ...o, [key]: [] }),
    {}
  );
  console.log(dsrfilter);
  const report = datas;
  console.log(report);
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebaropen, setSidebaropen] = useState(false);
  const [dsrFilter, setDsrFilter] = useState();
  console.log(dsrFilter)
  // const [filterReport, setFilterReport] = useState();
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState();
  const itemsPerPage = 6;
  console.log(filterReport);

  // useEffect(() => {
  //   setfiltercolumn(TableColumnObject);
  // }, [DsrColumns]);
  useEffect(() => {
    setFilterReport(datas);
  }, [datas]);

  // console.log(filtercolumn);

  //This is modify object keys and values
  // const arrayOfObj = Object.entries(filtercolumn || {})?.map((e) => ({
  //   [e[0]]: e[1],
  //   header: e[0],
  // }));

  useEffect(() => {
    const filterReportTbl = report?.filter((items) =>
      Object.keys(dsrFilter || {})?.every(
        (key) =>
          dsrFilter[key]?.length === 0 || dsrFilter[key]?.includes(items[key])
      )
    );
    setFilterReport(filterReportTbl);
    setCurrentPage(1);
  }, [dsrFilter]);

  // const handleWholeData = async(val)=>{
  //   console.log(val)
  //   const filteredData = report.map(item => {
  //     const filteredItem = {};
  //     // headersToInclude.forEach(header => {
  //         if (item.hasOwnProperty(val)) {
  //             filteredItem[val] += item[val];
  //         }
  //     // });

  //     return filteredItem;
  // });
  // console.log(filteredData)
  // return filteredData
  //   // const filteredData = report.map(item => console.log(item) );
  //   // console.log(filteredData)
  // // setFilterReport(filteredData);
  // }

  // const filterDataByKeys = (data) => {
  //   return data?.map((item) => {
  //     const filteredItem = {};
  //     // allowedKeys?.forEach(key => {
  //     //     if (item.hasOwnProperty(key?.header)) {
  //     //         filteredItem[key?.header] = item[key?.header];
  //     //     }
  //     // });
  //     for (const [key, value] of Object.entries(filtercolumn)) {
  //       if (value === true) {
  //         filteredItem[key] = item[key];
  //       }
  //     }
  //     return filteredItem;
  //   });
  // };

  // const fdata = filterDataByKeys(filterReport, arrayOfObj);
  // console.log(fdata)

  // useEffect(() => {
  //   const res = filterDataByKeys(filterReport);
  //   console.log(res)
  //   setdownload(res);
  // }, [filtercolumn]);

  // console.log(download)

  // const handleArrange = (columns) => {
  //   console.log(columns);
  //   const reorderedKeys = columns.map((col) => col?.props?.field);
  //   console.log(reorderedKeys);
  //   setcolumnOrder(reorderedKeys);
  //   const columnObject = reorderedKeys?.reduce((obj, col) => {
  //     obj[col] = true;
  //     return obj;
  //   }, {});
  //   const newDownload = download.map((item) => {
  //     const reorderedItem = {};
  //     reorderedKeys.forEach((key) => {
  //       reorderedItem[key] = item[key];
  //     });
  //     return reorderedItem;
  //   });
  //   setdownload(newDownload);
  //   setfiltercolumn(columnObject);
  // };

  // const hasPageBeenRendered = useRef(false);

  // useEffect(() => {
  //   const handleArrange = (columns) => {

  //     // console.log(columns)
  //     // const reorderedKeys = columns.map(col => col?.props?.field);
  //     // console.log(reorderedKeys)
  //     // setcolumnOrder(reorderedKeys)
  //     const columnObject = columns?.reduce((obj, col) => {
  //       obj[col] = true;
  //       return obj;
  //     }, {});
  //     const newDownload = download?.map((item) => {
  //       const reorderedItem = {};
  //       columns?.forEach((key) => {
  //         reorderedItem[key] = item[key];
  //       });
  //       return reorderedItem;
  //     });
  //     setdownload(newDownload);
  //     setfiltercolumn(columnObject)

  //   };

  //   if(hasPageBeenRendered.current){
  //     if(columnOrder){
  //       handleArrange(columnOrder)
  //       console.log("colorder")
  //     }
  //   }

  //   hasPageBeenRendered.current = true

  // }, [checked])

  const getUniqueOptions = (array, key) => {
    if (!Array?.isArray(array) || !array?.length) {
      return [];
    }
    // if (!array[0][key]) {
    //   return [];
    // }
    return Array?.from(new Set(array?.map((data) => data[key])))?.map(
      (value) => ({
        label: value,
        value,
      })
    );
  };
  useEffect(() => {
    if (clicked) {
      setData(filterReport);
    }
  }, [clicked]);

  const handleChangeFilter = (field, filterValues) => {
    if (field === "all") {
      setDsrFilter(dsrfilter);
    } else {
      setDsrFilter((prevFilters) => ({
        ...prevFilters,
        [field]: filterValues,
      }));
    }
  };
  function MultiSelectFilter(filterKey, options, value, additionalStyles) {
    const renderOption = (option) => {
      if (option?.label?.length <= 14) {
        return <span>{option?.label}</span>;
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
        value={value?.[filterKey]}
        options={options}
        name="ShipId"
        filter
        style={{
          position: "absolute",
          left: "0px",
          opacity: "0",
          width: "150px",
          fontSize: "10px",
          ...additionalStyles,
        }}
        showSelectAll={false}
        onChange={(e) => handleChangeFilter(filterKey, e.value)}
        onFocus={() => setClicked(true)} // Track when the MultiSelect gains focus
        onBlur={() => setClicked(false)}
        display="chip"
        placeholder="Select"
        itemTemplate={renderOption}
        filterPlaceholder="Search"
      />
    );
  }
  const FilterTag = ({ field, filterValues, handleChangeFilter }) => {
    const popoverRef = useRef(null); // Reference for the popover
    const handleClick = (field) => {
      setselectfield(field);
      setDsrPopoverVisible((prev) => !prev);
      console.log(field);
      console.log(selectfield);
    };

       //Close the popover if clicked outside
       useEffect(() => {
        const handleOutsideClick = (event) => {
          if (popoverRef.current && !popoverRef.current.contains(event.target)) {
            setselectfield("");
            setDsrPopoverVisible(false); // Close the popover if clicked outside
          }
        };
  
        // Attach event listener
        if (dsrpopoverVisible) {
          document.addEventListener("mousedown", handleOutsideClick);
        }
  
        // Cleanup the event listener when popover is closed or unmounted
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick);
        };
      }, [dsrpopoverVisible]);

      const renderTags = (field, filterValues) => {
        return (
          <div
            ref={popoverRef}
            style={{
              position: "absolute",
              background: "white",
              zIndex: "10",
              borderRadius: "8px",
              boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)",
              margin: "10px 0px",
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
        console.log(field,value)
        const newValues = filterValues.filter((item) => item !== value);
        console.log(field,newValues)
        handleChangeFilter(field, newValues);
      };

    if (!Array?.isArray(filterValues)) {
      return "";
    }
    const renderedColumns = new Set();
    console.log(renderedColumns);
    return (
      <>
        {filterValues?.map((option) => {
          if (!renderedColumns?.has(field)) {
            renderedColumns?.add(field);
            return (
              <Tag
                key={field}
                style={{
                  backgroundColor: "#0DA3DE",
                  marginRight: "10px",
                  // position: "relative",
                  fontSize: "10px",
                }}
                className="px-2 py-1"
                rounded
              >
                {/* <div style={{ position: "relative" }}>
                  {field ? field.split("_").join(" ") : ""}
                  <span className="ms-2">
                    <CloseOutlined
                      onClick={() => {
                        handleChangeFilter(field, []);
                      }}
                    />
                  </span>
                </div> */}
                <div style={{ position: "relative" }}>
                  {field ? field.split("_").join(" ") : ""}
                  &nbsp; :{" "}
                  {filterValues?.length === 1 ? (
                    <span className="me-2">{filterValues[0]}</span>
                  ) : (
                    <span>
                      {filterValues[0]}&nbsp;
                      <Button
                        style={{backgroundColor:"#0DA3DE",border:"none"}}
                        variant="contained"
                        onClick={() => handleClick(field)}
                      >
                        <BsThreeDotsVertical
                          size={10}
                          style={{ marginBottom: "3px", marginLeft: "6px" }}
                        />
                      </Button>
                     
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
                {dsrpopoverVisible &&
                      (field === selectfield) &&
                      renderTags(field, filterValues)} 
              </Tag>
            );
          }
          return "";
        })}
      </>
    );
  };

  const sort = (col) => {
    const handleSort = (col) => {
      const sorted = [...filterReport].sort((a, b) => {
        const valA = a[col];
        const valB = b[col];
        if (!isNaN(valA) && !isNaN(valB)) {
          return valA - valB;
        }
        return valA > valB ? 1 : -1;
      });
      setFilterReport(sorted);
    };

    const handleSortDown = (col) => {
      const sorted = [...filterReport].sort((a, b) => {
        const valA = a[col];
        const valB = b[col];
        if (!isNaN(valA) && !isNaN(valB)) {
          return valB - valA;
        }
        return valA < valB ? 1 : -1;
      });
      setFilterReport(sorted);
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

  //This is for pagination
  // const startIndex = (currentPage - 1) * itemsPerPage;

  // const paginatedData = filterReport?.slice(
  //   startIndex,
  //   startIndex + itemsPerPage
  // );
  const paginatedData = filterReport

  // const paginatedData = showAllData
  //   ? filterReport : filterReport
    // : filterReport?.slice(
    //     startIndex,
    //     10
    //     // startIndex + itemsPerPage
    //   );

  // console.log(paginatedData);
  // const noData = () => {
  //   return (
  //     <div
  //       className="no-options"
  //       style={{ alignSelf: "center", height: "353px" }}
  //     >
  //       No Data Found
  //     </div>
  //   );
  // };

  // const columnValueData = (fieldName) => (rowData) => {
  //   const fieldValue = rowData[fieldName];

  //   return (
  //     <div style={{ width: "120px" }} className="px-1">
  //       {fieldValue?.length <= 14 ? (
  //         fieldValue
  //       ) : (
  //         <Tooltip placement="topLeft" title={fieldValue}>
  //           <span>
  //             {fieldValue?.slice(0, 14)?.trim()?.split(" ")?.join("") + ".."}
  //           </span>
  //         </Tooltip>
  //       )}
  //     </div>
  //   );
  // };

  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkArrows = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      console.log("clientWidth", scrollLeft, scrollWidth, clientWidth);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };
  useEffect(() => {
    setShowLeftArrow(showRightArrow === true);
  }, [checkArrows]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    checkArrows();
    const handleScroll = () => checkArrows();
    const scrollElement = scrollRef.current;

    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => checkArrows();
    window.addEventListener("resize", handleResize);

    // Using ResizeObserver to handle dynamic content changes
    const resizeObserver = new ResizeObserver(() => {
      checkArrows();
    });

    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollRef.current) {
        resizeObserver.unobserve(scrollRef.current);
      }
    };
  }, [dsrFilter]);

  useEffect(() => {
    // Check arrows initially after the first render
    checkArrows();
  }, []);

  //   const exportExcel = () => {
  //     import('xlsx').then((xlsx) => {
  //         const worksheet = xlsx.utils.json_to_sheet(paginatedData);
  //         const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
  //         const excelBuffer = xlsx.write(workbook, {
  //             bookType: 'xlsx',
  //             type: 'array'
  //         });

  //         saveAsExcelFile(excelBuffer, 'paginatedData');
  //     });
  // };

  // const saveAsExcelFile = (buffer, fileName) => {
  //     import('file-saver').then((module) => {
  //         if (module && module.default) {
  //             let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  //             let EXCEL_EXTENSION = '.xlsx';
  //             const data = new Blob([buffer], {
  //                 type: EXCEL_TYPE
  //             });

  //             module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  //         }
  //     });
  // };

  // const filteredDownload = filterReport?.map((item,index)=> console.log(item) )
  // console.log(filteredDownload)

  if (loading || paginatedData?.length === 0 || paginatedData == "undefined") {
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
        {/* <CircularProgress style={{ color: "#0da3de" }} /> */}
        <img src={shipgif} width="140px" height="140px" />
      </Box>
    );
  }

  return (
    <>
      <div className="dsr_section mb-2">
        {Object?.keys(dsrFilter || {})?.some(
          (key) => dsrFilter[key]?.length > 0
        ) && (
          <div
            className="d-flex ps-2"
            style={{
              marginBottom: "20px",
              padding: "5px 0px",
             
            }}
          >
            <div className="mt-1 scroll-container">
              <div
                className={`arrow left-arrow ${showLeftArrow ? "show" : ""}`}
                onClick={scrollLeft}
              >
                <LeftOutlined />
              </div>
              <div className="scroll-content" ref={scrollRef}>
                {Object.entries(dsrFilter)?.map(([field, filterValues]) => (
                  <FilterTag
                    key={field}
                    field={field}
                    filterValues={filterValues}
                    handleChangeFilter={handleChangeFilter}
                  />
                ))}
              </div>
              <div
                className={`arrow right-arrow ${showRightArrow ? "show" : ""}`}
                onClick={scrollRight}
              >
                <RightOutlined />
              </div>
            </div>
            <div className="ms-auto">
              {Object.keys(dsrFilter)?.some(
                (key) => dsrFilter[key]?.length > 0
              ) && (
                <Tag
                  style={{
                    backgroundColor: "#0DA3DE",
                    marginRight: "10px",
                    position: "relative",
                    fontSize: "10px",
                    width: "80px",
                    marginLeft: "20px",
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
          </div>
        )}
        <DataTable
          value={filterReport ? filterReport : DsrReportData?.data }
          reorderableColumns
          onColReorder={(e)=>onColumnReorder(e)}
          style={{minHeight:"500px"}}
          scrollable={showAllData}
          scrollHeight={scrollHeight}
          // onColReorder={(e) => handleArrange(e.columns)}
        >
          {/* {arrayOfObj?.map((item, index) => {
            if (filtercolumn[item.header]) {

              return ( */}
               {selectColumns && selectColumns?.map((item, index) => (
                <Column
                  key={index}
                  field={item?.field}
                  // header={item?.header}
                  // body={columnValueData(item?.header)}
                  header={
                    <span className=" d-flex" style={{ cursor: "pointer" }}>
                      {item?.header}
                      {MultiSelectFilter(
                        item?.header,
                        getUniqueOptions(data, item?.header),
                        dsrFilter
                      )}
                      {sort(item?.header)}
                       {/* <div
                        className="d-flex sorticon"
                        style={{ flexDirection: "column" }}
                      >
                        <IconButton
                          onClick={() => {
                            handleSort(item?.header);
                          }}
                          className="p-0"
                        >
                          <ExpandLessIcon className="sortup" />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            handleSortDown(item?.header);
                          }}
                          className="p-0"
                        >
                          <ExpandMoreIcon className="sortdown" />
                        </IconButton>
                      </div> */ }
                   </span>
                  }
                  style={{
                    paddingTop: "15px",
                    fontWeight: "400",
                    fontSize: "13px",
                    lineHeight: "19px",
                    letterSpacing: ".01em",
                    color: "#181E25",
                    whiteSpace: "nowrap",
                    paddingBottom: "15px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    position: "relative",
                  }}
                />
              ))}
              {/* );
            }
          })} */}
        </DataTable>
        <div
          style={{
            position: "absolute",
            top: "75px",
            right: "-50px",
            transform: "rotate(90deg)",
            borderBottom: "2px solid black",
          }}
          onClick={() => setSidebaropen((prev) => !prev)}
          role="button"
        >
          <p
            className="m-0 px-4"
            style={{
              letterSpacing: ".01em",
              fontSize: "12px",
              fontWeight: "400",
              position:"relative"
            }}
          >
            <img className="me-2" src={group}></img>Columns
          </p>
        </div>
        {sidebaropen && (
          // <Columns
          //   setfiltercolumn={setfiltercolumn}
          //   ColumnObject={ColumnObject}
          //   comparisonResult={comparisonResult}
          //   DsrColumns={DsrModifiedArray}
          //   columnOrder={columnOrder}
          //   checked={checked}
          //   setChecked={setChecked}
          // />
          <DynamicColumnsTable setFilterReport={setFilterReport} DsrReportData={DsrReportData} setSelectedColumns={setSelectedColumns} selectedColumns={selectedColumns} />
        )}
      </div>
      {/* <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={filterReport?.length}
        onPageChange={() => setCurrentPage(1)}
        itemsPerPage={itemsPerPage}
      /> */}
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
    </>
  );
}

export default DailyReportTable;
