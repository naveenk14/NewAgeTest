import React, { useState } from "react";
import { Menu } from "antd";
import './Inbox.css'
import Sidebar from "./Sidebar/Sidebar";
import AllMessages from "./Messages/AllMessages";
import Notifications from "./Notifications/Notifications";

function Inbox() {
  const [notification, setNotification] = useState(true);
  const [messages, setMessages] = useState(false);
  const [allmsg, setAllmsg] = useState(true);
  const [unread, setUnread] = useState(false);

  const menu = (
    <Menu>
      <Menu.Item key="1">Last 7 days</Menu.Item>
      <Menu.Item key="2">Last 30 days</Menu.Item>
      <Menu.Item key="3">Last year</Menu.Item>
    </Menu>
  );
  return (
    <div className="row me-0" style={{marginTop:"4rem"}}>
        <Sidebar 
            messages={messages}
            setMessages={setMessages}
            notification={notification}
            setNotification={setNotification}
        />
        <Notifications 
            menu ={menu}
            notification ={notification}
        />
        <AllMessages
            allmsg ={allmsg}
            setAllmsg ={setAllmsg}
            unread ={unread}
            setUnread ={setUnread}
            messages ={messages}
            menu ={menu}
        />
    </div>
  );
}

export default Inbox;