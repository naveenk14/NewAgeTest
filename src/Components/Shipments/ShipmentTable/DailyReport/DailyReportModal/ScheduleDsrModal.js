import {
  Checkbox,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  RadioGroup,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { VscClose } from "react-icons/vsc";
import Radio from "@mui/material/Radio";
import { red, brown } from "@mui/material/colors";
import ChipsSchedule from "./ChipsSchedule";
import { useDispatch, useSelector } from "react-redux";
import { DsrScheduleRequest } from "../../../../../Redux/Actions/DsrScheduleAction";
import DsrSuccessModal from "./DsrSuccessModal";
import DsrUnsubscribeModal from "./DsrUnsubscribeModal";
import { json } from "react-router-dom";

const ScheduleDsrModal = ({ open, close, setSchedulemodal }) => {
  const dispatch = useDispatch();
  const Profileusertoken = useSelector(
    (state) => state.ProfileData?.profileData?.usertoken
  );
  const [selected, setSelected] = useState(JSON.parse(localStorage.getItem("dsremail")) || []);
  const [error, setError] = useState({
    email: false,
    radiochecked: false,
  });
  const [openSuccess,setopenSuccess] = useState(false)
  const [openUnsubscribe,setopenUnsubscribe] = useState(false)
  const [forminputs, setforminputs] = useState(JSON.parse(localStorage.getItem("dsrdetails")) || {
    schedulebasis: "",
    weeklydates: {
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      sun: false,
    },
  });
  const [status, setStatus] = useState(JSON.parse(localStorage.getItem("dsrstatus")) || {
    booked: true,
    intransit: true,
    closed: true,
    arrived: true,
  });
  

  console.log(forminputs)
  console.log(status)

  const handleDays = (e) => {
    setforminputs((prev) => {
      console.log(prev);
      return {
        ...prev,
        weeklydates: {
          ...prev.weeklydates,
          [e.target.name]: e.target.checked,
        },
      };
    });
  };

  const handleStatus = (e) => {
    console.log(e.target.checked);
    setStatus((prev) => {
      return { ...prev, [e.target.value]: e.target.checked };
    });
  };

  // const payload={
  //   sreport_id:"",
  //   spreset_name:"TEST",
  //   sl_no:"",
  //   link_type:"Link",
  //   sDaily:"Yes",
  //   sWeekly:"",
  //   sMonthly:"",
  //   sEmail:"rajasekar@newage-global.com"
  // }
  console.log(forminputs);

  //This function is for trigger an Update Action
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("selected", selected);
    // console.log("forminputs", forminputs);
    // console.log("status", status);
    // const sselectedcolumn = selected.toString();
    // console.log(sselectedcolumn);
    if (!selected.length) {
      setError((prev) => {
        return { ...prev, email: true };
      });
    } else {
      setError((prev) => {
        return { ...prev, email: false };
      });
    }
    if (!forminputs.schedulebasis) {
      setError((prev) => {
        return { ...prev, radiochecked: true };
      });
    } else {
      setError((prev) => {
        return { ...prev, radiochecked: false };
      });
    }
    const payload = {
      sreport_id: "",
      spreset_name: "TEST",
      sl_no: Profileusertoken,
      link_type: "Link",
      sDaily: forminputs.schedulebasis === "Daily" ? "Yes" : "",
      sWeekly: forminputs.schedulebasis === "Weekly" ? "Yes" : "",
      sMonthly: "",
      sEmail: selected.toString(),
    };
    if (selected.length && forminputs.schedulebasis) {
      dispatch(DsrScheduleRequest({ payload }));
      setSchedulemodal(false)
      setopenSuccess(true)
      // const details = {
      //   schedulebasis: "",
      //   weeklydates: {
      //     mon: false,
      //     tue: false,
      //     wed: false,
      //     thu: false,
      //     fri: false,
      //     sat: false,
      //     sun: false,
      //   },
      // }
      // const status ={
      //   booked: false,
      //   intransit: false,
      //   closed: false,
      //   arrived: false,
      // }
      localStorage.setItem("dsrdetails",JSON.stringify(forminputs))
      localStorage.setItem("dsrstatus",JSON.stringify(status))
      localStorage.setItem("dsremail",JSON.stringify(selected))
    }
  };

  //This function is trigger an Unsubscribe action

  const handleUnsubscribe = (e) => {
    e.preventDefault();
    if (!selected.length) {
      setError((prev) => {
        return { ...prev, email: true };
      });
    } else {
      setError((prev) => {
        return { ...prev, email: false };
      });
    }
    if (!forminputs.schedulebasis) {
      setError((prev) => {
        return { ...prev, radiochecked: true };
      });
    } else {
      setError((prev) => {
        return { ...prev, radiochecked: false };
      });
    }
    const payload = {
      sreport_id: "",
      spreset_name: "TEST",
      sl_no: Profileusertoken,
      link_type: "Link",
      sDaily: "",
      sWeekly: "",
      sMonthly: "",
      sEmail: selected.toString(),
    };
    if (selected.length && forminputs.schedulebasis) {
      dispatch(DsrScheduleRequest({ payload }));
      setSchedulemodal(false)
      setopenUnsubscribe(true)
      setSelected([])
      setforminputs({})
      setStatus({
        booked: true,
        intransit: true,
        closed: true,
        arrived: true,
      })

      localStorage.removeItem("dsrdetails")
      localStorage.removeItem("dsrstatus")
      localStorage.removeItem("dsremail")
    }
  };

  return (
    <>
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={true}
      maxWidth="sm"
      className="schedule_header"
    >
      <DialogTitle id="alert-dialog-title">
        <p
          className="p-0"
          style={{
            fontWeight: "500",
            fontSize: "19px",
            lineHeight: "24px",
            letterSpacing: ".01em",
            color: "#181E25",
          }}
        >
          Schedule DSR
        </p>
        {/* <VscClose size={22} color='red' onClick={close} style={{position:"absolute",top:"0px",right:"0px",cursor:"pointer"}} /> */}
      </DialogTitle>
      <DialogContent>
        {/* <p className='m-0'
            style={{
              fontWeight:"500",
              fontSize:"13px",
              lineHeight:"24px",
              letterSpacing:".01em",
              // padding:"0px 10px",
              color:"#6666"
            }}
          >Email List</p> */}
        <form>
          <ChipsSchedule
            selected={selected}
            setSelected={setSelected}
            errorEmail={error}
          />
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(e) =>
                setforminputs((prev) => {
                  return { ...prev, schedulebasis: e.target.value };
                })
              }
            >
              <FormControlLabel
                value="Daily"
                control={
                  <Radio
                    name="schedulebasis"
                    checked={forminputs?.schedulebasis === "Daily"}
                    value="Daily"
                    // onChange={(e)=>setforminputs((prev)=>{return {...prev,schedulebasis:e.target.value}})}
                    sx={{
                      color: brown[400],
                      "&.Mui-checked": {
                        color: "#0DA3DE",
                      },
                    }}
                  />
                }
                label="Daily"
              />
              <FormControlLabel
                value="weekly"
                control={
                  <Radio
                    name="schedulebasis"
                    checked={forminputs?.schedulebasis === "Weekly"}
                    value="Weekly"
                    // onChange={(e)=>setforminputs((prev)=>{return {...prev,schedulebasis:e.target.value}})}
                    sx={{
                      color: brown[400],
                      "&.Mui-checked": {
                        color: "#0DA3DE",
                      },
                    }}
                  />
                }
                label="Weekly"
              />
            </RadioGroup>
            {error.radiochecked && (
              <FormHelperText style={{ color: "#d32f2f", marginLeft: "0px" }}>
                Please Select Daily / Weekly
              </FormHelperText>
            )}
            {forminputs?.schedulebasis === "Weekly" && (
              <div className="checkbox">
                {/*<Checkbox control={<Checkbox />} label="Booked" style={{color:"red"}}/> */}
                <FormControlLabel
                  value="end"
                  control={
                    <Checkbox
                      value={forminputs?.weeklydates?.mon}
                      name="mon"
                      onChange={handleDays}
                      sx={{
                        color: brown[400],
                        "&.Mui-checked": {
                          color: "#0DA3DE",
                        },
                      }}
                    />
                  }
                  label="Mon"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  // checked={true}
                  control={
                    <Checkbox
                      checked={forminputs?.weeklydates?.tue}
                      name="tue"
                      onChange={handleDays}
                      sx={{
                        color: brown[400],
                        "&.Mui-checked": {
                          color: "#0DA3DE",
                        },
                      }}
                    />
                  }
                  label="Tue"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={
                    <Checkbox
                      checked={forminputs?.weeklydates?.wed}
                      name="wed"
                      value="wed"
                      onChange={handleDays}
                      sx={{
                        color: brown[400],
                        "&.Mui-checked": {
                          color: "#0DA3DE",
                        },
                      }}
                    />
                  }
                  label="Wed"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={
                    <Checkbox
                      checked={forminputs?.weeklydates?.thu}
                      name="thu"
                      value="thu"
                      onChange={handleDays}
                      sx={{
                        color: brown[400],
                        "&.Mui-checked": {
                          color: "#0DA3DE",
                        },
                      }}
                    />
                  }
                  label="Thu"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={
                    <Checkbox
                      checked={forminputs?.weeklydates?.fri}
                      name="fri"
                      value="fri"
                      onChange={handleDays}
                      sx={{
                        color: brown[400],
                        "&.Mui-checked": {
                          color: "#0DA3DE",
                        },
                      }}
                    />
                  }
                  label="Fri"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={
                    <Checkbox
                      checked={forminputs?.weeklydates?.sat}
                      name="sat"
                      value="sat"
                      onChange={handleDays}
                      sx={{
                        color: brown[400],
                        "&.Mui-checked": {
                          color: "#0DA3DE",
                        },
                      }}
                    />
                  }
                  label="Sat"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={
                    <Checkbox
                    
                      checked={forminputs?.weeklydates?.sun}
                      name="sun"
                      value="sun"
                      onChange={handleDays}
                      sx={{
                        color: brown[400],
                        "&.Mui-checked": {
                          color: "#0DA3DE",
                        },
                      }}
                    />
                  }
                  label="Sun"
                  labelPlacement="end"
                />
              </div>
            )}
            <div className="checkbox">
              {/*<Checkbox control={<Checkbox />} label="Booked" style={{color:"red"}}/> */}
              <FormControlLabel
                value="end"
                control={
                  <Checkbox
                    checked={status?.booked}
                    name="booked"
                    value="booked"
                    onChange={handleStatus}
                    sx={{
                      color: brown[400],
                      "&.Mui-checked": {
                        color: "#0DA3DE",
                      },
                    }}
                  />
                }
                label="Booked"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={
                  <Checkbox
                    checked={status?.intransit}
                    name="intransit"
                    value="intransit"
                    onChange={handleStatus}
                    sx={{
                      color: brown[400],
                      "&.Mui-checked": {
                        color: "#0DA3DE",
                      },
                    }}
                  />
                }
                label="In Transit"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={
                  <Checkbox
                    checked={status?.closed}
                    name="closed"
                    value="closed"
                    onChange={handleStatus}
                    sx={{
                      color: brown[400],
                      "&.Mui-checked": {
                        color: "#0DA3DE",
                      },
                    }}
                  />
                }
                label="Closed"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={
                  <Checkbox
                    checked={status?.arrived}
                    name="arrived"
                    value="arrived"
                    onChange={handleStatus}
                    sx={{
                      color: brown[400],
                      "&.Mui-checked": {
                        color: "#0DA3DE",
                      },
                    }}
                  />
                }
                label="Arrived"
                labelPlacement="end"
              />
            </div>
          </FormControl>
          {/* </DialogContent>
        // <DialogActions> */}
          <div className="button_propety d-flex mt-4">
            <button
              className="dsr_btn me-5"
              style={{
                padding: "5px 22px",
                border: "2px solid #0DA3DE",
                backgroundColor: "#ffff",
                color: "#0DA3DE",
                borderRadius: "7px",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "23px",
                letterSpacing: ".01em",
              }}
              onClick={handleUnsubscribe}
            >
              Unsubscribe DSR
            </button>
            <button
              onClick={(e)=>{
                return e.preventDefault(),
                setSchedulemodal(false)
              }}
              style={{
                padding: "5px 26px",
                border: "2px solid #0DA3DE",
                backgroundColor: "#ffff",
                color: "#0DA3DE",
                borderRadius: "7px",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "23px",
                letterSpacing: ".01em",
                marginRight: "10px",
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              style={{
                padding: "5px 26px",
                backgroundColor: "#0DA3DE",
                color: "#fff",
                border: "2px solid #0DA3DE",
                borderRadius: "7px",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "23px",
                letterSpacing: ".01em",
              }}
            >
              Update
            </button>
            {/* <Form /> */}
          </div>
          {/* </DialogActions> */}
        </form>
      </DialogContent>
    </Dialog>
    <DsrSuccessModal open={openSuccess} close={()=>setopenSuccess(false)} setopenSuccess={setopenSuccess} />
    <DsrUnsubscribeModal open={openUnsubscribe} close={()=>setopenUnsubscribe(false)} setopenUnsubscribe={setopenUnsubscribe} />
    </>
  );
};

export default ScheduleDsrModal;
