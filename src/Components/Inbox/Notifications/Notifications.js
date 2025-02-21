import { DownOutlined } from '@ant-design/icons'
import { Button, Dropdown, Space } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Notifications = ({notification, menu}) => {
  return (
    <div className='col-8'>
        {notification && (
          <div className="div-position" style={{marginTop:"4.1rem"}}>
            <div className="d-flex ms-3 mt-5 pt-3 ">
              <div className="Notification2 me-1">Notification</div>
              <Dropdown overlay={menu} className=" custom-dropdown mt-1">
                <Button>
                  <Space>
                    Last 30 Days
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
            </div>

            <div className="ms-3">
              <div className="Cardsize">
                <div className="card-body">
                  <p
                    className="bookingcreated m-0"
                    style={{
                      padding: "10px 10px 10px 0px",
                      fontSize: "18px",
                    }}
                  >
                    Booking Created
                  </p>
                  <p className="bookingcreated1 m-0">
                    Your LCL Booking #
                    <Link className="text-decoration-none"><span style={{ color: "#0812F79C" }}> 120893000710 </span></Link>{" "}
                    for Nhava Sheva to Jebel Ali has been created
                  </p>
                  <div
                    className="d-flex justify-content-between"
                  >
                    <p className="bookingcreated2 m-0 pt-2">
                      <span className="green-dot"></span>2 m ago
                    </p>
                    <Button className="bookingcreated3 display me-2">
                      View Pending Action
                    </Button>
                  </div>
                </div>
              </div>

              <div className="Cardsize mt-3">
                <div className="card-body ">
                  <p
                    className="bookingcreated m-0"
                    style={{
                      padding: "10px 10px 10px 0px",
                      fontSize: "18px",
                    }}
                  >
                    ETD Updated
                  </p>
                  <p className="bookingcreated1 m-0">
                    Your LCL Booking #
                    <Link className="text-decoration-none"><span style={{ color: "#0812F79C" }}> 120893000710 </span></Link>{" "}
                    for Nhava Sheva to Jebel Ali has been created
                  </p>
                  <div
                    className="d-flex justify-content-between"
                  >
                    <p className="bookingcreated2 m-0 pt-2">
                      <span className="green-dot"></span>2 m ago
                    </p>
                    <Button className="bookingcreated3 display me-2">
                      View Pending Action
                    </Button>
                  </div>
                </div>
              </div>

              <div className="Cardsize mt-3">
                <div className="card-body ">
                  <p
                    className="bookingcreated m-0"
                    style={{
                      padding: "10px 10px 10px 0px",
                      fontSize: "18px",
                    }}
                  >
                    Cargo Received
                  </p>
                  <p className="bookingcreated1 m-0">
                    Your LCL Booking #
                    <Link className="text-decoration-none"><span style={{ color: "#0812F79C" }}> 120893000710 </span></Link>{" "}
                    for Nhava Sheva to Jebel Ali has been created
                  </p>
                  <div
                    className="d-flex justify-content-between"
                  >
                    <p className="bookingcreated2 m-0 pt-2">
                      <span className="green-dot"></span>2 m ago
                    </p>
                    <Button className="bookingcreated3 display me-2">
                      View Pending Action
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className="Cardsize mt-3"
                // style={{ width: "991px", height: "147px" }}
              >
                <div className="card-body ">
                  <p
                    className="bookingcreated m-0"
                    style={{
                      padding: "10px 10px 10px 0px",
                      fontSize: "18px",
                    }}
                  >
                    Draft BL Approved
                  </p>
                  <p className="bookingcreated1 m-0">
                    Your LCL Booking #
                    <Link className="text-decoration-none"><span style={{ color: "#0812F79C" }}> 120893000710 </span></Link>{" "}
                    for Nhava Sheva to Jebel Ali has been created
                  </p>
                  <div
                    className="d-flex justify-content-between"
                  >
                    <p className="bookingcreated2 m-0 pt-2">
                      <span className="green-dot"></span>2 m ago
                    </p>
                    <Button className="bookingcreated3 display me-2">
                      View Pending Action
                    </Button>
                  </div>
                </div>
              </div>

              <div
                className="Cardsize mt-3"
                // style={{ width: "991px", height: "147px" }}
              >
                <div className="card-body ">
                  <p
                    className="bookingcreated m-0"
                    style={{
                      padding: "10px 10px 10px 0px",
                      fontSize: "18px",
                    }}
                  >
                    Draft BL Approved
                  </p>
                  <p className="bookingcreated1 m-0">
                    Your LCL Booking #
                    <Link className="text-decoration-none"><span style={{ color: "#0812F79C" }}> 120893000710 </span></Link>{" "}
                    for Nhava Sheva to Jebel Ali has been created
                  </p>
                  <div
                    className="d-flex justify-content-between"
                  >
                    <p className="bookingcreated2 m-0 pt-2">
                      <span className="green-dot"></span>2 m ago
                    </p>
                    <Button className="bookingcreated3 display me-2">
                      View Pending Action
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default Notifications