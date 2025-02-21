import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import { Typography } from 'antd'
import React from 'react'
import ShipmentHeader from '../ShipmentHeader'
import ShipmentBase from '../ShipmentBase'
import ShipmentTable from '../ShipmentTable'

const ShipmentDetailsModal = ({open,close}) => {
    


  return (
    <Dialog
        open={open}
        onClose={close}
        aria-labelledby="responsive-dialog-title"
        id="edit_profile_modal_section"
        maxWidth="lg"
        fullWidth={true}
      >
        <DialogContent>
           {/* <ShipmentHeader />
           <ShipmentTable contentListNoTitle={contentListNoTitle} tabListNoTitle={tabListNoTitle}  /> */}
        </DialogContent>
      </Dialog>
  )
}

export default ShipmentDetailsModal