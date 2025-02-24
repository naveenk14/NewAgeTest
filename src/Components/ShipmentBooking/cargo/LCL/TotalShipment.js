import React, { useEffect, useRef, useState } from "react";
import {
  Typography,
  MenuItem,
  Select,
  FormControl,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormHelperText,
} from "@mui/material";
import "../cargo.css";
import minus from "../../../../assets/9021673_minus_bold_icon 1.svg";
import plus from "../../../../assets/material-symbols_add-rounded.svg";



const TotalShipment = ({
  onClose,
  setCargo,
  setCargoOptionsVisible,
  seterrmsg,
  tsDatas,
  settsDatas,
  errors,
  seterrors,
  exim,
  setexim,
  setshowcargo,
  packages,
  setlastsaved,
  setFinaldetails,
  setmode,
  originPort,
  destPort,
  searchref,nunits
}) => {


  console.log(exim);

 
  console.log(nunits)
  useEffect(() => {
    nunits?.current?.focus()
  }, [])
  

  const [change, setchange] = useState(false)
  const selectref = useRef()
  console.log(selectref)

  // useEffect(() => {
  //   const handler = (e) => {
  //     console.log(selectref,e.target)
  //     if (selectref?.current?.contains(e.target)) {
  //       // setCargoOptionsVisible(false);
  //       return;
  //     }
  //     setCargoOptionsVisible(false);
  //   };

  //   document.addEventListener("mousedown", handler);

  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // });

  // const [inputFields, setInputFields] = useState(
  //   JSON.parse(localStorage.getItem("inpfields")) || [{}]
  // );
  // const [saveddatas, setsaveddatas] = useState(
  //   JSON.parse(localStorage.getItem("tsDatas")) || []
  // );
  // const [editeddata, setediteddata] = useState({});
  // const [editedId, seteditedId] = useState("");
  // const [errors, seterrors] = useState(
  //   JSON.parse(localStorage.getItem("tsDataserr")) || {
  //     no_of_units: false,
  //     total_volume: false,
  //     total_weight: false,
  //   }
  // );
  console.log(errors);
  // const initialData = {
  //   package_type: "BOX",
  //   no_of_units: "",
  //   total_volume: "",
  //   total_weight: "",
  //   // import_export: "I",
  //   volume_type: "CBM",
  //   weight_type: "KG",
  // };
  // const [tsDatas, settsDatas] = useState(
  //   JSON.parse(localStorage.getItem("tsDatas")) || {
  //     package_type: "BOX",
  //     no_of_units: "",
  //     total_volume: "",
  //     total_weight: "",
  //     // import_export: "I",
  //     volume_type: "CBM",
  //     weight_type: "KG",
  //   }
  // );

  const IsError = [
    errors.no_of_units,
    errors.total_volume,
    errors.total_weight,
  ].some(Boolean);
  const canAdd = [
    tsDatas.no_of_units,
    tsDatas.total_volume,
    tsDatas.total_weight,
    tsDatas.package_type,
    tsDatas.volume_type,
    tsDatas.weight_type,
  ].every(Boolean);
  // const CanField = Boolean(inputFields.length);
  // const canSave = [
  //   tsDatas.no_of_units,
  //   tsDatas.total_volume,
  //   tsDatas.total_weight,
  //   tsDatas.package_type,
  //   tsDatas.volume_type,
  //   tsDatas.weight_type,
  // ].every(Boolean);
  // const canEditSave = [
  //   editeddata.no_of_units,
  //   editeddata.total_volume,
  //   editeddata.total_weight,
  //   editeddata.package_type,
  //   editeddata.volume_type,
  //   editeddata.weight_type,
  // ].every(Boolean);

  // useEffect(() => {
  //   localStorage.setItem("tsDatas", JSON.stringify(tsDatas));
  //   localStorage.setItem("tsDataserr", JSON.stringify(errors));
  // }, [tsDatas, errors]);

  //This is for create new form data

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(typeof value);
    settsDatas((prev) => {
      return { ...prev, [name]: parseFloat(value) };
    });
  };
  const handlePackChange = (e) => {
    const { name, value } = e.target;
    console.log(typeof value);
    settsDatas((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleUnitsChange = (e) => {
    const { name, value } = e.target;
    console.log(value, typeof value);
    settsDatas((prev) => {
      return {
        ...prev,
        [name]: !value ? "" : value <= 0 ? 1 : parseFloat(value),
      };
    });
  };
  const handleUnitIncrement = () => {
    settsDatas((prev) => {
      return {
        ...prev,
        no_of_units:
          prev.no_of_units === ""
            ? 1
            : parseInt(prev.no_of_units) < 999
            ? parseInt(prev.no_of_units) + 1
            : parseInt(prev.no_of_units),
      };
    });
  };
  const handleUnitDecrement = () => {
    settsDatas((prev) => {
      return {
        ...prev,
        no_of_units:
          prev.no_of_units === ""
            ? 1
            : parseInt(prev.no_of_units) > 1
            ? parseInt(prev.no_of_units) - 1
            : parseInt(prev.no_of_units),
      };
    });
  };
  console.log(tsDatas);

  const handleWeightDropChange = (e) => {
    const { name, value } = e.target;
    settsDatas((prev) => {
      return {
        ...prev,
        [name]: value,
        volume_type: value === "LB" ? "CFT" : "CBM",
      };
    });
  };
  const handleVolumeDropChange = (e) => {
    const { name, value } = e.target;
    settsDatas((prev) => {
      return {
        ...prev,
        [name]: value,
        weight_type: value === "CBM" ? "KG" : "LB",
      };
    });
  };

  const hasPageBeenRendered = useRef(false)

  // useEffect(() => {
  //   console.log("call dispatch")
  //   if(hasPageBeenRendered.current){
  //     if(passwordResponse?.statuscode == "201"){
  //       console.log("invalid")
  //       setOpeninvalid(true)
  //     }
  //     else if(passwordResponse?.statuscode == "200"){
  //       console.log("success")
  //       form.resetFields()
  //       setOpensuccess(true)
  //       }
  //   }
  //     hasPageBeenRendered.current = true;
  // }, [passwordResponse])

const values = `${(originPort?.Transport_mode === "AIR" || destPort?.Transport_mode === "AIR" )?"AIR":"LCL"} | ${tsDatas?.no_of_units} Units, ${tsDatas?.volume_type === 'CFT'?`${tsDatas?.total_volume*0.028} CBM`:`${tsDatas?.total_volume} CBM`},  ${tsDatas?.weight_type === 'LB'?`${(tsDatas?.total_weight/2.20462).toFixed(3)} KG`:`${tsDatas?.total_weight} KG`}`;

useEffect(() => {
  if(hasPageBeenRendered.current){
    console.log(values)
    console.log(change)
      console.log("changed")
      setCargo(values)
  }
  hasPageBeenRendered.current = true;
}, [tsDatas])

  

  const handleLclSubmit = (e) => {
    if (!IsError && canAdd) {
      console.log("submitted");
      setshowcargo(true)
      setCargo(values);
      setmode("LCLTOTAL")
      setCargoOptionsVisible(false);
      seterrmsg("")
      setlastsaved("LCLTOTAL")
      setFinaldetails(values)
      searchref?.current?.focus()
    } else {
      setCargo("");
      console.log("error");
      if (!canAdd) {
        console.log("err");
        seterrmsg("Please add proper values for load");
      } else if (errors.no_of_units) {
        console.log("unit");
        seterrmsg("Please add proper unit for load");
      } else if (errors.total_volume) {
        seterrmsg("Please add proper volume for load");
      } else if (errors.total_weight) {
        seterrmsg("Please add proper weight for load");
      } else {
        seterrmsg("");
      }
    }
  };

  // const handleAddLoad = () => {
  //   if (inputFields.length > 0) {
  //     setsaveddatas([
  //       ...saveddatas,
  //       {
  //         ...tsDatas,
  //         id:
  //           saveddatas.length < 1
  //             ? 1
  //             : saveddatas[saveddatas.length - 1].id + 1,
  //       },
  //     ]);
  //     // handleSave()
  //     settsDatas(initialData);
  //   }
  //   setInputFields([{}]);
  // };
  // const handleCloseLoad = (index) => {
  //   // if (inputFields.length === 1) {
  //   //   return;
  //   // }
  //   // setInputFields(inputFields.filter((_, i) => i !== index));
  //   setInputFields([]);
  //   settsDatas(initialData);
  // };

  // const handleDelete = (e, id) => {
  //   // e.preventDefault();
  //   console.log(id);
  //   const filteredData = saveddatas.filter((i) => i.id !== id);
  //   console.log(filteredData);
  //   setsaveddatas(filteredData);
  //   // setediteddata({});
  //   if (saveddatas.length === 1) {
  //     setInputFields([{}]);
  //   }
  //   // setsaveddatas(saveddatas.filter((_,i) => i !== index));
  // };
  // const handleEdit = (e, id) => {
  //   // e.preventDefault();
  //   console.log("edited");
  //   console.log(id);
  //   const filteredData = saveddatas.filter((i) => i.id === id);
  //   console.log(filteredData);
  //   seteditedId(id);
  //   setediteddata(filteredData[0]);
  //   // if(saveddatas.length===1){
  //   //   setInputFields([{}]);
  //   // }
  //   // setsaveddatas(saveddatas.filter((_,i) => i !== index));
  // };

  // const handleSave = () => {
  //   setsaveddatas([
  //     ...saveddatas,
  //     {
  //       ...tsDatas,
  //       id:
  //         saveddatas.length < 1 ? 1 : saveddatas[saveddatas.length - 1].id + 1,
  //     },
  //   ]);
  //   settsDatas(initialData);
  //   setInputFields([]);
  // };

  //This is for edit Data
  // const handleEditChange = (e) => {
  //   const { name, value } = e.target;
  //   setediteddata((prev) => {
  //     return { ...prev, [name]: value };
  //   });
  // };

  // const handleEditUnits = (e) => {
  //   const { name, value } = e.target;
  //   console.log(value, typeof value);
  //   setediteddata((prev) => {
  //     return { ...prev, [name]: !value ? "" : parseInt(value) };
  //   });
  // };
  // const handleEditUnitIncrement = () => {
  //   setediteddata((prev) => {
  //     return {
  //       ...prev,
  //       no_of_units:
  //         prev.no_of_units === ""
  //           ? 1
  //           : parseInt(prev.no_of_units) < 999
  //           ? parseInt(prev.no_of_units) + 1
  //           : parseInt(prev.no_of_units),
  //     };
  //   });
  // };
  // const handleEditUnitDecrement = () => {
  //   setediteddata((prev) => {
  //     return {
  //       ...prev,
  //       no_of_units:
  //         prev.no_of_units === ""
  //           ? 1
  //           : parseInt(prev.no_of_units) > 1
  //           ? parseInt(prev.no_of_units) - 1
  //           : parseInt(prev.no_of_units),
  //     };
  //   });
  // };

  // const handleEditWeightDropChange = (e) => {
  //   const { name, value } = e.target;
  //   setediteddata((prev) => {
  //     return {
  //       ...prev,
  //       [name]: value,
  //       volume_type: value === "LB" ? "CFT" : "CBM",
  //     };
  //   });
  // };
  // const handleEditVolumeDropChange = (e) => {
  //   const { name, value } = e.target;
  //   setediteddata((prev) => {
  //     return {
  //       ...prev,
  //       [name]: value,
  //       weight_type: value === "CBM" ? "KG" : "LB",
  //     };
  //   });
  // };

  // const handleUpdate = () => {
  //   // const { name, value } = e.target;
  //   const filteredEdit = saveddatas.map((item) =>
  //     item.id === editedId ? editeddata : item
  //   );
  //   console.log(filteredEdit);
  //   // const filteredItems = filteredEdit.push(editeddata)
  //   // console.log(filteredEdit)
  //   // setsaveddatas((prev) => {
  //   //   return [...prev,editeddata];
  //   // });
  //   setsaveddatas(filteredEdit);
  //   setediteddata({});
  //   seteditedId("");
  // };

  return (
    <>
      {/* {saveddatas?.map((item, index) => {
        return (
          <Box
            key={index}
            sx={{
              borderRadius: "8px",
              backgroundColor: "rgba(243, 245, 247, 1)",
              padding: "12px 24px",
              // display: "flex",
              // justifyContent: "space-between",
              // alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "19px",
                    letterSpacing: ".01em",
                    color: "rgba(24, 30, 37, 1)",
                  }}
                >
                  Load {index + 1}
                </span>{" "}
                {editedId !== item.id && (
                  // <>
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "25px",
                      letterSpacing: ".01em",
                      color: "rgba(41, 51, 61, 1)",
                    }}
                  >
                    : {item.no_of_units} Units
                  </span>
                )}
              </div>

              {editedId !== item.id && (
                <div>
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "13px",
                      lineHeight: "19px",
                      letterSpacing: ".01em",
                      color: "rgba(41, 51, 61, 1)",
                    }}
                  >
                    {item.total_volume}
                    {item.volume_type} | {item.total_weight} {item.weight_type}
                  </span>
                </div>
              )}
              <div>
                {editedId !== item.id && (
                  <img
                    src={editicon}
                    role="button"
                    alt="edit"
                    className="me-1"
                    onClick={(e) => handleEdit(e, item.id)}
                  />
                )}
                <img
                  src={deletedicon}
                  role="button"
                  alt="delete"
                  onClick={(e) => handleDelete(e, item.id)}
                />
              </div>
            </div>
            {/* {
              editeddata?.map((item,i)=>{
                console.log(item,i)
                console.log(item.id,editedId) */}
      {/* {editedId === item.id && (
              <>
                {
                  editeddata && (
                    <div key={editeddata?.id}>
                      <div className="d-flex">
                        <div className="w-50 my-3 ms-0 me-3">
                          <Typography
                            sx={{
                              fontWeight: "500",
                              fontSize: "13px",
                              lineHeight: "19px",
                              letterSpacing: ".01em",
                              color: "rgba(103, 120, 142, 1)",
                            }}
                          >
                            Package Type
                          </Typography>
                          <FormControl fullWidth> */}
      {/* <InputLabel id="demo-simple-select-label">Package</InputLabel> */}
      {/* <Select
                              style={{ height: "45px" }}
                              value={editeddata?.package_type}
                              onChange={handleEditChange}
                              name="package_type"
                              displayEmpty
                              inputProps={{ "aria-label": "Without label" }}
                            >
                              <MenuItem value="BOX">PACKAGES(s)</MenuItem>
                            </Select> */}
      {/* </FormControl>
                        </div>
                        <div className="w-50 my-3 ms-3 me-0">
                          <Typography
                            sx={{
                              fontWeight: "500",
                              fontSize: "13px",
                              lineHeight: "19px",
                              letterSpacing: ".01em",
                              color: "rgba(103, 120, 142, 1)",
                            }}
                          >
                            No.of Units
                          </Typography>
                          <div
                            className="btn-group w-100"
                            role="group"
                            style={{
                              border: "1px solid rgba(207, 214, 223, 1)",
                              height: "45px",
                            }}
                          >
                            <input
                              type="number"
                              className="form-control placeholder_style"
                              placeholder="Units"
                              autoComplete="off"
                              onKeyDown={(e) => {
                                if (
                                  !/[0-9]|Backspace|Tab|Enter|Delete|ArrowLeft|ArrowRight/.test(
                                    e.key
                                  )
                                ) {
                                  e.preventDefault();
                                }
                              }}
                              // value={noofunits ? noofunits : ""}
                              value={editeddata?.no_of_units}
                              name="no_of_units"
                              // onChange={(e)=>setNoofunits(parseInt(e.target.value))}
                              onChange={handleEditUnits}
                              style={{
                                borderTopRightRadius: "0",
                                borderBottomRightRadius: "0",
                                padding: "13px",
                                border: "none",
                              }}
                            />
                            <button
                              // onClick={()=>setNoofunits((prev)=>prev>1?prev-1:1)}
                              onClick={handleEditUnitDecrement}
                              type="button"
                              style={{
                                border: "none",
                                paddingRight: "6px",
                                paddingLeft: "6px",
                                background: "none",
                                borderRight: "1px solid #f0f0f0",
                              }}
                            >
                              <img src={minus} alt="minus" />
                            </button>
                            <button
                              // onClick={()=>setNoofunits((prev)=>prev<999?prev+1:999)}
                              onClick={handleEditUnitIncrement}
                              type="button"
                              style={{
                                border: "none",
                                borderTopRightRadius: "5px",
                                borderBottomRightRadius: "5px",
                                paddingRight: "6px",
                                paddingLeft: "6px",
                                background: "none",
                              }}
                            >
                              <img src={plus} alt="add" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="w-50 mb-3 ms-0 me-3">
                          <Typography
                            sx={{
                              fontWeight: "500",
                              fontSize: "13px",
                              lineHeight: "19px",
                              letterSpacing: ".01em",
                              color: "rgba(103, 120, 142, 1)",
                            }}
                          >
                            Total Volume
                          </Typography> */}
      {/* <Space direction="vertical">
                              <Input size="large" addonAfter={selectAfter} defaultValue="CM" />
                          </Space> */}
      {/* <div
                            style={{ height: "42px" }}
                            className="btn-group "
                            role="group"
                            aria-label="Button group with nested dropdown"
                          >
                            <input
                              type="number"
                              autoComplete="off"
                              onKeyDown={(e) => {
                                if (
                                  !/[0-9]|Backspace|Tab|Enter|Delete|ArrowLeft|ArrowRight/.test(
                                    e.key
                                  )
                                ) {
                                  e.preventDefault();
                                }
                              }}
                              className="placeholder_style"
                              style={{
                                border: "1px solid rgba(207, 214, 223, 1)",
                                borderTopLeftRadius: "5px",
                                borderBottomLeftRadius: "5px",
                                padding: "10px",
                                fontSize: "1rem",
                                width: "60%",
                              }} */}
      {/* className="w-100"
                              value={editeddata?.total_volume}
                              onChange={handleEditChange}
                              name="total_volume"
                              placeholder="Volume" */}
      {/* />
                            <FormControl variant="standard"> */}
      {/* <InputLabel id="demo-customized-select-label">Age</InputLabel> */}
      {/* <Select
                                sx={{
                                  height: "100%",
                                  width: "100%",
                                  backgroundColor: "rgba(243, 245, 247, 1)",
                                  borderTopRightRadius: "8px",
                                  borderBottomRightRadius: "8px",
                                  border: "1px solid rgba(207, 214, 223, 1)",
                                  borderLeft: "0px",
                                }}
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                displayEmpty
                                inputProps={{ "aria-label": "Without label" }} */}
      {/* value={editeddata?.volume_type}
                                onChange={handleEditVolumeDropChange}
                                name="volume_type"
                              > */}
      {/* <MenuItem value="CBM">CBM</MenuItem>
                                <MenuItem value="CFT">CFT</MenuItem>
                              </Select>
                            </FormControl> */}
      {/* <div className="btn-group" role="group">
                              <button
                                id="btnGroupDrop1"
                                type="button"
                                className="btn dropdown-toggle "
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                style={{
                                  background: "rgba(243, 245, 247, 1)",
                                  border: "1px solid rgba(207, 214, 223, 1)",
                                }}
                              >
                                CM
                              </button>
                              <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <a className="dropdown-editeddata" href="#">
                                  CBM
                                </a>
                                <a className="dropdown-editeddata" href="#">
                                  CFT
                                </a>
                              </div>
                            </div> */}
      {/* </div>
                        </div>
                        <div className="w-50 mb-3 ms-3 me-0">
                          <Typography
                            sx={{
                              fontWeight: "500",
                              fontSize: "13px",
                              lineHeight: "19px",
                              letterSpacing: ".01em",
                              color: "rgba(103, 120, 142, 1)",
                            }}
                          >
                            Total Weight
                          </Typography>
                          <div
                            style={{ height: "42px" }}
                            className="btn-group"
                            role="group"
                            aria-label="Button group with nested dropdown"
                          >
                            <input
                              type="number"
                              autoComplete="off"
                              onKeyDown={(e) => {
                                if (
                                  !/[0-9]|Backspace|Tab|Enter|Delete|ArrowLeft|ArrowRight/.test(
                                    e.key
                                  )
                                ) {
                                  e.preventDefault();
                                }
                              }}
                              style={{
                                border: "1px solid rgba(207, 214, 223, 1)",
                                borderTopLeftRadius: "5px",
                                borderBottomLeftRadius: "5px",
                                fontSize: "1rem",
                                padding: "10px",
                                width: "60%",
                              }}
                              placeholder="Weight"
                              className="placeholder_style"
                              value={editeddata?.total_weight}
                              onChange={handleEditChange}
                              name="total_weight"
                            />
                            <FormControl variant="standard"> */}
      {/* <InputLabel id="demo-customized-select-label">Age</InputLabel> */}
      {/* <Select
                                sx={{
                                  height: "100%",
                                  width: "100%",
                                  backgroundColor: "rgba(243, 245, 247, 1)",
                                  borderTopRightRadius: "8px",
                                  borderBottomRightRadius: "8px",
                                  border: "1px solid rgba(207, 214, 223, 1)",
                                  borderLeft: "0px",
                                }}
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                displayEmpty
                                inputProps={{ "aria-label": "Without label" }}
                                value={editeddata?.weight_type}
                                onChange={handleEditWeightDropChange}
                                name="weight_type"
                                // value={age}
                                // onChange={handleChange}
                                // input={<BootstrapInput />}
                              >
                                <MenuItem value="KG">KG</MenuItem>
                                <MenuItem value="LB">LB</MenuItem>
                              </Select>
                            </FormControl> */}
      {/* <button className="btn" onClick={handleSave}>save</button> */}

      {/* <div className="btn-group" role="group">
                              <button
                                id="btnGroupDrop1"
                                type="button"
                                className="btn dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                style={{
                                  background: "rgba(0,0,0,0.03)",
                                  border: "1px solid rgba(207, 214, 223, 1)",
                                }}
                              >
                                KG
                              </button>
                              <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <a className="dropdown-item" href="#">
                                  KG
                                </a>
                                <a className="dropdown-item" href="#">
                                  LB
                                </a>
                              </div>
                            </div> */}
      {/* </div>
                        </div>
                      </div>
                      <Button
                        style={{
                          backgroundColor: "transparent",
                          boxShadow: "unset",
                          border: "none",
                          opacity: !canEditSave ? ".5" : "1",
                        }}
                        onClick={handleUpdate}
                        disabled={!canEditSave}
                      >
                        save
                      </Button>
                    </div> */}
      {/* ) */}

      {/* // })
                }
              </>
            )} */}

      {/* //   })
            // } */}
      {/* //     </Box> */}
      {/* //   );
      // })}  */}
      {/* {inputFields.map((load, index) => (
        <React.Fragment key={index}> */}
      {/* <div className={`${saveddatas.length > 0 && "backgroundStyle"}`}> */}
      {/* {saveddatas.length > 0 && (
              <>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "19px",
                    letterSpacing: ".01em",
                    color: "rgba(24, 30, 37, 1)",
                  }}
                >
                  Load {saveddatas.length + 1}
                </span>
                <span style={{ float: "inline-end" }}>
                  <img
                    src={deletedicon}
                    role="button"
                    alt="delete"
                    onClick={handleCloseLoad}
                  />
                </span>
                <hr style={{ margin: "8px 0px" }} />
              </>
            )} */}
      <div className="d-flex">
        <div className="w-50 mb-3 mt-0 ms-0 me-3">
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "rgba(103, 120, 142, 1)",
            }}
          >
            Package Type
          </Typography>
          <FormControl fullWidth>
            {/* <InputLabel id="demo-simple-select-label">Package</InputLabel> */}
            <Select
              style={{ height: "45px",fontSize:" 14px" }}
              // labelId="demo-simple-select-label"
              // id="demo-simple-select"
              // label="Age"
              className="package_type"
              value={tsDatas.package_type}
              onChange={handlePackChange}
              name="package_type"
              displayEmpty
              renderValue={tsDatas.package_type !== "" ? undefined : () => <><span style={{fontSize: "14px",fontWeight: "400",color: "rgb(212, 212, 212)"}}>Select Type</span></> }
              inputProps={{ "aria-label": "Without label" }}
            >
              {
                packages?.map((item,index)=>{
                  return <MenuItem style={{fontSize: "14px"}} value={item.code}>{item?.label}</MenuItem>
                })
              }
              
            </Select>
          </FormControl>{" "}
        </div>
        <div className="w-50 mb-3  mt-0 ms-3 me-0">
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "rgba(103, 120, 142, 1)",
            }}
          >
            No.of Units
          </Typography>
          <div
            className="btn-group w-100"
            role="group"
            style={{
              border: "1px solid rgba(207, 214, 223, 1)",
              height: "45px",
              borderColor: errors.no_of_units ? "red" : "rgba(207, 214, 223, 1)",
            }}
          >
            <input
              type="number"
              autoComplete="off"
              className=" w-100 placeholder_style"
              placeholder="Units"
              onKeyDown={(e) => {
                if (
                  !/[0-9]|\.|Backspace|Tab|Enter|Delete|ArrowLeft|ArrowRight/.test(
                    e.key
                  )
                ) {
                  e.preventDefault();
                }
              }}
              onBlur={() =>
                tsDatas?.no_of_units < 0 || tsDatas?.no_of_units > 999
                  ? seterrors((prev) => {
                      return { ...prev, no_of_units: true };
                    })
                  : seterrors((prev) => {
                      return { ...prev, no_of_units: false };
                    })
              }
              step={'any'}
              onWheel={(e) => e.target.blur()}
              defaultValue={1}
              value={tsDatas?.no_of_units}
              name="no_of_units"
              ref={nunits}
              onChange={handleUnitsChange}
              style={{
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
                padding: "13px",
                border: "none",
                borderRadius:"4px",
                fontSize:"14px"
              }}
            />
            <button
              onClick={handleUnitDecrement}
              type="button"
              style={{
                border: "none",
                paddingRight: "6px",
                paddingLeft: "6px",
                background: "none",
                borderRight: "1px solid #f0f0f0",
              }}
            >
              <img src={minus} alt="minus" />
            </button>
            <button
              onClick={handleUnitIncrement}
              type="button"
              style={{
                border: "none",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
                paddingRight: "6px",
                paddingLeft: "6px",
                background: "none",
              }}
            >
              <img src={plus} alt="add" />
            </button>
          </div>
          <FormHelperText style={{ color: "red" }}>
            {errors.no_of_units && tsDatas.no_of_units > 999
              ? "Maximum 999 allowed"
              : tsDatas.no_of_units < 0
              ? "Min 1"
              : null}
          </FormHelperText>
        </div>
      </div>
      <div className="d-flex">
        <div className="w-50 mb-3 ms-0 me-3">
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "rgba(103, 120, 142, 1)",
            }}
          >
            Total Volume
          </Typography>
          <div
            style={{
              height: "42px",
              borderColor: errors.total_volume ? "red" : null,
            }}
            className="btn-group "
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <input
              type="number"
              autoComplete="off"
              onKeyDown={(e) => {
                if (
                  !/[0-9]|\.|Backspace|Tab|Enter|Delete|ArrowLeft|ArrowRight/.test(
                    e.key
                  )
                ) {
                  e.preventDefault();
                }
              }}
              step={'any'}
              onBlur={() =>
                (tsDatas?.volume_type === "CBM" && tsDatas?.total_volume > 15) || (tsDatas.total_volume > 530 && tsDatas?.volume_type === "CFT")
                  ? seterrors((prev) => {
                      return { ...prev, total_volume: true };
                    })
                  : seterrors((prev) => {
                      return { ...prev, total_volume: false };
                    })
              }
              onWheel={(e) => e.target.blur()}
              className="placeholder_style"
              style={{
                border: "1px solid rgba(207, 214, 223, 1)",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                padding: "10px",
                fontSize: "14px",
                width: "60%",
              }}
              value={tsDatas.total_volume}
              onChange={handleChange}
              name="total_volume"
              placeholder="Volume"
            />
            <FormControl variant="standard">
              <Select
                sx={{
                  height: "100%",
                  width: "100%",
                  fontSize:"14px",
                  backgroundColor: "rgba(243, 245, 247, 1)",
                  borderTopRightRadius: "8px",
                  borderBottomRightRadius: "8px",
                  border: "1px solid rgba(207, 214, 223, 1)",
                  borderLeft: "0px",
                  '& .MuiSelect-select': {
                    textAlign: 'center', // Center the text
                    '&:focus': {
                      backgroundColor: 'transparent', // Optional: remove background on focus
                    },
                  },
                  '& .MuiSelect-icon': {
                    right: 17, // Adjust icon position
                  },
                }}
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                value={tsDatas?.volume_type}
                onChange={handleVolumeDropChange}
                name="volume_type"
              >
                <MenuItem  style={{fontSize:"14px"}} value="CBM">CBM</MenuItem>
                <MenuItem style={{fontSize:"14px"}} value="CFT">CFT</MenuItem>
              </Select>
            </FormControl>
          </div>
          <FormHelperText style={{ color: "red" }}>
            {errors.total_volume && tsDatas?.volume_type === "CBM" &&
              tsDatas.total_volume > 15 &&
              `Maximum 15 ${tsDatas?.volume_type}`}
            {errors.total_volume && tsDatas?.volume_type === "CFT" &&
            tsDatas.total_volume > 530 &&
            `Maximum 530 ${tsDatas?.volume_type}`}
          </FormHelperText>
        </div>
        <div className="w-50 mb-3 ms-3 me-0">
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "rgba(103, 120, 142, 1)",
            }}
          >
            Total Weight
          </Typography>
          <div
            style={{
              height: "42px",
              border: errors.total_weight && tsDatas?.total_weight && "1px solid red",
            }}
            className="btn-group"
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <input
              type="number"
              autoComplete="off"
              onKeyDown={(e) => {
                if (
                  !/[0-9]|\.|Backspace|Tab|Enter|Delete|ArrowLeft|ArrowRight/.test(
                    e.key
                  )
                ) {
                  e.preventDefault();
                }
              }}
              step={'any'}
              onBlur={() =>
                ((tsDatas?.total_weight && tsDatas?.total_weight < 10) || tsDatas?.total_weight > 15000 && tsDatas?.weight_type === "KG" ) || (tsDatas?.total_weight < 10 || tsDatas?.total_weight > 33000 && tsDatas?.weight_type === "LB" && tsDatas?.total_weight)
                  ? seterrors((prev) => {
                      return { ...prev, total_weight: true };
                    })
                  : seterrors((prev) => {
                      return { ...prev, total_weight: false };
                    })
              }
              onWheel={(e) => e.target.blur()}
              style={{
                border: "1px solid rgba(207, 214, 223, 1)",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                fontSize: "14px",
                padding: "10px",
                width: "60%",
              }}
              placeholder="Weight"
              className="placeholder_style"
              value={tsDatas.total_weight}
              onChange={handleChange}
              name="total_weight"
            />
            <FormControl variant="standard">
              <Select
                sx={{
                  height: "100%",
                  width: "100%",
                  backgroundColor: "rgba(243, 245, 247, 1)",
                  borderTopRightRadius: "8px",
                  borderBottomRightRadius: "8px",
                  border: "1px solid rgba(207, 214, 223, 1)",
                  borderLeft: "0px",
                  '& .MuiSelect-select': {
                    textAlign: 'center', // Center the text
                    '&:focus': {
                      backgroundColor: 'transparent', // Optional: remove background on focus
                    },
                  },
                  '& .MuiSelect-icon': {
                    right: 22, // Adjust icon position
                  },
                  fontSize:"14px",
                }}
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                value={tsDatas?.weight_type}
                onChange={handleWeightDropChange}
                name="weight_type"
                ref={selectref}
                
              >
                <MenuItem style={{fontSize:"14px"}} value="KG">KG</MenuItem>
                <MenuItem style={{fontSize:"14px"}} value="LB">LB</MenuItem>
              </Select>
            </FormControl>
          </div>
          {console.log(errors.total_weight)}
          <FormHelperText style={{ color: "red" }}>
            {errors.total_weight && tsDatas?.total_weight &&
              ((tsDatas.total_weight > 15000 && tsDatas?.weight_type === "KG")
                ? `Maximum 15000${tsDatas?.weight_type}`
                : (tsDatas.total_weight < 10 && tsDatas?.weight_type === "KG")
                ? `Min 10${tsDatas?.weight_type}`
                : null)}
            {errors.total_weight &&
              ((tsDatas.total_weight > 15000 && tsDatas?.weight_type === "LB")
                ? `Maximum 33000 ${tsDatas?.weight_type}`
                : (tsDatas.total_weight < 10 && tsDatas?.weight_type === "LB")
                ? `Min 10 ${tsDatas?.weight_type}`
                : null)}
          </FormHelperText>
        </div>
      </div>
      {/*             
            {saveddatas.length > 0 && (
              <Button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  boxShadow: "unset",
                  opacity: !canSave ? ".5" : "1",
                }}
                onClick={handleSave}
                disabled={!canSave}
              >
                save
              </Button>
            )} */}
      {/* </div> */}
      {/* <DeleteIcon onClick={handleCloseLoad} color="error"/> */}
      {/* </React.Fragment>
      ))} */}
      {/* <button className="btn" onClick={handleAddLoad} disabled={true} > */}
      {/* <Tooltip placement="top" title={"Please add proper details for previous loads"} trigger={IsError || !canAdd && "hover"} >
        <Button
          style={{
            border: "none",
            background: "none",
            opacity: !CanField ? "1" : canAdd && !IsError ? "1" : ".5",
            boxShadow: "unset",
          }}
          onClick={handleAddLoad}
          disabled={!CanField ? false : !canAdd || IsError}
        >
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "rgba(73, 90, 110, 1)",
            }}
          >
            + Add Another Load
          </Typography>
        </Button>
      </Tooltip> */}
      {/* </button> */}

      <div className=" d-flex justify-content-between">
        <div className=" d-flex" style={{ justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "rgba(103, 120, 142, 1)",
              padding: "13px 8px 13px 0px",
            }}
          >
            EXIM Type
          </Typography>

          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={exim}
            style={{fontSize:"13px"}}
          >
            <FormControlLabel
              value="I"
              style={{
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "19px",
                letterSpacing: ".01em",
                color: "rgba(41, 51, 61, 1)",
              }}
              control={
                <Radio
                  name="import_export"
                  value="I"
                  onChange={(e) => setexim(e.target.value)}
                  size="small"
                  label="Import"
                  sx={{
                    color: "black",
                    "&.Mui-checked": {
                      color: "black",
                    },
                    fontSize:"13px"
                  }}
                />
              }
              label="Import"
              labelPlacement="right"
            />
            <FormControlLabel
              value="E"
              style={{
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "19px",
                letterSpacing: ".01em",
                color: "rgba(41, 51, 61, 1)",
              }}
              control={
                <Radio
                  name="import_export"
                  value="E"
                  onChange={(e) => setexim(e.target.value)}
                  size="small"
                  label="Export"
                  sx={{
                    color: "black",
                    "&.Mui-checked": {
                      color: "black",
                    },
                    fontSize:"13px"
                  }}
                />
              }
              label="Export"
              labelPlacement="right"
            />
          </RadioGroup>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button className="confirm" onClick={handleLclSubmit}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default TotalShipment;
