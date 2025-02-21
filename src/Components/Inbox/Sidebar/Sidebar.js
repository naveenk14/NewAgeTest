import React from 'react'
import Union from "../../../assets/Union.svg";
import Shape from "../../../assets/Shape.svg";

const Sidebar = ({messages, setMessages, notification, setNotification}) => {
  return (
    <>
         <div className="col-2 sidebar">
        <div className="pt-5">
          <div
            className={`d-flex Notifiction mt-5 ${
              notification ? "active" : ""
            }`}
            onClick={() => {
              setMessages(false);
              setNotification(true);
            }}
          >
            <img
              src={Union}
              alt=""
              className="bellicon"
              style={{ padding: 0 }}
            />
            <div className="Notificationstyle">
              <p>Notification</p>
            </div>
            <div className="Notifictionp">5</div>
          </div>
        </div>
        <div
          className={`d-flex Notifiction mt-2 ${messages ? "active" : ""}`}
          onClick={() => {
            setMessages(true);
            setNotification(false);
          }}
        >
          <img src={Shape} alt="" className="bellicon" />
          <div className="Notificationstyle">
            <p>Messages</p>
          </div>
          <div className="Notifictionp">10</div>
        </div>
      </div>
    </>
  )
}

export default Sidebar