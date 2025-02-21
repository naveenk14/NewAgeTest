import React, { useEffect, useRef, useState } from "react";
import {
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormControlLabel,
  Radio,
  Box,
  RadioGroup,
  FormHelperText,
} from "@mui/material";
import minus from "../../../../assets/9021673_minus_bold_icon 1.svg";
import plus from "../../../../assets/material-symbols_add-rounded.svg";
import { Button, Tooltip } from "antd";
import deletedicon from "../../../../assets/ic_outline-delete.svg";
import editicon from "../../../../assets/editpencil.f11da97f.svg";
import e from "cors";

const UnitType = ({
  onClose,
  setCargo,
  setCargoOptionsVisible,
  seterrmsg,
  setmode,
  // utexim,
  // setutexim,
  exim,
  setexim,
  // inputFields,
  // setInputFields,
  // saveddatas,
  // setsaveddatas,
  // editeddata,
  // setediteddata,
  // editedId,
  // seteditedId,
  // uterrors,
  // setuterrors,
  // utediterrors,
  // setutediterrors,
  utDatas,
  setutDatas,
  setutclickedId,
  utclickedId,
  setshowcargo,
  packages,
  setlastsaved,
  setFinaldetails,
  cbm,
  setcbm,
  kg,
  setkg,
  unit, 
  setunits,
  originPort,
  destPort,
}) => {
  console.log("ut", utDatas);
  console.log("clickedut", utclickedId);
  const [hasErrors, setHasErrors] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [errors, setErrors] = useState([]);
  const hasPageBeenRendered = useRef(false);

  const handleAddLoad = () => {
    setutDatas((prevData) => {
      return [
        ...prevData,
        {
          package_type: "BOX",
          unit: "",
          height: "",
          length: "",
          width: "",
          dimensionUnit: "CM",
          weight: "",
          weightUnit: "KG",
        },
      ];
    });
    setutclickedId((prevData) => {
      console.log(prevData);
      return [
        ...prevData.filter((i) => i != utDatas.length - 1),
        utDatas.length,
      ];
    });
  };

  const handleChange = (id, e) => {
    console.log(id);
    const { name, value } = e.target;
    setutDatas((prevData) =>
      prevData.map((item, index) =>
        index === id
          ? { ...item, [name]: name === "unit" ? value < 1?1:parseFloat(value) : value }
          : item
      )
    );
    // handleSaveDisabled(id)
  };
  const handleChangeWeightDropDown = (id, e) => {
    console.log(id);
    const { name, value } = e.target;
    setutDatas((prevData) =>
      prevData.map((item, index) =>
        index === id
          ? {
              ...item,
              [name]: value,
              dimensionUnit: value === "KG" ? "CM" : "IN",
            }
          : item
      )
    );
    // handleSaveDisabled(id)
  };
  const handleChangeDimensionDropDown = (id, e) => {
    console.log(id);
    const { name, value } = e.target;
    setutDatas((prevData) =>
      prevData.map((item, index) =>
        index === id
          ? { ...item, [name]: value, weightUnit: value === "CM" ? "KG" : "LB" }
          : item
      )
    );
    // handleSaveDisabled(id)
  };

  const handleDelete = (id) => {
    const deletedItems = [...utDatas];
    deletedItems.splice(id, 1);
    setutDatas(deletedItems);
  };
  const handleEdit = (id) => {
    // const EditedItems = utDatas.map((item,index)=>index === id? id:index)
    setutclickedId((prev) => {
      return [...prev, id];
    });
  };

  const handleSave = (id) => {
    console.log("saved", id);
    const savedItems = utclickedId.filter((item, index) => item !== id);
    setutclickedId(savedItems);
  };

  const handleMinus = (id) => {
    setutDatas((prevData) =>
      prevData.map((item, index) =>
        index === id
          ? {
              ...item,
              unit: parseInt(item.unit) > 1 ? parseInt(item.unit) - 1 : 1,
            }
          : item
      )
    );
  };
  const handlePlus = (id) => {
    setutDatas((prevData) =>
      prevData.map((item, index) =>
        index === id
          ? {
              ...item,
              unit:
                parseInt(item.unit) < 99
                  ? parseInt(item.unit) + 1
                  : parseInt(item.unit) >= 99
                  ? 99
                  : 1,
            }
          : item
      )
    );
  };

  const handleWholeValue = () => {
    if (utDatas.length > 0) {
      let e,
        t = 0,
        a = 0,
        u = 0;
      utDatas.forEach((l) => {
        return (
          (t += parseInt(l.unit) * KGandLB(l.weightUnit, l.weight)),
          (a +=
            parseInt(l.unit) *
            CMandIN(l.dimensionUnit, l.length, l.width, l.height)),
          (u += parseInt(l.unit)),
          (!l.unit || l.unit < 1 || l.unit > 999) && (e = !0),
          (!l.height || l.height < 10 || l.height > 220) && (e = !0),
          (!l.width || l.width < 10 || l.width > 220) && (e = !0),
          (!l.length || l.length < 10 || l.length > 310) && (e = !0),
          (!l.weight || l.weight < 1 || l.weight > 3e3) && (e = !0)
        );
      });
      setcbm(a);
      setkg(t);
      setunits(u);
      if (t >= 15e3) {
        return (
          seterrmsg("Your total Load exceeds ".concat(15e3, " KG.")),
          setshowcargo(true),
          setDisabled(true)
        );
        // return;
      } else {
        seterrmsg("");
        setDisabled(false);
      }
      if (a >= 15) {
        return (
          seterrmsg("Your total Load exceeds ".concat(15, " CBM.")),
          setshowcargo(true),
          setDisabled(true)
        );
        // return;
      } else {
        seterrmsg("");
        setDisabled(false);
      }
      // if (e) {
      //     return (seterrmsg("Please add proper details for previous loads"),
      //     setshowcargo(true))
      //     // return
      // }
      // else{
      //   seterrmsg("")
      // }
      // }
      //   eD(!0)
      // }
      // , tr = e=>{
      //   let t = eg[e];
      //   if (!t.noOfUnits || t.noOfUnits < 1 || t.noOfUnits > 999 || !t.height || t.height < 10 || t.height > 220 || !t.width || t.width < 10 || t.width > 220 || !t.length || t.length < 10 || t.length > 310 || !t.totalWeight || t.totalWeight < 1 || t.totalWeight > 3e3)
      //       return !0
      // }
    }
  };

  console.log("cbm", cbm);
  console.log("kg", kg);

  //For Mathematical Operations

  const KGandLB = (e, t) => {
    let a = 1;
    return "KG" == e ? (a = 1) : "LB" == e && (a = 0.453), parseFloat(t) * a;
  };
  const CMandIN = (e, t, a, l) => {
    let n = 1;
    return (
      "CM" == e ? (n = 1e6) : "IN" == e && (n = 61024),
      (parseFloat(t) * parseFloat(a) * parseFloat(l)) / n
    );
  };

  const CFT = (e, t) => {
    let a = 1;
    return "CFT" == e && (a = 0.028), parseFloat(t) * a;
  };

  console.log(KGandLB("KG", 11));
  console.log(CMandIN("CM", 11, 11, 11));
  console.log(CFT());

  const triming = (un, le, wi, he, diun, weun, we) => {
    const res = `${un} Units ${le} x  ${wi} x  ${he} ${diun} | ${Number.parseFloat(
      (parseInt(un) * we).toFixed(3)
    )}  ${weun} | ${Number.parseFloat(
      (parseInt(un) * CMandIN(diun, le, wi, he)).toFixed(3)
    )} CBM`;
    console.log(res);
    if (res.length <= 40) {
      return res;
    } else {
      return (
        <Tooltip placement="topLeft" zIndex={9999} title={res}>
          <span role="button">
            {res?.slice(0, 40).trim().split("").join("") + "..."}
          </span>
        </Tooltip>
      );
    }
  };

  const validateData = () => {
    let newErrors = [];

    utDatas.forEach((item, index) => {
      let error = {};
      console.log(error);

      // Validate package_type
      if (!item.package_type || item.package_type.trim() === "") {
        error.package_type = "Package type is required";
      }

      // Validate unit
      if (!Number.isInteger(item.unit) || item.unit < 1 || item.unit > 999 ) {
        if (item.unit && item.unit < 1 ) {
          error.unit = "Min 1";
        } else if (item.unit  && item.unit > 999) {
          error.unit = "Max 999";
        }
        // else if(item.unit === ("" || NaN || null)){
        //   error.unit = ""
        // }
      }

      // Validate length
      if (item.length < 10 || item.length > 120) {
        if (item.length && item.length < 10 && utDatas[index]?.dimensionUnit === "CM") {
          error.length = `Min 10 ${utDatas[index]?.dimensionUnit}`;
        } else if (item.length && item.length > 310 && utDatas[index]?.dimensionUnit === "CM") {
          error.length = `Max 310 ${utDatas[index]?.dimensionUnit}`;
        }
        if (item.length && item.length < 10 && utDatas[index]?.dimensionUnit === "IN") {
          error.length = `Min 10 ${utDatas[index]?.dimensionUnit}`;
        } else if (item.length && item.length > 120 && utDatas[index]?.dimensionUnit === "IN") {
          error.length = `Max 120 ${utDatas[index]?.dimensionUnit}`;
        }
      }

      // Validate width
      if (item.width < 10 || item.width > 86) {
        if (item.width && item.width < 10 && utDatas[index]?.dimensionUnit === "CM") {
          error.width = `Min 10 ${utDatas[index]?.dimensionUnit}`;
        } else if (item.width && item.width > 220 && utDatas[index]?.dimensionUnit === "CM") {
          error.width = `Max 220 ${utDatas[index]?.dimensionUnit}`;
        }
        if (item.width && item.width < 10 && utDatas[index]?.dimensionUnit === "IN") {
          error.width = `Min 10 ${utDatas[index]?.dimensionUnit}`;
        } else if (item.width && item.width > 86 && utDatas[index]?.dimensionUnit === "IN") {
          error.width = `Max 86 ${utDatas[index]?.dimensionUnit}`;
        }
      }

      // Validate height
      if (item.height < 10 || item.height > 86) {
        if (item.height && item.height < 10 && utDatas[index]?.dimensionUnit === "CM") {
          error.height = `Min 10 ${utDatas[index]?.dimensionUnit}`;
        } else if (item.height && item.height > 220 && utDatas[index]?.dimensionUnit === "CM") {
          error.height = `Max 220 ${utDatas[index]?.dimensionUnit}`;
        }
        if (item.height && item.height < 10 && utDatas[index]?.dimensionUnit === "LB") {
          error.height = `Min 10 ${utDatas[index]?.dimensionUnit}`;
        } else if (item.height && item.height > 86 && utDatas[index]?.dimensionUnit === "LB") {
          error.height = `Max 86 ${utDatas[index]?.dimensionUnit}`;
        }
      }

      // Validate weight
      if (item.weight <= 0 || item.weight > 3000) {
        if (item.weight && item.weight <= 0 && utDatas[index]?.weightUnit === "KG") {
          error.weight = `Min 1 ${utDatas[index]?.weightUnit}`;
        } else if (item.weight && item.weight > 3000 && utDatas[index]?.weightUnit === "KG") {
          error.weight = `Max 3000 ${utDatas[index]?.weightUnit}`;
        }
        if (item.weight && item.weight <= 0 && utDatas[index]?.weightUnit === "LB") {
          error.weight = `Min 1 ${utDatas[index]?.weightUnit}`;
        } else if (item.weight && item.weight > 6600 && utDatas[index]?.weightUnit === "LB") {
          error.weight = `Max 6600 ${utDatas[index]?.weightUnit}`;
        }
      }

      // Validate dimensionUnit
      if (!["CM", "IN"].includes(item.dimensionUnit)) {
        error.dimensionUnit = "Invalid dimension unit";
      }

      // Validate weightUnit
      if (!["KG", "LB"].includes(item.weightUnit)) {
        error.weightUnit = "Invalid weight unit";
      }

      // If there are errors, add them to the newErrors array
      if (Object.keys(error).length > 0) {
        newErrors[index] = error;
      }
    });
    const hasError = Object.values(newErrors).some(
      (error) =>
        error.package_type ||
        error.unity ||
        error.length ||
        error.width ||
        error.height ||
        error.weight
    );
    setHasErrors(hasError);
    console.log(newErrors)
    return newErrors;
  };

  console.log(hasErrors);
  console.log(utDatas)

  const handleBlur = (index, name) => {
    const validationErrors = validateData();
    console.log(validationErrors);

    if (validationErrors?.[index] && validationErrors?.[index][name]) {
      console.log(
        `Blur validation error for ${name}:`,
        validationErrors[index][name]
      );
      setErrors((prevErrors) => {
        const updatedErrors = [...prevErrors];
        updatedErrors[index] = {
          ...updatedErrors[index],
          [name]: validationErrors[index][name],
        };
        return updatedErrors;
      });
    } else {
      setErrors((prevErrors) => {
        const updatedErrors = [...prevErrors];
        if (updatedErrors[index]) {
          delete updatedErrors[index][name];
          if (Object.keys(updatedErrors[index]).length === 0) {
            updatedErrors[index] = undefined;
          }
        }
        return updatedErrors;
      });
    }
  };

  const aggregateData = () => {
    return `${(originPort?.Transport_mode === "AIR" || destPort?.Transport_mode === "AIR" )?"AIR":"LCL"} | ${Number(unit)} Units ${Number(cbm).toFixed(3)} CBM ${Number(
      kg
    ).toFixed(3)} KG`;
  };

  const handleUtypeSubmit = (e) => {
    e.preventDefault();
    if (
      utDatas[utDatas.length - 1].package_type &&
      utDatas[utDatas.length - 1].unit &&
      utDatas[utDatas.length - 1].length &&
      utDatas[utDatas.length - 1].width &&
      utDatas[utDatas.length - 1].height &&
      utDatas[utDatas.length - 1].weight &&
      utDatas[utDatas.length - 1] &&
      !disabled &&
      !hasErrors
    ) {
      console.log("success");
      setCargo(() => aggregateData());
      setFinaldetails(() => aggregateData());
      setmode("LCLUNIT");
      setshowcargo(true);
      setCargoOptionsVisible(false);
    } else {
      seterrmsg("please add proper details for previous loads");
    }
  };

  useEffect(() => {
    handleWholeValue();
  }, [utDatas]);

  useEffect(() => {
    if (hasPageBeenRendered.current) {
      setCargo(() => aggregateData());
      setshowcargo(true);
    }
    hasPageBeenRendered.current = true;
  }, [aggregateData]);

  console.log(errors);

  return (
    <>
      {utDatas.map((item, index) => (
        <React.Fragment key={index}>
          {utclickedId.includes(index) ? (
            <>
              <div
                className={`outer_div my-2 ${
                  utDatas.length > 1 && "backgroundStyle"
                }`}
              >
                {utDatas.length > 1 && (
                  <>
                    <div className="d-flex justify-content-between">
                      {/* <div> */}
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
                        </span>
                      </div>
                      {utDatas.length > 1 && (
                        <span style={{ float: "inline-end" }}>
                          <img
                            src={deletedicon}
                            alt="delete"
                            role="button"
                            onClick={() => handleDelete(index)}
                          />
                        </span>
                      )}
                      {/* </div> */}
                    </div>
                    <hr style={{ margin: "8px 0px" }} />
                  </>
                )}

                <div>
                  <div className="d-flex mt-1">
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
                      <FormControl fullWidth>
                        <Select
                          style={{ height: "45px",border:"none",fontSize:"14px" }}
                          // value={utDatas.package_type}
                          // onChange={handleChange}
                          className={`w-100   ${
                            errors[index]?.unit ? "error" : ""
                          }`}
                          value={item.package_type}
                          onChange={(e) => handleChange(index, e)}
                          onBlur={() => handleBlur(index, "package_type")}
                          name="package_type"
                          displayEmpty
                          renderValue={item.package_type !== "" ? undefined : () => <><span style={{fontSize: "14px",fontWeight: "400",color: "rgb(212, 212, 212)"}}>Select Type</span></> }
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          {packages?.map((item, index) => {
                            return (
                              <MenuItem style={{fontSize: "14px"}} value={item?.code}>{item?.label}</MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>{" "}
                      {errors[index]?.package_type && (
                        <p
                          className="error-text"
                          style={{
                            fontSize: "12px",
                            color: "red",
                          }}
                        >
                          {errors[index]?.package_type}
                        </p>
                      )}
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
                        className="btn-group"
                        role="group"
                        style={{
                          border: "1px solid rgb(207, 214, 223)",
                          height: "45px",
                          // borderColor: uterrors.unit ? "red" : null,
                        }}
                      >
                        <input
                          type="number"
                          autoComplete="off"
                          className={`w-100   placeholder_style ${
                            errors[index]?.unit ? "error" : ""
                          }`}
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
                          step={'any'}
                          onBlur={() => handleBlur(index, "unit")}
                          // onBlur={() =>
                          //   utDatas?.unit < 0 || utDatas?.unit > 999
                          //     ? setuterrors((prev) => {
                          //         return { ...prev, unit: true };
                          //       })
                          //     : setuterrors((prev) => {
                          //         return { ...prev, unit: false };
                          //       })
                          // }
                          onWheel={(e) => e.target.blur()}
                          // value={noofunits ? noofunits : ""}
                          // value={utDatas?.unit}
                          value={item.unit}
                          onChange={(e) => handleChange(index, e)}
                          name="unit"
                          // onChange={(e)=>setNoofunits(parseInt(e.target.value))}
                          // onChange={handleUnitsChange}
                          style={{
                            borderTopRightRadius: "0",
                            borderBottomRightRadius: "0",
                            padding: "13px",
                            border: "none",
                            borderRadius:"8px",
                            fontSize:"14px"
                          }}
                        />
                        <button
                          onClick={() => handleMinus(index)}
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
                          onClick={() => handlePlus(index)}
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
                      {/* <FormHelperText style={{ color: "red", fontStyle: "italic" }}>
                  {uterrors.unit && utDatas.unit > 999
                    ? "Maximum 999 allowed"
                    : utDatas.unit < 0
                    ? "Min 1"
                    : null}
                </FormHelperText> */}

                      {errors[index]?.unit && (
                        <p
                          className="error-text"
                          style={{
                            fontSize: "12px",
                            color: "red",
                          }}
                        >
                          {errors[index]?.unit}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="w-100 mb-3">
                      <Typography
                        sx={{
                          fontWeight: "500",
                          fontSize: "13px",
                          lineHeight: "19px",
                          letterSpacing: ".01em",
                          color: "rgba(103, 120, 142, 1)",
                        }}
                      >
                        Dimentions
                      </Typography>

                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Button group with nested dropdown"
                        style={{
                          // border: "1px solid rgb(207, 214, 223)",
                          height: "42px",
                        }}
                      >
                        <input
                          className="placeholder_style w-100"
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
                          // onBlur={() =>
                          //   utDatas?.length < 10 || utDatas?.length > 310
                          //     ? setuterrors((prev) => {
                          //         return { ...prev, length: true };
                          //       })
                          //     : setuterrors((prev) => {
                          //         return { ...prev, length: false };
                          //       })
                          // }
                          onWheel={(e) => e.target.blur()}
                          value={item.length}
                          onChange={(e) => handleChange(index, e)}
                          onBlur={() => handleBlur(index, "length")}
                          style={{
                            // border: "0px",
                            border: "1px solid rgb(207, 214, 223)",
                            borderTopLeftRadius: "5px",
                            borderBottomLeftRadius: "5px",
                            fontSize: "14px",
                            padding: "12px",
                            // borderColor: uterrors.length ? "red" : null,
                          }}
                          placeholder="L"
                          // value={utDatas.length}
                          // onChange={handleChange}
                          name="length"
                        />
                        <input
                          className="placeholder_style w-100"
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
                          // onBlur={() =>
                          //   utDatas?.width < 10 || utDatas?.width > 310
                          //     ? setuterrors((prev) => {
                          //         return { ...prev, width: true };
                          //       })
                          //     : setuterrors((prev) => {
                          //         return { ...prev, width: false };
                          //       })
                          // }
                          value={item.width}
                          onChange={(e) => handleChange(index, e)}
                          onWheel={(e) => e.target.blur()}
                          onBlur={() => handleBlur(index, "width")}
                          style={{
                            border: "1px solid rgb(207, 214, 223)",
                            borderRight: "1px solid rgb(207, 214, 223)",
                            borderLeft: "1px solid rgb(207, 214, 223)",
                            fontSize: "14px",
                            padding: "12px",
                            // borderColor: uterrors.width ? "red" : null,
                          }}
                          placeholder="W"
                          // value={utDatas.width}
                          // onChange={handleChange}
                          name="width"
                        />
                        <input
                          className="placeholder_style w-100"
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
                          // onBlur={() =>
                          //   utDatas?.height < 10 || utDatas?.height > 310
                          //     ? setuterrors((prev) => {
                          //         return { ...prev, height: true };
                          //       })
                          //     : setuterrors((prev) => {
                          //         return { ...prev, height: false };
                          //       })
                          // }
                          onWheel={(e) => e.target.blur()}
                          value={item.height}
                          onChange={(e) => handleChange(index, e)}
                          onBlur={() => handleBlur(index, "height")}
                          style={{
                            border: "1px solid rgb(207, 214, 223)",
                            borderRight: "1px solid rgb(207, 214, 223)",
                            borderLeft: "1px solid rgb(207, 214, 223)",
                            fontSize: "14px",
                            padding: "12px",
                            // borderColor: uterrors.height ? "red" : null,
                          }}
                          placeholder="H"
                          // value={utDatas.height}
                          // onChange={handleChange}
                          name="height"
                        />
                        <FormControl variant="standard">
                          {/* <InputLabel id="demo-customized-select-label">Age</InputLabel> */}
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
                                right: 3, // Adjust icon position
                              },
                              fontSize:"14px",
                            }}
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                            defaultValue="KG"
                            value={item.dimensionUnit}
                            onChange={(e) =>
                              handleChangeDimensionDropDown(index, e)
                            }
                            onBlur={() => handleBlur(index, "dimensionUnit")}
                            // value={age}
                            // onChange={handleChange}
                            // input={<BootstrapInput />}
                            // value={utDatas?.dimensionUnit}
                            // onChange={handleVolumeDropChange}
                            name="dimensionUnit"
                          >
                            <MenuItem style={{fontSize:"14px"}} value="CM">CM</MenuItem>
                            <MenuItem style={{fontSize:"14px"}} value="IN">IN</MenuItem>
                          </Select>
                        </FormControl>
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
                  border: "1px solid grey",
                }}
              >
                CBM
              </button>
              <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <a className="dropdown-item" href="#">
                  CBM
                </a>
                <a className="dropdown-item" href="#">
                  CFT
                </a>
              </div>
            </div> */}
                      </div>
                      <div className="d-flex">
                        {/* <FormHelperText
                    style={{
                      color: "red",
                      fontStyle: "italic",
                      width: "132px",
                    }}
                  >
                    {uterrors.length &&
                      (utDatas.length > 310
                        ? "Max 310CM"
                        : utDatas.length < 10
                        ? "Min 10CM"
                        : null)}
                  </FormHelperText> */}
                        {/* <FormHelperText
                    style={{
                      color: "red",
                      fontStyle: "italic",
                      width: "132px",
                    }}
                  >
                    {uterrors.width &&
                      (utDatas.width > 310
                        ? "Max 310CM"
                        : utDatas.width < 10
                        ? "Min 10CM"
                        : null)}
                  </FormHelperText>
                  <FormHelperText
                    style={{
                      color: "red",
                      fontStyle: "italic",
                      width: "132px",
                    }}
                  >
                    {uterrors.height &&
                      (utDatas.height > 310
                        ? "Max 310CM"
                        : utDatas.height < 10
                        ? "Min 10CM"
                        : null)}
                  </FormHelperText> */}
                        <div style={{ width: "30%" }}>
                          {errors[index]?.length && (
                            <p
                              className="error-text"
                              style={{
                                fontSize: "12px",
                                color: "red",
                              }}
                            >
                              {errors[index]?.length}
                            </p>
                          )}
                        </div>
                        <div style={{ width: "30%" }}>
                          {errors[index]?.width && (
                            <p
                              className="error-text"
                              style={{
                                fontSize: "12px",
                                color: "red",
                              }}
                            >
                              {errors[index]?.width}
                            </p>
                          )}
                        </div>
                        <div style={{ width: "30%" }}>
                          {errors[index]?.height && (
                            <p
                              className="error-text"
                              style={{
                                fontSize: "12px",
                                color: "red",
                              }}
                            >
                              {errors[index]?.height}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <div className="w-100">
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
                        className="btn-group w-100"
                        role="group"
                        aria-label="Button group with nested dropdown"
                        style={{ height: "42px" }}
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
                          // onBlur={() =>
                          //   utDatas?.weight <= 0 || utDatas?.weight > 3000
                          //     ? setuterrors((prev) => {
                          //         return { ...prev, weight: true };
                          //       })
                          //     : setuterrors((prev) => {
                          //         return { ...prev, weight: false };
                          //       })
                          // }
                          value={item.weight}
                          onChange={(e) => handleChange(index, e)}
                          onWheel={(e) => e.target.blur()}
                          onBlur={() => handleBlur(index, "weight")}
                          className="placeholder_style"
                          style={{
                            border: "1px solid rgb(207, 214, 223)",
                            borderTopLeftRadius: "5px",
                            borderBottomLeftRadius: "5px",
                            fontSize: "14px",
                            padding: "12px",
                            width: "330%",
                            // borderColor: uterrors.weight ? "red" : null,
                          }}
                          placeholder="Weight"
                          // value={utDatas.weight}
                          // onChange={handleChange}
                          name="weight"
                        />
                        <FormControl variant="standard">
                          {/* <InputLabel id="demo-customized-select-label">Age</InputLabel> */}
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
                                right: 3, // Adjust icon position
                              },
                              fontSize:"14px",
                              // borderColor: uterrors.weight ? "red" : null,
                            }}
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                            defaultValue="KG"
                            // value={utDatas?.weightUnit}
                            // onChange={handleWeightDropChange}
                            name="weightUnit"
                            value={item.weightUnit}
                            onChange={(e) =>
                              handleChangeWeightDropDown(index, e)
                            }
                          >
                            <MenuItem style={{fontSize:"14px"}} value="KG">KG</MenuItem>
                            <MenuItem style={{fontSize:"14px"}} value="LB">LB</MenuItem>
                          </Select>
                        </FormControl>
                        {/* <div className="btn-group" role="group" >
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{
                  background: "rgba(0,0,0,0.03)",
                  border: "1px solid grey",
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
                      </div>
                      {/* <FormHelperText
                  style={{ color: "red", fontStyle: "italic", width: "132px" }}
                >
                  {uterrors.weight
                    ? utDatas.weight > 310
                      ? "Max 3000KG"
                      : utDatas.weight <= 0
                      ? "Min 1 KG"
                      : null
                    : ""}
                </FormHelperText> */}
                      {errors[index]?.weight && (
                        <p
                          className="error-text"
                          style={{
                            fontSize: "12px",
                            color: "red",
                          }}
                        >
                          {errors[index]?.weight}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {utDatas.length > 1 && (
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      boxShadow: "unset",
                      color: "#1677FF",
                      opacity:
                        !(
                          (utDatas[utDatas.length - 1].package_type &&
                            utDatas[utDatas.length - 1].unit &&
                            utDatas[utDatas.length - 1].length &&
                            utDatas[utDatas.length - 1].width &&
                            utDatas[utDatas.length - 1].height &&
                            utDatas[utDatas.length - 1].weight) ||
                          index !== utDatas.length - 1
                        ) ||
                        (hasErrors && !!errors[index]?.package_type) ||
                        !!errors[index]?.unit ||
                        !!errors[index]?.length ||
                        !!errors[index]?.width ||
                        !!errors[index]?.height ||
                        !!errors[index]?.weight
                          ? ".5"
                          : "1",
                    }}
                    onClick={() => handleSave(index)}
                    disabled={
                      !(
                        (utDatas[utDatas.length - 1].package_type &&
                          utDatas[utDatas.length - 1].unit &&
                          utDatas[utDatas.length - 1].length &&
                          utDatas[utDatas.length - 1].width &&
                          utDatas[utDatas.length - 1].height &&
                          utDatas[utDatas.length - 1].weight) ||
                        index !== utDatas.length - 1
                      ) ||
                      (hasErrors && !!errors[index]?.package_type) ||
                      !!errors[index]?.unit ||
                      !!errors[index]?.length ||
                      !!errors[index]?.width ||
                      !!errors[index]?.height ||
                      !!errors[index]?.weight
                    }
                    // disabled={!canSave || IsError}
                  >
                    save
                  </Button>
                )}
              </div>
            </>
          ) : (
            <div
              className="d-flex justify-content-between"
              style={{
                borderRadius: "8px",
                backgroundColor: "rgba(243, 245, 247, 1)",
                padding: "12px 24px",
                margin: "16px 0px 8px 0px",
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
                <span
                  style={{
                    fontWeight: "400",
                    fontSize: "15px",
                    lineHeight: "25px",
                    letterSpacing: ".01em",
                    color: "rgba(41, 51, 61, 1)",
                  }}
                >
                  {triming(
                    item.unit,
                    item.length,
                    item.width,
                    item.height,
                    item.dimensionUnit,
                    item.weightUnit,
                    item.weight
                  )}
                  {/* : {item.unit} Units X {item.length}X{item.width}X{item.height} {item.dimensionUnit} | {item.weight}{item.weightUnit} */}
                  {/* {item.unit} Units {item.length} x  {item.width} x  {item.height} {item.dimensionUnit} | {Number.parseFloat((parseInt(item.unit) * item.weight).toFixed(3))}  {item.weightUnit} | {Number.parseFloat((parseInt(item.unit) * CMandIN(item.dimensionUnit, item.length, item.width, item.height)).toFixed(3))} CBM    */}
                </span>
              </div>
              <div>
                <img
                  src={editicon}
                  role="button"
                  alt="edit"
                  className="me-1"
                  onClick={() => handleEdit(index)}
                />
                {utDatas.length > 1 && (
                  <img
                    src={deletedicon}
                    role="button"
                    alt="delete"
                    onClick={() => handleDelete(index)}
                  />
                )}
              </div>
            </div>
          )}
          {/* <div className={`${saveddatas.length > 0 && "backgroundStyle"}`}> */}
          {/* {saveddatas.length > 0 && ( */}
          {/* <>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "19px",
                    letterSpacing: ".01em",
                    color: "rgba(24, 30, 37, 1)",
                  }}
                > */}
          {/* Load {saveddatas.length + 1} */}
          {/* </span>
                <span style={{ float: "inline-end" }}>
                  <img
                    src={deletedicon}
                    alt="delete"
                    role="button"
                    // onClick={handleCloseLoad}
                  />
                </span>
                <hr style={{ margin: "8px 0px" }} /> */}
          {/* </> */}
          {/* )} */}

          {/* {saveddatas.length > 0 && ( */}

          {/* )} */}
          {/* </div> */}
        </React.Fragment>
      ))}
      <Tooltip
        placement="top"
        title={`${
          !(
            utDatas[utDatas.length - 1].package_type &&
            utDatas[utDatas.length - 1].unit &&
            utDatas[utDatas.length - 1].length &&
            utDatas[utDatas.length - 1].width &&
            utDatas[utDatas.length - 1].height &&
            utDatas[utDatas.length - 1].weight
          )
            ? "Please add proper details for previous loads"
            : disabled
            ? "Your total load exceeds 15CBM"
            : "Add Another Load"
        } `}

        // trigger={IsError || (!canAdd && "hover")}
      >
        <Button
          style={{
            border: "none",
            background: "none",
            // opacity: !CanField ? "1" : canAdd && !IsError ? "1" : ".5",
            opacity:
              !(
                utDatas[utDatas.length - 1].package_type &&
                utDatas[utDatas.length - 1].unit &&
                utDatas[utDatas.length - 1].length &&
                utDatas[utDatas.length - 1].width &&
                utDatas[utDatas.length - 1].height &&
                utDatas[utDatas.length - 1].weight
              ) ||
              disabled ||
              hasErrors
                ? ".5"
                : "1",
            boxShadow: "unset",
          }}
          // onClick={handleAddLoad}
          // disabled={!CanField ? false : !canAdd || IsError}
          disabled={
            !(
              utDatas[utDatas.length - 1].package_type &&
              utDatas[utDatas.length - 1].unit &&
              utDatas[utDatas.length - 1].length &&
              utDatas[utDatas.length - 1].width &&
              utDatas[utDatas.length - 1].height &&
              utDatas[utDatas.length - 1].weight
            ) ||
            disabled ||
            hasErrors
          }
          onClick={handleAddLoad}
        >
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "13px",
              lineHeight: "19px",
              letterSpacing: ".01em",
              color: "#1677FF",
            }}
          >
            + Add Another Load
          </Typography>
        </Button>
      </Tooltip>
      <div className="mb-3 d-flex justify-content-between">
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
                  }}
                />
              }
              label="Export"
              labelPlacement="right"
            />
          </RadioGroup>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button className="confirm" onClick={handleUtypeSubmit}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default UnitType;
