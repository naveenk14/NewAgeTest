import { Masonry } from "@mui/lab";
import "./NotificationManagement.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
  Typography
} from "@mui/material";
import { Card, Checkbox } from "antd";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { forwardRef } from "react";
import Paper from "@mui/material/Paper";

const NotificationManagement = forwardRef(({ open,modalref},ref) => {

  //This is for accordian
  const NotifyData = [
    {
      header:"Booking",
      checkboxes:["Booking Confirmed","Sailing Scheduled","Cargo pickedup","Packing list updated"]

    },
    {
      header:"Shipment Status",
      checkboxes:["Booking Confirmed","Sailing Scheduled","Cargo pickedup","Packing list updated"]

    },
    {
      header:"Reminders",
      checkboxes:["Booking Confirmed","Sailing Scheduled","Cargo pickedup","Packing list updated"]

    },
    {
      header:"Exceptions",
      checkboxes:["Booking Confirmed","Sailing Scheduled","Cargo pickedup","Packing list updated"]

    },
    {
      header:"Transactions",
      checkboxes:["Booking Confirmed","Sailing Scheduled","Cargo pickedup","Packing list updated"]

    },
    {
      header:"Documents",
      checkboxes:["Booking Confirmed","Sailing Scheduled","Cargo pickedup","Packing list updated"]

    },
    {
      header:"Customs",
      checkboxes:["Booking Confirmed","Sailing Scheduled","Cargo pickedup","Packing list updated"]

    },
  ];

  const StyledAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    color: theme.palette.text.secondary,
  }));

  return (
          <Card
            ref={modalref}
            className={`${
              open ? "notification_drawer_active" : "notification_drawer"
            } container mx-auto p-0 mb-4 profile_table_section notify_drawer`}
            style={{
              width: "86%",
              position: "absolute",
              top: "55px",
              boxShadow: "0px 6px 18px 0px #0000001A",
              minWidth:"1256px"
            }}
          tabList={[
            {
              key: "Notification Manager",
              tab: <Typography sx={{
                fontWeight:"600",
                lineheight: "22px",
                letterSpacing: ".01em"
            }}
            >Notification Manager</Typography>,
            },
          ]}
        //   activeTabKey={activeTabKey}
        //   onTabChange={onTab2Change}
        tabProps={{
          size: "middle",
        }}
      >
        {/* <div style={{overflow:"auto",maxHeight:"500px"}}>
                {contentListNoTitle[activeTabKey]}
              </div> */}

        

        <div className="p-5">
          <Masonry columns={3} spacing={2}>
            {NotifyData.map((item, index) => (
              <Paper key={index}>
                <StyledAccordion >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{
                      fontWeight:"600",
                      lineheight: "22px",
                      letterSpacing: ".01em"
                  }}>
                        {item.header}</Typography>    
                  </AccordionSummary>
                  <AccordionDetails className="d-flex flex-column">
                    {item.checkboxes.map((item,index)=> <Checkbox key={index}>{item}</Checkbox>)}
                  </AccordionDetails>
                </StyledAccordion>
              </Paper>
            ))}
          </Masonry>
        </div>
      </Card>
  );
});

export default NotificationManagement;
