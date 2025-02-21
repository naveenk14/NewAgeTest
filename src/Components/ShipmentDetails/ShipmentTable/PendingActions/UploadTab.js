import React from 'react'
import CargoRequirements from '../PendingActions/UploadDocuments/CargoRequirements'
import DocumentType from '../PendingActions/UploadDocuments/DocumentType'
import UploadDocuments from '../PendingActions/UploadDocuments/UploadDocuments'
import { Link } from 'react-router-dom'
import { HiArrowRightCircle } from 'react-icons/hi2'

const UploadTab = () => {
  return (
    <div className='upload_section' style={{margin:"0px 12px"}}>
              <DocumentType />
              <UploadDocuments />
              <CargoRequirements />
              <div className="row">
                  <div className="btn_save_group d-flex align-items-center">
                      <Link className='btn_save ms-auto disabled' > Next <span className='ms-2'><HiArrowRightCircle size={22} color='white' /></span></Link>
                  </div>
              </div>  
    </div>
  )
}

export default UploadTab