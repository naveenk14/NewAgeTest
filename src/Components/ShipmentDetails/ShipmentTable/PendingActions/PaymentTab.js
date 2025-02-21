import React, { useState } from 'react'
import PaymentDetailBox from '../PendingActions/Payment/PaymentDetailBox';
import ViewCredit from './Payment/ViewCredit';

const PaymentTab = () => {

  const [open,setOpen] = useState(false)
  return (
            <div className='payment_section'>
              <PaymentDetailBox setOpen={setOpen} />
              {
                open && <ViewCredit open={open} setOpen={setOpen} />
              }

           </div>
  )
}

export default PaymentTab