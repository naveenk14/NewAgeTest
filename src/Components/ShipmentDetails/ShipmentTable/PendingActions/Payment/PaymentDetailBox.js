import React from 'react'
import roundTick from '../../../../../assets/roundTick.png'
import { Link } from 'react-router-dom'

const PaymentDetailBox = ({setOpen}) => {
  return (
    <div className="payment_box px-1 py-5 mx-1">
        <div className="payment_box_header d-flex justify-content-between align-items-center">
            <p className='m-0'>Payment of $330 has been successfully adjusted with your credit</p>
            <img src={roundTick} alt="" className='img-fluid' />
        </div>
        <div className="payment_box_body d-flex justify-content-start align-items-center">
            <p className='m-0 me-2'>Balance :<span>3000 AED</span></p>
            <Link className="text-decoration-none" onClick={()=>setOpen(true)}>View Credit</Link>
        </div>
    </div>
  )
}

export default PaymentDetailBox