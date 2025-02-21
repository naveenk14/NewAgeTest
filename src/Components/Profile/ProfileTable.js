import React, { useState } from 'react'
import './ProfileTable.css'
import { Card, Drawer } from 'antd'
import { Link } from 'react-router-dom';
// import Modal from '../ShipmentDetails/ShipmentTable/Modal/Modal';
// import NotificationManagement from './NotificationManagement/NotificationManagement';

const ProfileTable = ({tabListNoTitle,contentListNoTitle,setOpen}) => {

    const [activeTabKey, setActiveTabKey] = useState('KeyAccount');
        const onTab2Change = (key) => {
                setActiveTabKey(key);
    };

    //This is for modal
    // const [open,setOpen] = useState(false)

    //This is for notification drawer
    // const [open, setOpen] = useState(false);
    // const [placement, setPlacement] = useState('right');
    // const onClose = () => {
    //   setOpen(false);
    // };


  return (
    <Card
          style={{
            width:"100%",
            boxShadow: "0px 6px 18px 0px #0000001A",
          }}
          className='container mx-auto p-0 mb-4 profile_table_section'
          tabList={tabListNoTitle}
          activeTabKey={activeTabKey}
          onTabChange={onTab2Change}
          tabProps={{
          size: 'middle',
          }}
        >
            {/* <div style={{overflow:"auto",maxHeight:"500px"}}> */}
              {contentListNoTitle[activeTabKey]}
            {/* </div> */}
            {/* <Link 
                onClick={()=>setOpen(true)}
                style={{
                    padding:"14.5px 19.5px",
                    backgroundColor:"#D40E0E",
                    fontWeight:"700",
                    fontSize:"12px",
                    lineHeight:"14.4px",
                    letterSpacing:"-0.02em",
                    borderRadius:"10px",
                    textDecoration:"none",
                    color:"#FFFFFF",
                    position:"absolute",
                    top:"6px",
                    right:"22px", 
                }}
            >
                Notification Management
            </Link> */}
            {/* <Modal isOpen={open} width={"80vw"}>
                  <NotificationManagement setOpen={setOpen} />
            </Modal> */}
            {/* <Drawer
              title="Basic Drawer"
              placement={placement}
              closable={false}
              onClose={onClose}
              open={open}
              key={placement}
            >
              <NotificationManagement setOpen={setOpen} />
            </Drawer> */}
            
    </Card>
  )
}

export default ProfileTable