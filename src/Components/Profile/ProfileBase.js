import { RightOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Cascader, Dropdown } from "antd";
import React, { useEffect, useState, useRef } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdChatboxes } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import "./ProfileBase.css";
import { Link } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import ProfileTable from "./ProfileTable";
import ConnectedAccounts from "./KeyAccount/KeyAccountManagers";
import Transactions from "./Transactions/Transactions";
import Password from "./Password/Password";
import ReferEarn from "./ReferEarn/ReferEarn";
import Addresses from "./SavedAddresses/Addresses";
import NotificationManagement from "./NotificationManagement/NotificationManagement";
import CreatePasswordModal from "./Modals/CreatePasswordModal";
import EditProfileModal from "./Modals/EditProfileModal";
import KeyAccountManagers from "./KeyAccount/KeyAccountManagers";
import { useDispatch, useSelector } from "react-redux";
import { profileRequest } from "../../Redux/Actions/ProfileAction";

const ProfileBase = () => {


  //This is for call profile_data api
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileRequest());
  }, []);

  const profileData = useSelector((state) => state.ProfileData);
  console.log(profileData)

  //This is for EditprofModal
  const [openEditModal, setOpenEditModal] = useState(false);

  const tabListNoTitle = [
    {
      key: "KeyAccount",
      label: "Key Account Managers",
    },
    // {
    //   key: "SavedAddresses",
    //   label: "Saved Addresses",
    // },
    // {
    //   key: "Transactions",
    //   label: "Transactions",
    // },
    {
      key: "Password",
      label: "Password",
    },
    // {
    //   key: "ReferEarn",
    //   label: "Refer & Earn",
    // },
  ];

  const steps = [
    {
      step: "Booking Created",
      body: "Booking done on 11/05/2023 at 02:20 PM",
    },
    {
      step: "Cargo Picked up",
      body: "Cargo will be Picked up  on 13/05/2023.",
    },
    {
      step: "Cargo Received",
      body: "Cargo will be ready for shipping on 15/05/2023",
    },
    {
      step: "Cargo Picked up",
      body: "Cargo will be Picked up  on 13/05/2023.",
    },
    {
      step: "Cargo Received",
      body: "Cargo will be ready for shipping on 15/05/2023",
    },
    {
      step: "Cargo Received",
      body: "Cargo will be ready for shipping on 15/05/2023",
    },
  ];

  const contentListNoTitle = {
    KeyAccount: <KeyAccountManagers profileData={profileData} />,
    // SavedAddresses: <Addresses />,
    // Transactions: <Transactions />,
    Password: <Password />,
    // ReferEarn: <ReferEarn />,
  };

  const items = [
    {
      key: "1",
      label: (
        <Button
          type="link"
          style={{ color: "black", textDecoration: "none" }}
          icon={<IoMdChatboxes size={20} />}
        >
          <span className="ms-2">Start Chat</span>
        </Button>
      ),
    },
    {
      key: "2",
      label: (
        <Button
          type="link"
          style={{ color: "black", textDecoration: "none" }}
          icon={<FaPhoneVolume size={17} />}
        >
          <span className="ms-2">Request Callback</span>
        </Button>
      ),
    },
    {
      key: "3",
      label: (
        <Button
          type="link"
          style={{ color: "black", textDecoration: "none" }}
          icon={<IoMail size={20} />}
        >
          <span className="ms-2">Email Us</span>
        </Button>
      ),
    },
  ];

  //This is for Notification Drawer
  const [open, setOpen] = useState(false);
  const modalref = useRef();
  console.log(modalref);

  useEffect(() => {
    const handler = (e) => {
      if (!modalref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div
      className="profile_section container-fluid p-0"
      style={{
        marginTop: "4.7rem",
        backgroundColor: "#F3F5F7",
        minHeight: "1200px",
      }}
    >
      <div className="black_box container-fluid"></div>
      <div className="profile_container">
        <div
          className="row profile_title_row"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <div className="profile_title" style={{ marginBottom: "4px" }}>
            <p className="m-0 text-white">Profile</p>
          </div>
          <div className="breadCrumb d-flex justify-content-between align-items-center">
            <Breadcrumb
              separator={
                <RightOutlined style={{ fontSize: "11px", color: "#ACB8C4" }} />
              }
              items={[
                {
                  title: (
                    <Link
                      style={{
                        color: "#ACB8C4",
                        fontWeight: "400",
                        fontSize: "14px",
                        letterSpacing: ".01em",
                        textDecoration: "none",
                      }}
                      to="/shipment"
                    >
                      Home
                    </Link>
                  ),
                },
                {
                  title: "Profile",
                },
              ]}
              className="text-white"
            />
            {/* <Dropdown
              menu={{
                items,
              }}
              placement="bottomRight"
              arrow
              trigger={['click']}
            >
              <p className="m-0" role="button">Need Help?</p>
            </Dropdown> */}
          </div>
        </div>
        <div className="row profile_header">
          <ProfileHeader setOpenEditModal={setOpenEditModal}  profileData={profileData} />
          <ProfileTable
            contentListNoTitle={contentListNoTitle}
            tabListNoTitle={tabListNoTitle}
            setOpen={setOpen}
          />
          {/* <NotificationManagement open={open} /> */}
        </div>
      </div>
      <NotificationManagement open={open} modalref={modalref} />
      <EditProfileModal
        open={openEditModal}
        profileData={profileData}
        close={() => setOpenEditModal(false)}
      />
    </div>
  );
};

export default ProfileBase;
