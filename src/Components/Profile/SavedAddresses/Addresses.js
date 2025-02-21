import React, { useState } from 'react'
import './Addresses.css'
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './Addresses.css';
import vectorIcon from '../../../assets/Vector.svg'
import vector1Icon from '../../../assets/Vector.svg'
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { GlobalOutlined } from '@ant-design/icons';
import Modal from '../../ShipmentDetails/ShipmentTable/Modal/Modal';
import AddressesModal from '../Modals/AddressesModal';
import AddressTitleModal from '../Modals/AddressTitleModal';
import { Dropdown, MenuProps } from 'antd';



const Addresses = () => {
  const [addressModal, setAddressModal] = useState(false)
  const [addressTitle, setAddressTitle] = useState(false)


  const items = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" onClick={() => setAddressModal(true)}>
          Edit
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" onClick={() => setAddressModal(true)}>
          Mark as default
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" onClick={() => setAddressModal(true)}>
           Delete
        </a>
      ),
    },
  ];

  return (
    <div className='address_content'>
        <div className="header_manage_account" style={{position:"relative"}}>
            <p className='m-0'>Manage Your Accounts</p>
            <p className='m-0'>All your saved addresses can be managed from this page. select any address to mark as default.</p>
            <div className="plus_icon">
             <Link className='text-decoration-none'><span style={{color:"#181E25"}} onClick={() => setAddressModal(true)}><FaPlus className='me-1' size={14} />Add More</span></Link>
            </div>
        </div>
        <div className="header_branch_address mt-3" style={{position:"relative"}}>
          <div className='d-flex justify-content-between align-items-center' style={{ marginBottom: "11px"}}>
            <p className='m-0'>Mumbai Branch Address <span className='mx-2 default_bt'>Default</span></p>
            <span className='m-0 dot_icon'>
              <Link className='text-decoration-none' style={{color:"#384656"}}>
                <Dropdown
                    menu={{
                      items,
                    }}
                    placement="bottomRight"
                >
                    <PiDotsThreeVerticalBold size={16} />
                </Dropdown>
              </Link>
            </span>
          </div>
          <p className='m-0'>John Doe <span className='mx-2'>(ABC Enterprise)&nbsp;&nbsp;&nbsp;A-202 , BKC , Mumbai , 400 001 , India</span></p>
          <div className="icon_address mt-2">
            <img src={vectorIcon} className='me-2' />
              <span className='me-3'>email@gamil.com</span>
              <GlobalOutlined className='me-1' />
              <span className='me-3'> +91 9876454321</span>
            <img src={vector1Icon} className='me-2'/>
              <span>123456</span>
          </div>
        </div>
        <div className="border border-bottom mt-2"></div>
          <div className="goa_branch_address mt-3">
          <div className='d-flex justify-content-between align-items-center' style={{ marginBottom: "11px"}}>
            <p className='m-0'>Goa Branch Address</p>
            <span className='m-0 dot_icon'>
              <Link className='text-decoration-none' style={{color:"#384656"}}>
                <Dropdown
                    menu={{
                      items,
                    }}
                    placement="bottomRight"
                >
                    <PiDotsThreeVerticalBold size={16} />
                </Dropdown>
             </Link>
            </span>
          </div>
            <p className='m-0'>John Doe <span className='mx-2'>(ABC Enterprise)&nbsp;&nbsp;&nbsp;A-202 , BKC , Mumbai , 400 001 , India</span></p>
          <div className="icon_adress mt-2">
              <img src={vectorIcon} color='red' className='me-2' />
              <span className='me-3'>email@gamil.com</span>
              <GlobalOutlined className='me-1' />
              <span className='me-3'> +91 9876454321</span>
              <img src={vector1Icon} className='me-2'/>
              <span>123456</span>
          </div>
        </div>
        <div className="border border-bottom mt-2"></div>
          <div className="goa_branch_address mt-3">
          <div className='d-flex justify-content-between align-items-center' style={{ marginBottom: "11px"}}>
            <p className='m-0'>Pune Branch Address</p>
            <span className='m-0 dot_icon'>
              <Link className='text-decoration-none' style={{color:"#384656"}}>
                <Dropdown
                  menu={{
                    items,
                  }}
                  placement="bottomRight"
                >
                  <PiDotsThreeVerticalBold size={16} />
                </Dropdown>
              </Link>
            </span>
          </div>
            <p className='m-0'>John Doe <span className='mx-2'>(ABC Enterprise)&nbsp;&nbsp;&nbsp;A-202 , BKC , Mumbai , 400 001 , India</span></p>
          <div className="icon_adress mt-2">
              <img src={vectorIcon} className='me-2' />
              <span className='me-3'>email@gamil.com</span>
              <GlobalOutlined className='me-1' />
              <span className='me-3'> +91 9876454321</span>
              <img src={vector1Icon} className='me-2'/>
              <span>123456</span>
          </div>
        </div>
        <div className="border border-bottom mt-2 mb-2"></div>
        <AddressesModal open={addressModal} setAddressModal={setAddressModal} setAddressTitle={setAddressTitle} close={() => setAddressModal(false)}/>
        <AddressTitleModal  open={addressTitle} setAddressTitle= {setAddressTitle} close={() => setAddressTitle(false)}/>

    </div>
  )
}
export default Addresses