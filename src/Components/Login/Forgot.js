import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "antd";
import SendOtp from "./otpModal";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { ForgotPswdRequest } from "../../Redux/Actions/ForgotPswdAction";

const Forgot = ({ setForgotPwd }) => {
  const [otp, setOtp] = useState();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email_phoneno: "",
    },
    validationSchema: Yup.object({
      email_phoneno: Yup.string().required("Please enter Username"),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(ForgotPswdRequest({ values }));
      setOtp(true);
    },
  });
  return (
    <div>
      <div className="loginheader mt-5">Forgot Password</div>
      <div className="logLink" style={{ color: "#A7A9C0" }}>
        Back to &nbsp;
        <Link
          to=""
          onClick={() => setForgotPwd(false)}
          style={{ color: "#0DA3DE" }}
        >
          Login
        </Link>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-5">
          <div className="inputLabel">
            Username{" "}
            <span
              className={` ${
                formik.touched.email_phoneno && formik.errors.email_phoneno
                  ? "input-error1"
                  : "inputLabel1"
              }`}
            >
              *
            </span>
          </div>
          <Input
            name="email_phoneno"
            placeholder="Username"
            className={`mt-2 ${
              formik.touched.email_phoneno && formik.errors.email_phoneno
                ? "input-error"
                : ""
            }`}
            size="large"
            style={{ width: "348px", height: "45px", fontSize: "14px" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email_phoneno}
          />
          {formik.touched.email_phoneno && formik.errors.email_phoneno ? (
            <div className="error">{formik.errors.email_phoneno}</div>
          ) : null}
        </div>
        <div className="mt-5 mx-auto d-flex justify-content-center">
          <Button type="primary" className="logbtn" htmlType="submit">
            Get Password
          </Button>
        </div>
        <div style={{ fontWeight: 500, fontSize: "12px" }} className="mt-5">
          Enter your username. We will send password to your email address.
        </div>
      </form>
      <SendOtp
        open={otp}
        close={() => setOtp(false)}
        setForgotPwd={setForgotPwd}
      />
    </div>
  );
};

export default Forgot;
