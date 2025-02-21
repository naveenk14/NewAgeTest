import { Card, Flex } from 'antd'
import React from 'react'
import uaeFlag from "../../../assets/ae.svg";
import indFlag from "../../../assets/in.svg";
import co2 from "../../../assets/Co2 Icons-05 1.svg";
import lcl from "../../../assets/LCL.svg";
import OrImg from "../../../assets/orSymbol.png";
import rightArrow from "../../../assets/rigtharrow.png";
import './ShipmentMapModal.css'
import mapImage from '../../../assets/E2ED337B-1FDA-4D38-904C-D7F8CB38FD1D 1.svg'

const ShipmentMapModal = () => {
  return (
    <Card bordered={false} id="shipment_map_modal" style={{overflow:"hidden"}}>
            {/* <Flex>
                <div>
                    Order ID:&nbsp;<span>ADK-23-1198</span>
                </div>
                <div>
                    Shipment ID:&nbsp;<span>121014000112</span>
                </div>
                <div>
                    Order ID:&nbsp;<span>ADK-23-1198</span>
                </div>
            </Flex> */}
            <div className="row destination_row">
          <div className="col-10 left_column">
            <div className="from_box">
              {/* <img src={uaeFlag} alt="" className="flag_img me-2" /> */}
              {/* {fileteredMilestone?.map((item) => { */}
                {/* return ( */}
                  <h6 className="m-0">
                    {/* {item.origin}&nbsp;({item.origin_countrycode}) */}
                    Order ID:&nbsp; ADK-23-1198
                  </h6>
                {/* );
              })} */}
              <img src={OrImg} alt="" className="mx-3" />
            </div>
            <div className="from_box">
              {/* <img src={uaeFlag} alt="" className="flag_img me-2" /> */}
              {/* {fileteredMilestone?.map((item) => { */}
                {/* return ( */}
                  <h6 className="m-0">
                    {/* {item.origin}&nbsp;({item.origin_countrycode}) */}
                    Shipment ID:&nbsp; 121014000112
                  </h6>
                {/* );
              })} */}
              <img src={OrImg} alt="" className="mx-3" />
            </div>
            <div className="from_box">
              <img src={uaeFlag} alt="" className="flag_img me-2" />
              {/* {fileteredMilestone?.map((item) => { */}
                {/* return ( */}
                  <h6 className="m-0">
                    {/* {item.origin}&nbsp;({item.origin_countrycode}) */}
                    Jebel Ali (AEJEA)
                  </h6>
                {/* );
              })} */}
              <img src={rightArrow} alt="" className="mx-3" />
            </div>
            <div className="to_box">
              <img src={indFlag} alt="" className="flag_img me-2" />
              {/* {fileteredMilestone?.map((item) => { */}
                {/* // return ( */}
                  <h6 className="m-0">
                    {/* {item.destination}&nbsp;({item.destination_countrycode}) */}
                    Nhava Sheva (INNSA)
                  </h6>
                {/* );
              })} */}
              {/* <img src={OrImg} alt="" className='mx-3' /> */}
            </div>
            {/* <div className="estimate_box">
                        <img src={ship} alt="" className='me-2' />
                        <p className='m-0'>Est. T/T</p>
                        <p className='mx-2 m-0'>9 Days (5 Days Port to Port)</p>
                    </div> */}
          </div>
          <div className="col-2 right_column">
            {/* <div className="bookedButton">
              {fileteredMilestone?.map((item) => {
                return <span>{item.status}</span>
              })}
            </div> */}
            {/* <div className="menu_icon">
              <Dropdown
                menu={{
                  items,
                  onClick,
                }}
              >
                <a onClick={(e) => e.target.value}>
                  <Space>
                    <img src={menuIcon} alt="" />
                  </Space>
                </a>
              </Dropdown>
            </div> */}
          </div>
        </div>
        <div className="booking_row">
          <div className="booking_content">
            <p className="m-0 mb-1">Container #</p>
            {/* {fileteredMilestone?.map((item) => {
              return <p className="m-0">{item.booked_on}</p>;
            })} */}
            <p className="m-0">TCLU9154664</p>
          </div>
          <div className="booking_content">
            <p className="m-0 mb-1">Container Type</p>
            {/* {fileteredMilestone?.map((item) => {
              return <p className="m-0">{item.etd_atd}</p>;
            })} */}
            <p className="m-0">40’ HC Dry</p>
            
          </div>
          <div className="booking_content">
            <p className="m-0 mb-1">Status</p>
            {/* {fileteredMilestone?.map((item) => {
              return <p className="m-0">{item.eta_ata}</p>;
            })} */}
            <p className="m-0" style={{color:"#128807"}}>Active</p>
          </div>
          <div className="booking_content">
            <p className="m-0 mb-1">MBL #</p>
            {/* {fileteredMilestone?.map((item) => {
              return (
                <p className="m-0">
                  <img className="me-1" src={lcl} />
                  {item.mode}
                </p>
              );
            })} */}
            <p className="m-0">TCLU9154664</p>
          </div>
          <div className="booking_content">
            <p className="m-0 mb-1">Carrier</p>
            {/* {fileteredMilestone?.map((item) => {
              return <p className="m-0 text-center">{item.tos}</p>;
            })} */}
            <p className="m-0">MSC</p>
          </div>
          <div className="booking_content">
            <p className="m-0 mb-1">Carbon Emissions</p>
            {/* {fileteredMilestone?.map((item) => {
              return <p className="m-0">{item.valid_date}</p>;
            })} */}
            <p className="m-0">4,348.96 KGMSC</p>
          </div>
        </div>
            <img style={{width:"1199px"}} src={mapImage} />
    </Card>
  )
}

export default ShipmentMapModal