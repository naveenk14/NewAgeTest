import React, { useEffect, useState } from "react";
import { Menu } from "primereact/menu";
import {
  Checkbox,
  FormControlLabel,
  Input,
  Switch,
  Box,
  FormControl,
  Tooltip,
} from "@mui/material";
import styled from "styled-components";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { LuSigma } from "react-icons/lu";
import { DsrReportdatas } from "./ApiStaticData";
import { useRef } from "react";

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    backgroundColor: "black",
    opacity: "unset",

    "&::before, &::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));

const Columns = ({ setfiltercolumn, ColumnObject, DsrColumns, columnOrder, comparisonResult,checked , setChecked }) => {
  // const DsrColumns = DsrReportdatas?.columns
  // console.log(DsrColumns)
  // const ColumnObject = DsrColumns.reduce((o, key) => ({ ...o, [key]: true}), {})
  console.log("ColumnObject", ColumnObject);
  const [check, setcheck] = useState(false);
  // const [checked, setChecked] = useState(() => {
  //   const savedChecked = localStorage.getItem("checkedColumns");
  //   return savedChecked ? JSON.parse(savedChecked) : comparisonResult;
  // });
  // const [checked, setChecked] = useState( ColumnObject);
  // const [search, setsearch] = useState("")
  // console.log(search)
  // const handleSearch =(e)=>{
  //   e.preventDefault()
  //   setsearch(e.target.value)
  // }

  // useEffect(() => {
  //   const reorderObject = (obj, order) => {
  //     const orderedObject = {};
  //     order.forEach(key => {
  //       if (obj.hasOwnProperty(key)) {
  //         orderedObject[key] = obj[key];
  //       }
  //     });
  //     return orderedObject;
  //   };
    
  //   const reorderedObject = reorderObject(checked, columnOrder);
  //   setChecked(reorderedObject);
  //   setfiltercolumn(reorderedObject);
  //   console.log(reorderedObject)
  // }, [checked, DsrColumns])

  // const reorderObject = (obj, order) => {
  //   const orderedObject = {};
  //   order.forEach(key => {
  //     if (obj.hasOwnProperty(key)) {
  //       orderedObject[key] = obj[key];
  //     }
  //   });
  //   return orderedObject;
  // };
  
  // const reorderedObject = reorderObject(ColumnObject, columnOrder);
  // console.log(reorderedObject);
  
  // useEffect(() => {
  //   setChecked(reorderedObject)
  // }, [columnOrder])
  

  useEffect(() => {

    

    // if(!columnOrder){
    //   setChecked(checked);
    //   setfiltercolumn(checked);
    // }
    // else if(columnOrder){
      setChecked(checked);
      setfiltercolumn(checked);
    // }
    
    
  }, [checked]);

  console.log(checked)
  console.log(columnOrder)
  console.log(ColumnObject)
  console.log(DsrColumns)
  console.log(comparisonResult)

  
  

  useEffect(() => {
    setChecked(comparisonResult)
  }, []);
  const hasPageBeenRendered = useRef(false)

  useEffect(() => {
    if(hasPageBeenRendered.current){
      console.log("worked")
      localStorage.setItem("checkedColumns", JSON.stringify(checked));
    }
    
    hasPageBeenRendered.current = true
  }, [checked,columnOrder]);

  //This is for seperate checkbox change handler
  const handleChange = (event) => {
    // const { checked, name } = event.target;
    setChecked((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.checked,
      };
    });
    console.log(checked)
  };
  console.log(checked);

  //This is for selectall checkbox change handler
  const handleChange1 = (event) => {
    if (event.target.checked) {
  setChecked(ColumnObject);
    } else {
      const newObj = DsrColumns?.reduce(
        (o, key) => ({ ...o, [key]: false }),
        {}
      );
      setChecked(newObj);
    }
  };

  //Custom Templates

  const PivotSwitchTemplate = () => {
    return (
      <FormControlLabel
        control={
          <Android12Switch
            checked={check}
            onChange={(e) => setcheck(e.target.checked)}
          />
        }
        label="Pivot Mode"
      />
    );
  };
  // const SearchTemplate = () => {
  //   const allCheck = Object.values(checked || {}).every(
  //     (item) => item === true
  //   );
  //   const showCheckValues = Object.entries(checked || {}).filter(
  //     ([, val]) => val !== true
  //   ).length;
  //   const showUnCheckValues = Object.entries(checked || {}).filter(
  //     ([, val]) => val === true
  //   ).length;
  //   console.log(allCheck);
  //   console.log(showUnCheckValues);
  //   console.log(showCheckValues);
  //   const [search, setsearch] = useState("");
  //   console.log(search);
  //   const handleSearch = (e) => {
  //     e.preventDefault();
  //     setsearch(e.target.value);
  //   };
  //   const renderOption = (option) => {
  //     if (option?.length <= 11) {
  //       return <span style={{ fontSize: "13px" }}>=&nbsp;&nbsp;{option}</span>;
  //     } else {
  //       const truncatedText = option?.slice(0, 10).trim() + "..";
  //       return (
  //         <Tooltip style={{ zIndex: "-1" }} title={option}>
  //           <span style={{ fontSize: "13px" }} role="button">
  //             =&nbsp;&nbsp;{truncatedText}
  //           </span>
  //         </Tooltip>
  //       );
  //     }
  //   };
  //   // console.log(DsrColumns?.filter((item)=>item.includes(search.toUpperCase())))
  //   return (
  //     <>
  //       <FormControlLabel
  //         style={{
  //           position: "sticky",
  //           top: "0px",
  //           zIndex: "199",
  //           backgroundColor: "#fbfbfb",
  //         }}
  //         // label={}
  //         control={
  //           <>
  //             <Checkbox
  //               checked={allCheck}
  //               indeterminate={
  //                 showCheckValues !== DsrColumns.length &&
  //                 showUnCheckValues !== DsrColumns.length
  //               }
  //               onChange={handleChange1}
  //               sx={{
  //                 color: "black",
  //                 "&.Mui-checked": {
  //                   color: "black",
  //                 },
  //               }}
  //             />
  //             <Input
  //               placeholder="Search..."
  //               value={search}
  //               onChange={handleSearch}
  //             />
  //           </>
  //         }
  //       />
  //       {/* );
  // }; */}

  //       {/* const CheckboxesTemplate = ()=>{ */}
  //       {/* const renderOption = (option) => {
  //     if (option.length <= 10) {
  //       return <span style={{fontSize:"13px"}}>{option}</span>;
  //     } else {
  //       const truncatedText = option?.slice(0, 9).trim() + "..";
  //       return (
  //         <Tooltip style={{zIndex:"-1"}} title={option}>
  //           <span style={{fontSize:"13px"}} role="button">{truncatedText}</span>
  //         </Tooltip>
  //       );
  //     }
  //   }; */}

  //       <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
  //         {DsrColumns?.filter((item) =>
  //           item?.includes(search.toUpperCase())
  //         )?.map((item, index) => {
  //           return (
  //             <FormControlLabel
  //               key={index}
  //               label={renderOption(item)}
  //               control={
  //                 <Checkbox
  //                   checked={checked && checked[item]}
  //                   onChange={handleChange}
  //                   name={item}
  //                   sx={{
  //                     color: "black",
  //                     "&.Mui-checked": {
  //                       color: "red",
  //                     },
  //                   }}
  //                 />
  //               }
  //             />
  //           );
  //         })}
  //       </Box>
  //     </>
  //   );
  // };
  const RowGroupsTemplate = () => {
    return (
      <div className="d-flex flex-column align-items-start">
        <div className="d-flex align-items-center">
          <FaArrowUpWideShort size={14} style={{ marginRight: "6px" }} />
          <p
            className="m-0 mx-auto"
            style={{
              fontSize: "14px",
              letterSpacing: ".01em",
            }}
          >
            Row Groups
          </p>
        </div>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: ".01em",
            textAlign: "center",
            margin: "0px",
            marginLeft: "22px",
          }}
        >
          Drag here to set row groups
        </p>
      </div>
    );
  };

  const ValuesTemplate = () => {
    return (
      <div className="d-flex flex-column align-items-start">
        <div className="d-flex align-items-center">
          <LuSigma size={14} style={{ marginRight: "6px" }} />
          <p
            className="m-0 mx-auto"
            style={{
              fontSize: "14px",
              letterSpacing: ".01em",
            }}
          >
            Values
          </p>
        </div>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: ".01em",
            textAlign: "center",
            margin: "0px",
            marginLeft: "22px",
          }}
        >
          Drag here to aggregate
        </p>
      </div>
    );
  };

  const ColumnLabelsTemplate = () => {
    return (
      <div className="d-flex flex-column align-items-start">
        <div className="d-flex align-items-center">
          <LuSigma size={14} style={{ marginRight: "6px" }} />
          <p
            className="m-0 mx-auto"
            style={{
              fontSize: "14px",
              letterSpacing: ".01em",
            }}
          >
            Column Labels
          </p>
        </div>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: ".01em",
            textAlign: "center",
            margin: "0px",
            marginLeft: "22px",
          }}
        >
          Drag here to set column labels
        </p>
      </div>
    );
  };

  let items = [
    // {
    //   template: <PivotSwitchTemplate />,
    // },
    {
      template: <SearchTemplate handleChange1={handleChange1} handleChange={handleChange} checked={checked} DsrColumns={DsrColumns} />,
    },

    // {
    //   template:<CheckboxesTemplate />
    // },
    // {
    //   separator: true,
    // },
    // {
    //   template:<RowGroupsTemplate />
    // },
    // {
    //   separator: true,
    // },
    // {
    //   template:<ValuesTemplate />
    // },
    // {
    //   separator: true,
    // },
    // {
    //   template:<ColumnLabelsTemplate />
    // },
  ];

  return (
    <Menu
      model={items}
      className="w-full md:w-15rem"
      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        zIndex: "999",
      }}
    />
  );
};

export default Columns;

const SearchTemplate = ({checked,DsrColumns,handleChange1,handleChange}) => {
  const allCheck = Object.values(checked || {}).every(
    (item) => item === true
  );
  const showCheckValues = Object.entries(checked || {}).filter(
    ([, val]) => val !== true
  ).length;
  const showUnCheckValues = Object.entries(checked || {}).filter(
    ([, val]) => val === true
  ).length;
  console.log(allCheck);
  console.log(showUnCheckValues);
  console.log(showCheckValues);
  const [search, setsearch] = useState();
  console.log(search);
  const handleSearch = (e) => {
    e.preventDefault();
    setsearch(e.target.value);
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
  console.log(DsrColumns)
  return (
    <>
      <FormControlLabel
        style={{
          position: "sticky",
          top: "0px",
          zIndex: "199",
          backgroundColor: "#fbfbfb",
        }}
        // label={}
        control={
          <>
            <Checkbox
              checked={allCheck}
              indeterminate={
                showCheckValues !== DsrColumns.length &&
                showUnCheckValues !== DsrColumns.length
              }
              onChange={handleChange1}
              sx={{
                color: "black",
                "&.Mui-checked": {
                  color: "black",
                },
              }}
            />
            <Input
              placeholder="Search..."
              value={search}
              onChange={handleSearch}
            />
          </>
        }
      />

      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        {!search && DsrColumns?.map((item, index) => {
          return (
            <FormControlLabel
              key={index}
              label={renderOption(item)}
              control={
                <Checkbox
                  checked={checked && checked[item]}
                  onChange={handleChange}
                  name={item}
                  sx={{
                    color: "black",
                    "&.Mui-checked": {
                      color:  "#0DA3DE",
                    },
                  }}
                />
              }
            />
          );
        })}
        {search && DsrColumns?.filter((item)=>item.includes(search?.toUpperCase()))?.map((item, index) => {
          return (
            <FormControlLabel
              key={index}
              label={renderOption(item)}
              control={
                <Checkbox
                  checked={checked && checked[item]}
                  onChange={handleChange}
                  name={item}
                  sx={{
                    color: "black",
                    "&.Mui-checked": {
                      color: "#0DA3DE" ,
                    },
                  }}
                />
              }
            />
          );
        })}
      </Box>
    </>
  );
};
