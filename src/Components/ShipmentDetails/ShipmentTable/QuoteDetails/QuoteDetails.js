import React from 'react'
import './QuoteDetails.css'
import 'primeicons/primeicons.css';
import { HiArrowDownTray } from 'react-icons/hi2';

const QuoteDetails = () => {



  return (
    <div className='Shipment_quote container-fluid'>
    <div className='d-flex' style={{ justifyContent: 'space-between' }}>
        <p className='ref'>
            Reference ID : #2075730
        </p>
       <div className="download_icon d-flex align-items-start justify-content-start">
        <span className='me-2'><HiArrowDownTray /> </span>
        <p className='m-0' style={{ textDecorationLine: 'underline' }}> Download PDF</p>
       </div>
        
    </div>

    <div className='table-responsive'>
        <table class="table" >
            <thead>
                <tr>
                    <th className='break'>Charges Breakup</th>
                    <th className='descrip'>Description</th>
                    <th className='amount'>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='origincharge'>Origin Charges</td>
                    <td></td>
                    <td className='one'>$100</td>
                </tr>
                <tr>
                    <td className='pickupcharge ps-4'>Pickup Charges</td>
                    <td className='lorem'>Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus.</td>
                    <td className='fifty'>$55</td>
                </tr>
                <tr>
                    <td className='Issuance ps-4'>B/L Issuance</td>
                    <td className='lorem'>Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus.</td>
                    <td className='four'>$45</td>
                </tr>
                <tr>
                    <td className='Freight'>International Freight Charges</td>
                    <td></td>
                    <td className='eight'>$80</td>
                </tr>
                <tr>
                    <td className='destination'>Destination Charges</td>
                    <td></td>
                    <td className='twenty'>$120</td>
                </tr>
                <tr>
                    <td className='handling ps-4'>Handling Charges</td>
                    <td className='lorem'>Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus.</td>
                    <td className='six'>$60</td>
                </tr>
                <tr>
                    <td className='custom ps-4'>Import Custom Clearance</td>
                    <td className='lorem'>Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus.</td>
                    <td className='three'>$30</td>
                </tr>
                <tr>
                    <td className='delivery ps-4'> Delivery Charges</td>
                    <td className='lorem'>Lorem ipsum dolor sit amet consectetur. Gravida id amet id maecenas tellus.</td>
                    <td className='three'>$30</td>
                </tr>
                <tr className='total'>
                    <th className='totalamount'>Total amount :</th>
                    <th></th>
                    <th className='one'>$300 (USD)</th>
                </tr>
            </tbody>
        </table>
    </div>
</div>
  )
}

export default QuoteDetails