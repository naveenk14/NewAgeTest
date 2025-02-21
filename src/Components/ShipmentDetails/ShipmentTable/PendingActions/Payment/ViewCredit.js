import React from 'react'
import Payment from './Payment'
import AgeingDetails from './AgeingDetails'
import { VscClose } from 'react-icons/vsc'

const ViewCredit = ({setOpen}) => {
  return (
    <div className='Credit_Description' style={{position:"relative"}}>
      <VscClose size={22} color='red' onClick={() =>setOpen(false)} style={{position:"absolute",top:"30px",right:"10px"}} />
        <Payment />
        <AgeingDetails />
    </div>
  )
}

export default ViewCredit