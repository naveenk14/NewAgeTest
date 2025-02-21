import React from 'react'
import { GoDownload } from 'react-icons/go'
import { Link } from 'react-router-dom'

const AgeingDetails = () => {
  return (
    <div className='ageing_section py-4' >
    <div className="row mx-1">
        <div className="col-12">
            <div className="left_details d-flex align-items-start">
                <div className="ageing_title">
                    <p className='m-0'>Ageing + Outstanding details </p>
                    <p className='m-0'>Total Outstanding Amount : 10000 AED</p>
                </div>
            </div>
            <div className="right_details">
                  <div className="row my-3" style={{whiteSpace:"nowrap"}}>
                      <div className="col-2 d-flex flex-row align-items-center justify-content-center">
                        <div className='ageing_content'>
                          <p className="m-0">0 - 30 Days</p>
                          <p className="m-0">15000 <span>AED</span></p>
                        </div>
                      </div>
                      <div className="col-2 d-flex flex-row align-items-center justify-content-center">
                        <div className='ageing_content'>
                          <p className="m-0">31 - 60 Days</p>
                          <p className="m-0">3000 <span>AED</span></p>
                        </div>
                      </div>
                      <div className="col-2 d-flex flex-row align-items-center justify-content-center">
                        <div className='ageing_content'>
                          <p className="m-0">61 - 90 Days</p>
                          <p className="m-0">10000 <span>AED</span></p>
                        </div>
                      </div>
                      <div className="col-2 d-flex flex-row align-items-center justify-content-center">
                        <div className='ageing_content'>
                          <p className="m-0">91 - 120 Days</p>
                          <p className="m-0">2000 <span>AED</span></p>
                        </div>
                      </div>
                      <div className="col-2 d-flex flex-row align-items-center justify-content-center">
                        <div className='ageing_content'>
                          <p className="m-0">Over 120 Days</p>
                          <p className="m-0">2000 <span>AED</span></p>
                        </div>
                      </div>
                      <div className="col-2 d-flex flex-row align-items-center justify-content-center">
                        <div className='ageing_content'>
                          <p className="m-0">Unadjusted </p>
                          <p className="m-0">2000 <span>AED</span></p>
                        </div>
                      </div>
                  </div>
                  <div className="row">
                    <div className="btn_save_group d-flex align-items-center">
                        <Link className='btn_save ms-auto'><span><GoDownload className='me-2' /></span>Ageing + O/S report</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default AgeingDetails