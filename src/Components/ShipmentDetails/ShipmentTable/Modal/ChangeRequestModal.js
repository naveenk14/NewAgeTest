import React from 'react'
import tikIcon from '../../../../assets/TickAnimation.svg'
import { VscClose } from 'react-icons/vsc'

const ChangeRequestModal = ({handleRequestClose}) => {
  return (
    <div className='change_request_content p-5' style={{position:"relative"}}>
        <div className="modal_document_body">
          <div className="modal_document_img d-flex align-items-center justify-content-center" style={{padding:"20px 40px"}}>
              <img src={tikIcon} className='img-fluid'/>
          </div>
          <div className="modal_cancel_icon d-flex align-items-center justify-content-end" style={{position:"absolute", right:"-30px",top:"0",cursor:"pointer"}}>
            <VscClose size={22} color='#ffff' onClick={() => handleRequestClose()} />
          </div>
          <div className="modal_document_content text-center" style={{fontWeight:"500",fontSize:"24px",lineHeight:"43px",letterSpacing:".01em"}}>
            <p className='m-0 pb-4'>Thanks for your change request.We will send the revised document.</p>
          </div>                                                                                       
        </div>
    </div>
  )
}

export default ChangeRequestModal