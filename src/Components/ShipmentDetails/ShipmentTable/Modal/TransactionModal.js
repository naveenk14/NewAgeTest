import Dragger from 'antd/es/upload/Dragger'
import React from 'react'
import './TransactionModal.css'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { VscClose } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { Form } from 'antd'
import bankIcon from '../../../../assets/Bank.svg'
import dropIcon from '../../../../assets/DragIcon.svg'
import { Input } from 'antd'

const TransactionModal = ({handleClose}) => {
  return (
    <>
        <div className="transaction_modal p-5" style={{position:"relative"}}>
            <div className="transaction_modal_header">
                <h4 style={{fontSize:"26px",fontWeight:"500"}}>Transaction <span className='text-danger'>Details </span></h4>
                <p style={{fontSize:"0.9rem", fontWeight:"500",color: "#384656"}}>Add transaction details to get the booking confirmation</p>
            </div>
            <div className="modal_cancel_icon" style={{position:"absolute", right:"-29px",top:"0px",cursor:"pointer"}}>
                <VscClose size={22} color='#fff' onClick={() => handleClose()} />
            </div>
            <div className="transaction_modal_body" >
            <div className="modal_value" style={{marginTop:"30px",position:"relative",color: "#67788E"}}>
                {/* <label htmlFor="inputtransaction" className='form-label'>Transaction ID</label>
                <input 
                    type="text"
                    className='form-control ps-5 shadow-none'
                    placeholder='Enter transaction ID'
                />
                <div style={{position:"absolute", left:"13px", bottom:"12%" }}>
                    <img src={bankIcon} className='img-fluid'/>
                </div> */}
                <Form layout="vertical" autoComplete="off">
                                <Form.Item
                                    hasFeedback
                                    label="Transaction ID"
                                    name="transactionID"
                                    validateTrigger="onBlur"
                                >
                                    <Input size="large" placeholder="Enter transaction ID" prefix={<img src={bankIcon}></img>} />
                                </Form.Item>
                </Form>
            </div>
            <div className="modal_upload_content mt-3">
                <h6>Upload Transaction Recepit</h6>
                <Dragger style={{width:"100%", padding:"15px",gap:"12px", background:"#ffff"}} >
                            <p className="ant-upload-drag-icon">
                            <img src={dropIcon} alt=" no-Img" />
                            </p>
                            <p className="ant-upload-text">Drag & Drop anywhere in this area or <Link className="text-decoration-none">Click Here</Link></p>
                            <p className="ant-upload-hint">
                            File formats: PDF, JPEG, Word, PNG (Max file size: 2 MB).
                            </p>
                </Dragger>
                </div>
                <div className="modal_confirm_button flex-center-center mt-3">
                        <button className='confirm_btn'>Confirm <span className='mx-1'><BsArrowRightCircleFill /></span></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default TransactionModal