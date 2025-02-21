import React, { useState } from 'react'
import ShipperDetails from './Shipment/ShipperDetails'
import ConsigneeDetails from './Shipment/ConsigneeDetails'
import PickupDetails from './Shipment/PickupDetails'
import DeliveryDetails from './Shipment/DeliveryDetails'
import NotifyDetails from './Shipment/NotifyDetails'

const ShipperTab = () => {

  const [incoterm,setIncoterm] = useState(true)

  const[openShipper,setOpenShipper] = useState(false)
  const[openConsignee,setOpenConsignee] = useState(false)
  const[openNotify,setOpenNotify] = useState(false)
  const[openDelivery,setOpenDelivery] = useState(false)
  const[openPickup,setOpenPickup] = useState(false)

  return (
    <div className='shipper_section'>
              <ShipperDetails openShipper={openShipper} setOpenShipper={setOpenShipper} setOpenConsignee={setOpenConsignee} />
              <ConsigneeDetails openConsignee={openConsignee} setOpenConsignee={setOpenConsignee} setOpenNotify={setOpenNotify} />
              <NotifyDetails openNotify={openNotify} setOpenNotify={setOpenNotify} setOpenPickup={setOpenPickup} />
              {
                incoterm && 
                <>
                  <PickupDetails openPickup={openPickup} setOpenPickup={setOpenPickup} setOpenDelivery={setOpenDelivery} />
                  <DeliveryDetails openDelivery={openDelivery} setOpenDelivery={setOpenDelivery} />
                </>
              }
    </div>
  )
}

export default ShipperTab