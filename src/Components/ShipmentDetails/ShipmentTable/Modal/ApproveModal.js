import React from 'react'
import { VscClose } from 'react-icons/vsc'
import tikIcon from '../../../../assets/TickAnimation.svg'

const ApproveModal = ({handleApproveClose}) => {
  return (
    <div className='approval_modal p-5' style={{position:'relative'}}>
        <div className="modal_approval_body d-flex justify-content-center align-items-center" style={{padding:"20px 40px"}}>
            <img src={tikIcon} className='img-fluid'/>
        </div>
        <div className="modal_cancel_icon d-flex justify-content-center align-items-end" style={{position:"absolute", right:"-30px",top:"0",cursor:"pointer"}}>
           <VscClose size={22} color='#ffff' onClick={() => handleApproveClose()} />
        </div>
        <div className="modal_approval_content d-flex justify-content-center align-items-center" style={{fontSize:"24px",fontWeight:"500",paddingBottom:"50px",letterSpacing:".01em", marginTop: "30px",marginBottom:"20px"}}>
          <p>Thanks for your Approval!</p>
        </div> 
    </div>
  )
}

export default ApproveModal