import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';

const AllMessages = ({allmsg, setAllmsg, unread, setUnread, messages, menu}) => {
  return (
    <div className='col-8'>
       {messages && (
          <div className="div-position" style={{marginTop:"4.2rem"}}>
            <div className="d-flex ms-3 mt-3 pt-5">
              <div className="Notification2 me-1">Messages</div>
              <Dropdown overlay={menu} className="custom-dropdown mt-1">
                <Button>
                  <Space>
                    Last 30 Days
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </div>
            <div
              className="card shadow ms-3"
              style={{ width: "1054px", height: allmsg ? "1014px" : "855px" }}
            >
              <div
                className=" d-flex w-100 justify-content-center "
                style={{ height: "50px" }}
              >
                <div
                  className="w-50 card-header-container"
                  style={{ borderRadius: "5px 5px 0 0" }}
                >
                  <div
                    className={`card-header ${allmsg ? "active" : ""}`}
                    onClick={() => {
                      setAllmsg(true);
                      setUnread(false);
                    }}
                  >
                    <div
                      className={`text-center read ${allmsg ? "active" : ""}`}
                    >
                      All (10)
                    </div>
                  </div>
                </div>
                <div
                  className="w-50 card-header-container"
                  style={{ borderRadius: "5px 5px 0 0" }}
                >
                  <div
                    className={`card-header ${unread ? "active" : ""}`}
                    onClick={() => {
                      setAllmsg(false);
                      setUnread(true);
                    }}
                  >
                    <div
                      className={`text-center read ${unread ? "active" : ""}`}
                    >
                      Unread (5)
                    </div>
                  </div>
                </div>
              </div>
              {allmsg && (
                <div className="mt-2">
                  <div className="mx-auto notify-box">
                    <div className="card shadow mt-3">
                      <div
                        className="card-body"
                        style={{ height: "137px", borderColor: "transparent" }}
                      >
                        <p className="bookingcreatedmessage">
                          <span
                            className="bookingcreated"
                            style={{ fontSize: "14px" }}
                          >
                            Booking Confirmation{" "}
                          </span>
                          - LCL 120813000913 - Nhava Sheva to Jebel Ali{" "}
                        </p>
                        <p
                          className="bookingcreatedmessage1"
                          style={{ height: "38px" }}
                        >
                          Thank you very much for your booking/nomination. We
                          keep you posted on further updates. We request shipper
                          to kindly share the SLI, which helps to ensure error
                          free transaction of draft BL/AWB.oking #
                         <Link className="text-decoration-none">
                          <span
                            style={{
                              color: "#0812F79C",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            120893000710{" "}
                          </span>{" "}
                          </Link>
                          for Nhava Sheva to Jebel Ali has been created
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="bookingcreated2">
                            <span className="green-dot"></span>09 May 2024
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card shadow  mt-3   ">
                      <div className="card-body" style={{ height: "137px" }}>
                        <p className="bookingcreatedmessage">
                          <span
                            className="bookingcreated"
                            style={{ fontSize: "14px" }}
                          >
                            Clearance{" "}
                          </span>
                          - LCL 120813000913 - Nhava Sheva to Jebel Ali{" "}
                        </p>
                        <p
                          className="bookingcreatedmessage1"
                          style={{ height: "38px" }}
                        >
                          Thank you very much for your booking/nomination. We
                          keep you posted on further updates. We request shipper
                          to kindly share the SLI, which helps to ensure error
                          free transaction of draft BL/AWB.oking #
                         <Link className="text-decoration-none">
                          <span
                            style={{
                              color: "#0812F79C",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            120893000710{" "}
                          </span>{" "}
                          </Link>
                          for Nhava Sheva to Jebel Ali has been created
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="bookingcreated2">
                            <span className="green-dot"></span>08 May 2024
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="card shadow  mt-3   ">
                      <div className="card-body" style={{ height: "137px" }}>
                        <p className="bookingcreatedmessage">
                          <span
                            className="bookingcreated"
                            style={{ fontSize: "14px" }}
                          >
                            Pick Up{" "}
                          </span>
                          - LCL 120813000913 - Nhava Sheva to Jebel Ali{" "}
                        </p>
                        <p
                          className="bookingcreatedmessage1"
                          style={{ height: "38px" }}
                        >
                          Thank you very much for your booking/nomination. We
                          keep you posted on further updates. We request shipper
                          to kindly share the SLI, which helps to ensure error
                          free transaction of draft BL/AWB.oking #
                         <Link className="text-decoration-none">
                          <span
                            style={{
                              color: "#0812F79C",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            120893000710{" "}
                          </span>{" "}
                          </Link>
                          for Nhava Sheva to Jebel Ali has been created
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="bookingcreated2">
                            <span className="green-dot"></span>07 May 2024
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="card shadow  mt-3   ">
                      <div className="card-body" style={{ height: "137px" }}>
                        <p className="bookingcreatedmessage">
                          <span
                            className="bookingcreated"
                            style={{ fontSize: "14px" }}
                          >
                            Cargo Received -{" "}
                          </span>
                          - LCL 120813000913 - Nhava Sheva to Jebel Ali{" "}
                        </p>
                        <p
                          className="bookingcreatedmessage1"
                          style={{ height: "38px" }}
                        >
                          Thank you very much for your booking/nomination. We
                          keep you posted on further updates. We request shipper
                          to kindly share the SLI, which helps to ensure error
                          free transaction of draft BL/AWB.oking #
                         <Link className="text-decoration-none">
                          <span
                            style={{
                              color: "#0812F79C",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            120893000710{" "}
                          </span>{" "}
                          </Link>
                          for Nhava Sheva to Jebel Ali has been created
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="bookingcreated2">
                            <span className="green-dot"></span>06 May 2024
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="card shadow  mt-3   ">
                      <div className="card-body" style={{ height: "137px" }}>
                        <p className="bookingcreatedmessage">
                          <span
                            className="bookingcreated"
                            style={{ fontSize: "14px" }}
                          >
                            Booking Confirmation{" "}
                          </span>
                          - LCL 120813000913 - Nhava Sheva to Jebel Ali{" "}
                        </p>
                        <p
                          className="bookingcreatedmessage1"
                          style={{ height: "38px" }}
                        >
                          Thank you very much for your booking/nomination. We
                          keep you posted on further updates. We request shipper
                          to kindly share the SLI, which helps to ensure error
                          free transaction of draft BL/AWB.oking #
                         <Link className="text-decoration-none">
                          <span
                            style={{
                              color: "#0812F79C",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            120893000710{" "}
                          </span>{" "}
                          </Link>
                          for Nhava Sheva to Jebel Ali has been created
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="bookingcreated2">
                            <span className="green-dot"></span>05 May 2024
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card shadow  mt-3   ">
                      <div className="card-body" style={{ height: "137px" }}>
                        <p className="bookingcreatedmessage">
                          <span
                            className="bookingcreated"
                            style={{ fontSize: "14px" }}
                          >
                            Booking Confirmation{" "}
                          </span>
                          - LCL 120813000913 - Nhava Sheva to Jebel Ali{" "}
                        </p>
                        <p
                          className="bookingcreatedmessage1"
                          style={{ height: "38px" }}
                        >
                          Thank you very much for your booking/nomination. We
                          keep you posted on further updates. We request shipper
                          to kindly share the SLI, which helps to ensure error
                          free transaction of draft BL/AWB.oking #
                         <Link className="text-decoration-none">
                          <span
                            style={{
                              color: "#0812F79C",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            120893000710{" "}
                          </span>{" "}
                          </Link>
                          for Nhava Sheva to Jebel Ali has been created
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="bookingcreated2">
                            <span className="green-dot"></span>05 May 2024
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {unread && (
                <div className="mt-2">
                  <div className="mx-auto notify-box">
                    <div className="card shadow mt-3">
                      <div className="card-body" style={{ height: "137px" }}>
                        <p className="bookingcreatedmessage">
                          <span
                            className="bookingcreated"
                            style={{ fontSize: "14px" }}
                          >
                            Booking Confirmation{" "}
                          </span>
                          - LCL 120813000913 - Nhava Sheva to Jebel Ali{" "}
                        </p>
                        <p
                          className="bookingcreatedmessage1"
                          style={{ height: "38px" }}
                        >
                          Thank you very much for your booking/nomination. We
                          keep you posted on further updates. We request shipper
                          to kindly share the SLI, which helps to ensure error
                          free transaction of draft BL/AWB.oking #
                         <Link className="text-decoration-none">
                          <span
                            style={{
                              color: "#0812F79C",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            120893000710{" "}
                          </span>{" "}
                          </Link>
                          for Nhava Sheva to Jebel Ali has been created
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="bookingcreated2">
                            <span className="green-dot"></span>09 May 2024
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card shadow  mt-3   ">
                      <div className="card-body" style={{ height: "137px" }}>
                        <p className="bookingcreatedmessage">
                          <span
                            className="bookingcreated"
                            style={{ fontSize: "14px" }}
                          >
                            Clearance{" "}
                          </span>
                          - LCL 120813000913 - Nhava Sheva to Jebel Ali{" "}
                        </p>
                        <p
                          className="bookingcreatedmessage1"
                          style={{ height: "38px" }}
                        >
                          Thank you very much for your booking/nomination. We
                          keep you posted on further updates. We request shipper
                          to kindly share the SLI, which helps to ensure error
                          free transaction of draft BL/AWB.oking #
                         <Link className="text-decoration-none">
                          <span
                            style={{
                              color: "#0812F79C",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            120893000710{" "}
                          </span>{" "}
                          </Link>
                          for Nhava Sheva to Jebel Ali has been created
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="bookingcreated2">
                            <span className="green-dot"></span>08 May 2024
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="card shadow  mt-3   ">
                      <div className="card-body" style={{ height: "137px" }}>
                        <p className="bookingcreatedmessage">
                          <span
                            className="bookingcreated"
                            style={{ fontSize: "14px" }}
                          >
                            Pick Up{" "}
                          </span>
                          - LCL 120813000913 - Nhava Sheva to Jebel Ali{" "}
                        </p>
                        <p
                          className="bookingcreatedmessage1"
                          style={{ height: "38px" }}
                        >
                          Thank you very much for your booking/nomination. We
                          keep you posted on further updates. We request shipper
                          to kindly share the SLI, which helps to ensure error
                          free transaction of draft BL/AWB.oking #
                         <Link className="text-decoration-none">
                          <span
                            style={{
                              color: "#0812F79C",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            120893000710{" "}
                          </span>{" "}
                          </Link>
                          for Nhava Sheva to Jebel Ali has been created
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="bookingcreated2">
                            <span className="green-dot"></span>07 May 2024
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="card shadow  mt-3   ">
                      <div className="card-body" style={{ height: "137px" }}>
                        <p className="bookingcreatedmessage">
                          <span
                            className="bookingcreated"
                            style={{ fontSize: "14px" }}
                          >
                            Cargo Received -{" "}
                          </span>
                          - LCL 120813000913 - Nhava Sheva to Jebel Ali{" "}
                        </p>
                        <p
                          className="bookingcreatedmessage1"
                          style={{ height: "38px" }}
                        >
                          Thank you very much for your booking/nomination. We
                          keep you posted on further updates. We request shipper
                          to kindly share the SLI, which helps to ensure error
                          free transaction of draft BL/AWB.oking #
                         <Link className="text-decoration-none">
                          <span
                            style={{
                              color: "#0812F79C",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            120893000710{" "}
                          </span>{" "}
                          </Link>
                          for Nhava Sheva to Jebel Ali has been created
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="bookingcreated2">
                            <span className="green-dot"></span>06 May 2024
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="card shadow  mt-3 ">
                      <div className="card-body" style={{ height: "137px" }}>
                        <p className="bookingcreatedmessage">
                          <span
                            className="bookingcreated"
                            style={{ fontSize: "14px" }}
                          >
                            Booking Confirmation{" "}
                          </span>
                          - LCL 120813000913 - Nhava Sheva to Jebel Ali{" "}
                        </p>
                        <p
                          className="bookingcreatedmessage1"
                          style={{ height: "38px" }}
                        >
                          Thank you very much for your booking/nomination. We
                          keep you posted on further updates. We request shipper
                          to kindly share the SLI, which helps to ensure error
                          free transaction of draft BL/AWB.oking #
                         <Link className="text-decoration-none">
                          <span
                            style={{
                              color: "#0812F79C",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            {" "}
                            120893000710{" "}
                          </span>{" "}
                          </Link>
                          for Nhava Sheva to Jebel Ali has been created
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="bookingcreated2">
                            <span className="green-dot"></span>05 May 2024
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
    </div>
  )
}

export default AllMessages