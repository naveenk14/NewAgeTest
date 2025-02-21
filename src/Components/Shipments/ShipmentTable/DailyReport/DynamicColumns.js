import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { Tooltip } from "antd";

const DynamicColumnsTable = ({ DsrReportData,setFilterReport,setSelectedColumns,selectedColumns }) => {

    const [searchQuery, setSearchQuery] = useState(""); // State for the search query
    const [allSelected, setAllSelected] = useState(true); // State for the "Select All" checkbox
    console.log(selectedColumns)

    // Initialize selected columns to all columns by default
    useEffect(() => {
        if (!selectedColumns || selectedColumns.length === 0) {
            setSelectedColumns(DsrReportData?.columns || []); // Select all columns by default
            setAllSelected(true);
        }
    }, [DsrReportData?.columns]);

    // Keep "Select All" checkbox in sync with selected columns
    useEffect(() => {
        setAllSelected(selectedColumns?.length === DsrReportData?.columns?.length);
    }, [selectedColumns, DsrReportData?.columns]);


    // Handle column toggle
    const onColumnToggle = (column) => {
        console.log(column)
        const updatedColumns = selectedColumns ? selectedColumns?.includes(column)
            ? selectedColumns?.filter((col) => col !== column)
            : [...selectedColumns, column] : []
            console.log(updatedColumns)
        setSelectedColumns(updatedColumns);

        // Automatically update "Select All" checkbox state
        setAllSelected(updatedColumns?.length === DsrReportData?.columns?.length);
    };

    // Handle "Select All" toggle
    const onToggleAllColumns = () => {
        if (allSelected) {
            setSelectedColumns([]); // Deselect all columns
        } else {
            setSelectedColumns(DsrReportData?.columns); // Select all columns
        }
        setAllSelected(!allSelected);
    };

    // Handle search input change
    const onSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        // Filter data based on search query
        // const filtered = DsrReportData.data.filter((row) =>
        //     selectedColumns?.some((col) => String(row[col] || "")?.toLowerCase()?.includes(query))
        // );
        // console.log(filtered)
        // setFilterReport(filtered);
    };

    const renderOption = (option) => {
        if (option?.length <= 11) {
          return <span style={{ fontSize: "13px" }}>=&nbsp;&nbsp;{option}</span>;
        } else {
          const truncatedText = option?.slice(0, 10).trim() + "..";
          return (
            <Tooltip style={{ zIndex: "-1" }} title={option}>
              <span style={{ fontSize: "13px" }} role="button">
                =&nbsp;&nbsp;{truncatedText}
              </span>
            </Tooltip>
          );
        }
      };

    return (
        <div className="p-4" style={{width:"280px",height:"500px",overflow:"auto",position:"absolute",right:"20px",top:"0",backgroundColor:"#fbfbfb",border:"1px solid #f0f0f0"}}>
            {/* Search Bar */}
            <div className="d-flex p-1" style={{ marginBottom: ".5rem" }}>
                <div className="field-checkbox me-2" style={{ marginBottom: "0.5rem" }}>
                    <Checkbox
                        inputId="select-all"
                        checked={allSelected}
                        onChange={onToggleAllColumns}
                    />
                </div>
                <InputText
                    value={searchQuery}
                    onChange={onSearchChange}
                    placeholder="Search..."
                    style={{ width: "100%",border:"none",outline:"none",borderBottom:"2px solid black",borderRadius:"1px",background:"none",letterSpacing:".05em" }}
                />
            </div>

            {/* Checkbox for Columns */}
            <div style={{ marginBottom: ".2rem" }}>
                {DsrReportData?.columns?.filter((item) => item?.toLowerCase().includes(searchQuery)).map((col, index) => (
                    <div key={index} className="field-checkbox p-1">
                        <Checkbox
                            inputId={`col-${index}`}
                            value={col}
                            onChange={() => onColumnToggle(col)}
                            checked={selectedColumns?.includes(col)}
                            style={{margin:"0px 10px 0px 0px"}}
                        />
                        <label style={{fontSize:"13px",fontFamily:"Roboto",fontWeight:"400",lineHeight:"1.5",letterSpacing:".05rem"}} htmlFor={`col-${index}`}>{renderOption(col)}</label>
                    </div>
                ))}
            </div>

            {/* DataTable */}
            {/* <DataTable value={filteredData} responsiveLayout="scroll">
                {selectedColumns?.map((col, index) => (
                    <Column key={index} field={col} header={col} />
                ))}
            </DataTable> */}
        </div>
    );
};

export default DynamicColumnsTable;
