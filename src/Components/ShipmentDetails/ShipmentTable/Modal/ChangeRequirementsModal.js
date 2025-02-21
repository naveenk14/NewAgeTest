import TextArea from 'antd/es/input/TextArea'
import React from 'react'
import './ChangeRequirementsModal.css'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { VscClose } from 'react-icons/vsc'

const ChangeRequirementsModal = ({handleRequireClose,handleRequestOpen}) => {

  const handleSubmit =()=>{
    handleRequireClose()
    handleRequestOpen()
  }

  return (
    <div>
        <div className="change_require_modal p-5" style={{position:"relative"}}>
          <div className="modal_requir_body text-center">
            <h4>Please provide your change requirements!</h4>
            <TextArea
              placeholder='Type here...'
              className='shadow-none'
              style={{height:"20vh",width:"90%", marginTop:"15px"}}
            />
          </div>
          <div className="modal_cancel_icon d-flex justify-content-center align-items-end" style={{position:"absolute", right:"-30px",top:"0",cursor:"pointer"}}>
            <VscClose size={22} color='#ffff' onClick={() => handleRequireClose()} />
          </div>
          <div className="modal_requir_button mt-4 d-flex justify-content-center align-items-center gap-5">
              <button className='cancel_btn'>cancel</button>
              <button className='submit_btn' onClick={()=>handleSubmit()}>Submit <span className='mx-1'><BsArrowRightCircleFill /></span></button>
          </div>
        </div>
    </div>
  )
}

export default ChangeRequirementsModal