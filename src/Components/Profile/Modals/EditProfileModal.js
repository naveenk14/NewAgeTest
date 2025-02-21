import React, { useState } from "react";
import "./EditProfileModal.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import {
  Button,
  Cascader,
  Checkbox,
  Flex,
  Form,
  Input,
  InputNumber,
  Select,
} from "antd";
import { GoLock } from "react-icons/go";
import user from "../../../assets/Name.svg";
import email from "../../../assets/Email.svg";
import office from '../../../assets/Company Name.svg'
import { CaretDownOutlined } from "@ant-design/icons";
import { countriesphonecode } from "./CountryPhoneCode";
import { countriesOnly } from "./Countries";
import { CloseFullscreen } from "@mui/icons-material";
import { countries_code, currencies } from "./CurrencyDatas";
import { VscClose } from "react-icons/vsc";

const EditProfileModal = ({ open, close, profileData }) => {

  const userDetails = profileData?.profileData
  console.log(userDetails)

  //currencies
  // const currencies = require('currencies.json');
  // console.log(currencies)

  //This is Custom InputwithCheck

  const InputWithCheck = ({ label }) => {
    return (
      <>
        <p className="m-0" style={{ fontWeight: "500" }}>
          {label}
        </p>
        <Checkbox
          style={{
            fontWeight: "400",
            letterSpacing: ".01em",
            fontSize: "13px",
          }}
          checked={true}
        >
          Get updates here
        </Checkbox>
      </>
    );
  };


  //This is handleInputs

  const [profileinputs, setProfileinputs] = useState([
    {
      name:"",
      email:"",
      workemail:"",
      phonenumber:"",
      companyname:"",
      companyprofile:"",
      preferredcurrency:""
    }
  ])

  return (
      <Dialog
        open={open}
        onClose={close}
        aria-labelledby="responsive-dialog-title"
        id="edit_profile_modal_section"
      >
        <DialogTitle
          id="responsive-dialog-title"
          style={{ marginBottom: "20px" }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "24px",
              lineHeight: "19px",
              letterSpacing: ".01em",
            }}
          >
            Edit Profile Info
          </Typography>
          <VscClose size={22} color='#ffff' onClick={close} style={{position:"absolute",top:"0px",right:"-25px",cursor:"pointer"}} />
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText> */}
          <Form layout="vertical" autoComplete="off" style={{ width: "500px" }}>
            <Form.Item
              hasFeedback
              label="Company Name"
              name="Company Name"
              validateTrigger="onBlur"
            >
              <Input
                size="large"
                placeholder="Type here..."
                prefix={<img src={office}></img>}
                defaultValue={userDetails?.company}
              />
              {/* disabled={isReadOnly} defaultValue={apiData?.name} value={shipperinputs.name} onChange={handleChange} */}
            </Form.Item>
            <Form.Item
              hasFeedback
              label={<InputWithCheck label={"Email"} />}
              name="Email"
              validateTrigger="onBlur"
              className="inputwithcheck"
            >
              <Input
                size="large"
                placeholder="Type here..."
                prefix={<img src={email}></img>}
                defaultValue={userDetails?.email}
              />
              {/* disabled={isReadOnly} defaultValue={apiData?.name} value={shipperinputs.name} onChange={handleChange} */}
            </Form.Item>
            {/* <Form.Item
              hasFeedback
              label={<InputWithCheck label={"Alternate Email"} />}
              name="AlternateEmail"
              validateTrigger="onBlur"
              className="inputwithcheck"
            >
              <Input
                size="large"
                placeholder="Type here..."
                prefix={<img src={email}></img>}
              />
              {/* disabled={isReadOnly} defaultValue={apiData?.name} value={shipperinputs.name} onChange={handleChange} */}
            {/* </Form.Item>  */}
            <Form.Item
              hasFeedback
              label="Phone Number"
              name="Phone Number"
              validateTrigger="onBlur"
            >
              <Input
                size="large"
                style={{ width: "100%", marginBottom: "8px" }}
                addonBefore={
                  // <Cascader
                  //   dropdownMenuColumnStyle={{ zIndex: "999"}}
                  //   options={options}
                  //   placeholder="+91"
                  //   style={{ width: "80px"}}
                  // />
                  <Select
                    defaultValue="+91"
                    // onChange={handleChange}
                    size="large"
                    dropdownStyle={{ zIndex: "99999" }}
                    suffixIcon={
                      <CaretDownOutlined
                        style={{ fontSize: "16px", color: "#000",pointerEvents:"unset" }}
                      />
                    }
                    options={countriesphonecode}
                  />
                }
                defaultValue={userDetails?.phone_no}
              />
              <Checkbox
                style={{
                  fontWeight: "400",
                  letterSpacing: ".01em",
                  fontSize: "13px",
                }}
              >
                This is my Whatsapp Number
              </Checkbox>
              {/* <Input size="large" placeholder="Type here..." prefix={<GoLock />} /> */}
              {/* disabled={isReadOnly} defaultValue={apiData?.name} value={shipperinputs.name} onChange={handleChange} */}
            </Form.Item>
            {/* <Form.Item
              hasFeedback
              label="Company Name"
              name="Preferred Currency"
              validateTrigger="onBlur"
            >
              <Input
                size="large"
                placeholder="Type here..."
                prefix={<img src={office}></img>}
              /> */}
              {/* disabled={isReadOnly} defaultValue={apiData?.name} value={shipperinputs.name} onChange={handleChange} */}
            {/* </Form.Item> */}
            <Flex horizontal justify="space-between">
              <Form.Item
                hasFeedback
                label="Country"
                name="Country"
                validateTrigger="onBlur"
              >
                {/* <Input size="large" placeholder="Type here..." prefix={<img src={user}></img>} /> */}
                <Select
                  defaultValue={userDetails?.country_name}
                  // onChange={handleChange}
                  size="large"
                  dropdownStyle={{ zIndex: "99999" }}
                  id="dropStyle1"
                  removeIcon
                  suffixIcon={
                    <CaretDownOutlined
                      style={{ fontSize: "16px", color: "#000",pointerEvents:"unset" }}
                    />
                  }
                  options={countriesOnly}
                />
                
                {/* disabled={isReadOnly} defaultValue={apiData?.name} value={shipperinputs.name} onChange={handleChange} */}
              </Form.Item>
              <Form.Item
                hasFeedback
                label="Preferred Currency"
                name="Preferred Currency"
                validateTrigger="onBlur"
                id="dropStyle2"
              >
                <Select
                  defaultValue={userDetails?.currency_code}
                  // onChange={handleChange}
                  size="large"
                  dropdownStyle={{ zIndex: "99999" }}
                  suffixIcon={
                    <CaretDownOutlined
                      style={{ fontSize: "16px", color: "#000",pointerEvents:"unset" }}
                    />
                  }
                  options={countries_code}
                />
                {/* disabled={isReadOnly} defaultValue={apiData?.name} value={shipperinputs.name} onChange={handleChange} */}
              </Form.Item>
            </Flex>
          </Form>
        </DialogContent>
        <DialogActions style={{ padding: "20px 24px" }}>
          <Button size="large" autoFocus onClick={close}>
            Cancel
          </Button>
          <Button
            style={{
              backgroundColor: "#D32D2F",
              color: "white",
              marginLeft: "20px",
            }}
            size="large"
            onClick={close}
            autoFocus
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
  );
};

export default EditProfileModal;
