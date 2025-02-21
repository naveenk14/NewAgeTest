import React from "react";
import "./CalendarEvent.css";
import { Typography, IconButton } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';

const CalendarEvent = () => {
  const [ascending, setAscending] = React.useState(true);

  // Function to toggle sorting order
  const toggleSortOrder = () => {
    setAscending((prevAscending) => !prevAscending);
  };

  return (
    <>
      <div className="w-100 shadow  mt-1 " style={{ height: "382px", minWidth:'501px', borderRadius:'8px', overflowY:'auto'}}>
        <div style={{ padding: "18px" }}>
          <table className="table">
            <thead style={{  backgroundColor: '#F8FAFC' }}>
              <th style={{  backgroundColor: '#F8FAFC' }}>
                <Typography sx={{ fontSize: "13px", fontWeight: "500",backgroundColor:'#F8FAFC' }}>
                  Shipment Id{" "}
                  {ascending ? (
                      <CodeIcon onClick={toggleSortOrder} sx={{fontSize:'12px', transform:'rotate(90deg)', color:'#94A2B2', }}/>
                  ) : (
                      <CodeIcon onClick={toggleSortOrder} sx={{fontSize:'12px', transform:'rotate(90deg)', color:'#94A2B2'}}/>
                  )}
                </Typography>
              </th>
              <th>
                {" "}
                <Typography sx={{ fontSize: "13px", fontWeight: "500",backgroundColor:'#F8FAFC' }}>
                  Status
                </Typography>
              </th>
            </thead>
            <tbody >
              <tr style={{borderBottom:'1px solid #F3F5F7'}}>
                <td >
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "rgba(24, 30, 37, 1)",
                      lineHeight:'19px'
                    }}
                  >
                    1208930007 LCL
                  </div>
                  <Typography
                    style={{
                      fontSize: "12px",
                      color: "rgba(103, 120, 142, 1)",
                      lineHeight:'19px'
                    }}
                  >
                    Nhava Sheva - Jebel Ali
                  </Typography>
                </td>
                <td>
                  <div
                    style={{
                      fontWeight: "400",
                      fontSize: "13px",
                      width: "94px",
                      padding: "4px 8px",
                      lineHeight:'19px'
                    }}
                    className="event-status"
                  >
                    Arriving Early
                  </div>
                  <Typography
                    style={{
                      fontSize: "13px",
                      color: "rgba(103, 120, 142, 1)",
                      lineHeight:'19px'
                    }}
                  >
                    ETA 20-May-2024
                    <span className="px-1"
                      style={{
                        color: "#F01E1E",
                        fontWeight: "400",
                        fontSize: "13px",
                        lineHeight:'19px'
                      }}
                    >
                      (+2 Days)
                    </span>
                  </Typography>
                </td>
              </tr>
              <tr style={{borderBottom:'1px solid #F3F5F7'}}>
                <td >
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "rgba(24, 30, 37, 1)",
                      lineHeight:'19px'
                    }}
                  >
                    1208930007 LCL
                  </div>
                  <Typography
                    style={{
                      fontSize: "12px",
                      color: "rgba(103, 120, 142, 1)",
                      lineHeight:'19px'
                    }}
                  >
                    Nhava Sheva - Jebel Ali
                  </Typography>
                </td>
                <td>
                  <div
                    style={{
                      fontWeight: "400",
                      fontSize: "13px",
                      width: "94px",
                      padding: "4px 8px",
                      lineHeight:'19px'
                    }}
                    className="event-status"
                  >
                    Arriving Early
                  </div>
                  <Typography
                    style={{
                      fontSize: "13px",
                      color: "rgba(103, 120, 142, 1)",
                      lineHeight:'19px'
                    }}
                  >
                    ETA 20-May-2024
                    <span className="px-1"
                      style={{
                        color: "#F01E1E",
                        fontWeight: "400",
                        fontSize: "13px",
                        lineHeight:'19px'
                      }}
                    >
                      (+2 Days)
                    </span>
                  </Typography>
                </td>
              </tr>
              <tr style={{borderBottom:'1px solid #F3F5F7'}}>
                <td >
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "rgba(24, 30, 37, 1)",
                      lineHeight:'19px'
                    }}
                  >
                    1208930007 LCL
                  </div>
                  <Typography
                    style={{
                      fontSize: "12px",
                      color: "rgba(103, 120, 142, 1)",
                      lineHeight:'19px'
                    }}
                  >
                    Nhava Sheva - Jebel Ali
                  </Typography>
                </td>
                <td>
                  <div
                    style={{
                      fontWeight: "400",
                      fontSize: "13px",
                      width: "94px",
                      padding: "4px 8px",
                      lineHeight:'19px'
                    }}
                    className="event-status"
                  >
                    Arriving Early
                  </div>
                  <Typography
                    style={{
                      fontSize: "13px",
                      color: "rgba(103, 120, 142, 1)",
                      lineHeight:'19px'
                    }}
                  >
                    ETA 20-May-2024
                    <span className="px-1"
                      style={{
                        color: "#F01E1E",
                        fontWeight: "400",
                        fontSize: "13px",
                        lineHeight:'19px'
                      }}
                    >
                      (+2 Days)
                    </span>
                  </Typography>
                </td>
              </tr>
              <tr style={{borderBottom:'1px solid #F3F5F7'}}>
                <td>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "rgba(24, 30, 37, 1)",
                      lineHeight:'19px'
                    }}
                  >
                    1208930007 LCL
                  </div>
                  <Typography
                    style={{
                      fontSize: "12px",
                      color: "rgba(103, 120, 142, 1)",
                      lineHeight:'19px'
                    }}
                  >
                    Nhava Sheva - Jebel Ali
                  </Typography>
                </td>
                <td>
                  <div
                    style={{
                      fontWeight: "400",
                      fontSize: "13px",
                      width: "94px",
                      padding: "4px 8px",
                      lineHeight:'19px'
                    }}
                    className="event-status"
                  >
                    Arriving Early
                  </div>
                  <Typography
                    style={{
                      fontSize: "13px",
                      color: "rgba(103, 120, 142, 1)",
                      lineHeight:'19px'
                    }}
                  >
                    ETA 20-May-2024
                    <span className="px-1"
                      style={{
                        color: "rgba(44, 160, 44, 1)",
                        fontWeight: "400",
                        fontSize: "13px",
                        lineHeight:'19px'
                      }}
                    >
                      (-2 Days)
                    </span>
                  </Typography>
                </td>
              </tr>
              <tr style={{borderBottom:'1px solid #F3F5F7'}}>
                <td>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "rgba(24, 30, 37, 1)",
                      lineHeight:'19px'
                    }}
                  >
                    1208930007 LCL
                  </div>
                  <Typography
                    style={{
                      fontSize: "12px",
                      color: "rgba(103, 120, 142, 1)",
                      lineHeight:'19px'

                    }}
                  >
                    Nhava Sheva - Jebel Ali
                  </Typography>
                </td>
                <td>
                  <div
                    style={{
                      fontWeight: "400",
                      fontSize: "13px",
                      width: "94px",
                      padding: "4px 8px",
                      lineHeight:'19px'

                    }}
                    className="event-status"
                  >
                    Arriving Early
                  </div>
                  <Typography
                    style={{
                      fontSize: "13px",
                      color: "rgba(103, 120, 142, 1)",
                      lineHeight:'19px'

                    }}
                  >
                    ETA 20-May-2024
                    <span className="px-1"
                      style={{
                        color: "rgba(44, 160, 44, 1)",
                        fontWeight: "400",
                        fontSize: "13px",
                      lineHeight:'19px'

                      }}
                    >
                      (-2 Days)
                    </span>
                  </Typography>
                </td>
              </tr>
              <tr style={{borderBottom:'1px solid #F3F5F7'}}>
                <td>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      color: "rgba(24, 30, 37, 1)",
                      lineHeight:'19px'

                    }}
                  >
                    1208930007 LCL
                  </div>
                  <Typography
                    style={{
                      fontSize: "12px",
                      color: "rgba(103, 120, 142, 1)",
                      lineHeight:'19px'

                    }}
                  >
                    Nhava Sheva - Jebel Ali
                  </Typography>
                </td>
                <td>
                  <div
                    style={{
                      fontWeight: "400",
                      fontSize: "13px",
                      width: "94px",
                      padding: "4px 8px",
                      lineHeight:'19px'

                    }}
                    className="event-status"
                  >
                    Arriving Early
                  </div>
                  <Typography
                    style={{
                      fontSize: "13px",
                      color: "rgba(103, 120, 142, 1)",
                      lineHeight:'19px'

                    }}
                  >
                    ETA 20-May-2024
                    <span className="px-1"
                      style={{
                        color: "#F01E1E",
                        fontWeight: "400",
                        fontSize: "13px",
                      lineHeight:'19px'

                      }}
                    >
                      (+2 Days)
                    </span>
                  </Typography>
                </td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CalendarEvent;
