import React, {useState} from "react";
import ShipmentCard from "../ShipmentBooking/ShipmentCard";
import Invoice from "../Invoice/Invoice";
import UpcomingSailings from "./Upcoming/UpcomingSailings";
import HomeCalendar from "./Calendar";
import Shipments from "./ShipmentDetails/Shipments";

const Dashboard = () => {
  

  return (
    <>
      <div className="container-fluid p-5 mt-2">
        {/* <div className="row">
          <div className="col-lg-12 mt-2">
            <ShipmentCard />
          </div>
        </div> */}
        <div className="row">
          <div className="col-lg-12 ">
            <Shipments />
          </div>
        </div>
       
        {/* <div className="row">
          <div className="col-lg-12">
            <HomeCalendar />
          </div>
          </div> */}
        <div className="row">
          <div className="col-lg-12 ">
            <UpcomingSailings />
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-12">
            <Invoice />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
