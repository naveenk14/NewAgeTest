import React, { useEffect, useRef, useState } from 'react'
import './Stepper.css'
import { useSelector } from 'react-redux';
import { Tooltip } from 'antd';

const Stepper = ({booking_id}) => {

  const steps = [
    {
        step:'Booking Created',
        body:'(01/05/2023)',
        completed:true,
        processing:false
    },
    {
        step:'Cargo Picked up',
        body:'--',
        completed:false,
        processing:true
    },
    {
        step:'Cargo Received',
        body:'(01/05/2023)',
        completed:false,
        processing:false
    },
    {
        step:'Shipment Departed',
        body:'--',
        completed:false,
        processing:false
    },
    {
        step:'Shipment Arrived',
        body:'--',
        completed:false,
        processing:false
    },
    {
        step:'DO Issued',
        body:'--',
        completed:false,
        processing:false
    },
    {
        step:'Cargo Delivered',
        body:'--',
        completed:false,
        processing:false
    },
    
]

//booking id hard code
// const allComplete = "190124100291"
const progress = booking_id //This is for getting previous page id

const ShipmentData = useSelector((state) => state.Booking);
const Booking = ShipmentData?.booking?.data
const fileteredMilestone = Booking?.filter((item)=>item.id===progress)
console.log("Booking",Booking)
console.log("filtered",fileteredMilestone)



  return (
    <div className='stepper d-flex' style={{minWidth:fileteredMilestone[0]?.milestone?.length > 7 ? "1585px": null,width:"100%",overflowX:"hidden",scrollBehavior:"smooth"}} >
        {
            fileteredMilestone[0]?.milestone?.map((step,i)=>{
                return(
                            <div key={i+1} className={`step-item step-item-${i+1} ${step.status==="INPROGRESS" && "Inprogress"} ${step.status==='COMPLETED' && 'Complete'}`}>
                                <p className='m-0 step mb-1 d-flex justify-content-center align-items-center'>
                                    <div style={{backgroundColor:"#ACB8C4",borderRadius:"50%",width:"10.5px",height:"10.5px"}}></div>
                                </p>
                                <p className='m-0 ' style={{color:"#181E25"}}>{step.milestone.length<15?step.milestone:
                                <Tooltip placement="topLeft" zIndex={9999} title={step.milestone} >
                                    <span role='button'>
                                    {step.milestone.slice(0, 16).trim().split("").join("") + "..."}
                                    </span>
                                </Tooltip>
                                }</p>
                                <p className='m-0' >{step.date}</p>
                            </div>
                )
            }         
        )
        }
    </div>
  )
}

export default Stepper