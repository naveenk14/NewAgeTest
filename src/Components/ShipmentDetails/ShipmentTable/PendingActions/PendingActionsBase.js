import React from 'react'
import StepperColumn from '../Track/StepperColumn'
import './PendingActionsBase.css'
import ShipperDetails from './Shipment/ShipperDetails'
import ConsigneeDetails from './Shipment/ConsigneeDetails'
import PickupDetails from './Shipment/PickupDetails'
import DeliveryDetails from './Shipment/DeliveryDetails'
import UploadDocument from './UploadDocuments/DocumentType'
import CargoRequirements from './UploadDocuments/CargoRequirements'
import DocumentType from './UploadDocuments/DocumentType'
import UploadDocuments from './UploadDocuments/UploadDocuments'
import { HiArrowRightCircle } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import Payment  from '../PendingActions/Payment/Payment'
import AgeingDetails from './Payment/AgeingDetails'
import PaymentDetailBox from './Payment/PaymentDetailBox'
import Approval from './Approval/Approval'

const PendingActionsBase = () => {

        const steps = [
            {
                step:'Shipment Details',
            },
            {
                step:'Upload Document',
            },
            {
                step:'Payment',
            },
            {
                step:'Approvals',
            },
            
            
        ]

  return (
    <div>
        <div className="container-fluid shipment_base">
            <div className="row">
                <div className="col-2 sidebar" style={{borderRight: "1px solid #f0f0f0"}}>
                        <StepperColumn step={steps} />
                </div>
                <div className="col-10">
                        <div className="shipper_section px-3">
                            <ShipperDetails />
                            <ConsigneeDetails />
                            <PickupDetails />
                            <DeliveryDetails />
                        </div>
                        <div className="upload_section px-3">
                            <DocumentType />
                            <UploadDocuments />
                            <CargoRequirements />
                            <div className="row">
                                <div className="btn_save_group d-flex align-items-center">
                                    <Link className='btn_save ms-auto'>Save & Next <span className='ms-2'><HiArrowRightCircle size={22} color='white' /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="payment_section px-3">
                            <PaymentDetailBox />
                            <Payment />
                            <AgeingDetails />
                            <Approval />
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PendingActionsBase