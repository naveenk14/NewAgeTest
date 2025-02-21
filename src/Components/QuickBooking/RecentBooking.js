import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import SearchButton from '../Core-Components/SearchButton';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const RecentBooking = ({ show, onClose }) => { 

 
 
  return (
    <React.Fragment>
      <Dialog
        open={show}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="large"
      >
        <div className='m-5'>
        <DialogTitle><Typography variant='h4' className='fw-bold mt-5'>Recent Bookings</Typography>
        <Typography variant='p' >Speed up your booking process by reusing details from your recent bookings</Typography></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <SearchButton children="Search Mode, Shipper, Consignee, POL, POD, Commodity"/>
          <table className="table text-center fw-bold table-striped mt-5">
          <thead className="bg-dark fw-semi-bold">
              <th>Select</th>
              <th>Mode</th>
              <th>Shipper</th>
              <th>Consignee</th>
              <th>POL</th>
              <th>POD</th>
              <th>Commodity</th>
          </thead>
          <tbody>
            <tr>
              <td><input type='radio'/></td>
              <td>LCL</td>
              <td>BIG CAR</td>
              <td>CNSHA-INNSA</td>
              <td>30-Dec-23</td>
              <td>20-Jan-24</td>
              <td>Booking in Progress</td>
            </tr>
          </tbody>
        </table>
        
          </DialogContentText>
          <Pagination count={10} size="large" style={{justifyItems:'end'}}/>
        </DialogContent>
        <DialogActions>
          <button className='btn bg-dark text-white px-3 fs-4' style={{borderRadius:'14px'}}>No, Continue as New Booking</button>
          <button className='btn text-white px-3 fs-4' style={{borderRadius:'14px', background:'#f44336'}}>Yes, Proceed</button>
        </DialogActions></div>
      </Dialog>
    </React.Fragment>
  );
}
export default RecentBooking