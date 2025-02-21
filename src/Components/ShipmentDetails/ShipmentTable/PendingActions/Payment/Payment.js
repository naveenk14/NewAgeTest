import React from 'react'
import './Payment.css'
import totalSpent from '../../../../../assets/credit.png'
import limitImg from '../../../../../assets/limit.png'
import creditImg from '../../../../../assets/Frame 427319177.png'
import { Link } from 'react-router-dom'

const Payment = () => {
  return (
    <div className='credit_section py-4' >
        <div className="row mx-1">
            <div className="col-12">
                <div className="left_details d-flex align-items-start">
                    <div className="credit_title">
                        <p className='m-0'>My Credit</p>
                        <p className='m-0'>Not enough money for booking? No worries You can make payments using the credit issued to you.</p>
                    </div>
                </div>
                <div className="right_details">
                      <div className="row my-3" style={{whiteSpace:"nowrap"}}>
                          <div className="col-3 d-flex flex-row align-items-center">
                            <img src={limitImg} alt="" className='me-3' />
                            <div className='my_credit_content'>
                              <p className="m-0">Credit Limit</p>
                              <p className="m-0">15000 <span>AED</span></p>
                            </div>
                          </div>
                          <div className="col-3 d-flex flex-row align-items-center">
                            <img src={creditImg} alt="" className='me-3' />
                            <div className='my_credit_content'>
                              <p className="m-0">Credit Balance</p>
                              <p className="m-0">3000 <span>AED</span></p>
                            </div>
                          </div>
                          <div className="col-3 d-flex flex-row align-items-center">
                            <img src={totalSpent} alt="" className='me-3' />
                            <div className='my_credit_content'>
                              <p className="m-0">Total Due Amount</p>
                              <p className="m-0">10000 <span>AED</span></p>
                            </div>
                          </div>
                          <div className="col-3 d-flex flex-row align-items-center">
                            <img src={totalSpent} alt="" className='me-3' />
                            <div className='my_credit_content'>
                              <p className="m-0">Overdue Amount</p>
                              <p className="m-0">2000 <span>AED</span></p>
                            </div>
                          </div>
                      </div>
                      <div className="row">
                        <div className="btn_save_group d-flex align-items-center">
                            <Link className='btn_save ms-auto'>Request More Credit</Link>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Payment