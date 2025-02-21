import React from 'react'
import './CancelBookingModal.css'
import cancellingIcon from '../../../../assets/CancelImg.svg'
import { VscClose } from 'react-icons/vsc'


const CancelBookingModal = ({handleCancelClose,handleReqOpen}) => {

    const handleOnSubmit =()=>{
        handleReqOpen()
        handleCancelClose()
    }

  return (
    <>
        <div className='cancel_booking_modal p-5' style={{position:"relative"}}>
            <div className="modal_cancelling_img_header text-center">
                <img src={cancellingIcon}  className='img-fluid'/>
            </div>
            <div className="modal_cancel_icon" style={{position:"absolute", right:"-30px",top:"0",cursor:"pointer"}}>
                <VscClose size={22} color='#ffff' onClick={() =>handleCancelClose()} />
            </div>
            <div className="modal_cancelling_body text-center">
                <h4>Cancelling the Booking?</h4>
                <p>By clicking yes you are initiating cancellation request. Do you still want to proceed with Cancellation?</p>
            </div>
            <div className="modal_cancelling_buttons mt-4 gap-3">
                    <button className='yes_shipment_btn' onClick={()=>handleOnSubmit()} >Yes, Cancel Shipment</button>
                    <button className='no_cancel_btn' onClick={() =>handleCancelClose()} >No, Do Not Cancel</button>
            </div>
        </div>
    </>
  )
}

export default CancelBookingModal