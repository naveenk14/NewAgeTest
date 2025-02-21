import React, { useState } from 'react'
import './KeyAccountManagers.css'
import AccountBox from './AccountBox'
import Modal from '../../ShipmentDetails/ShipmentTable/Modal/Modal'
import CreatePasswordModal from '../Modals/CreatePasswordModal'
import copyIcon from '../../../assets/profile_copy_icon.svg'
import { useCopyToClipboard } from 'usehooks-ts'
import { Button, Popover, Tooltip } from 'antd'
import { IoCopy } from "react-icons/io5";

const KeyAccountManagers = ({profileData}) => {

  const [open, setOpen] = useState(false) 
  const [value,copy] = useCopyToClipboard()
  console.log("value",value)

  console.log("KeyAccount",profileData?.profileData?.userdetails?.managers)
  const keyManagerArray = profileData?.profileData?.userdetails?.managers


  const tableData = [
    {
      name:"Waseem",
      designation:"Sales",
      phone:"12345878802",
      emailid:"waseem.freightsystems.com"
    },
    {
      name:"Akram",
      designation:"Customer Service",
      phone:"12345678901",
      emailid:"Akram.freightsystems.com"
    }
  ]

  return (
    // <>
    //     <div className="manage_accounts_description">
    //         <p className='m-0'>Manage Your Accounts</p>
    //         <p className='m-0'>All your social media accounts used to login can be managed from this page</p>
    //     </div>
    //     <AccountBox setOpen={setOpen} />
    //     <Modal isOpen={open} width="560px">
    //         <CreatePasswordModal setOpen={setOpen} />
    //     </Modal>
    // </>
    <div className='Key_account_content'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>Phone #</th>
              <th>Email Id</th>
            </tr>
          </thead>
          <tbody>
            {
              keyManagerArray?.map((item,index)=>{
                return <tr key={index}>
                        <td>{item?.name?.length <= 20 ? (
                              item?.name
                            ) : (
                              <Tooltip placement="topLeft" zIndex={9999} title={item?.name}>
                                <span role="button">
                                  {item?.name?.slice(0, 19).trim().split("").join("") +
                                    "..."}
                                </span>
                              </Tooltip>
                            )}</td>
                        <td>{item?.designation?.length <= 20 ? (
                              item?.designation
                            ) : (
                              <Tooltip placement="topLeft" zIndex={9999} title={item?.designation}>
                                <span role="button">
                                  {item?.designation?.slice(0, 19).trim().split("").join("") +
                                    "..."}
                                </span>
                              </Tooltip>
                            )}</td>
                        <td>{item?.phone?.length <= 20 ? (
                              item?.phone
                            ) : (
                              <Tooltip placement="topLeft" zIndex={9999} title={item?.phone}>
                                <span role="button">
                                  {item?.phone?.slice(0, 19).trim().split("").join("") +
                                    "..."}
                                </span>
                              </Tooltip>
                            )}
                            {/* <Tooltip title={disabled ? '' : 'Text Copied !'}></Tooltip> */}
                            {
                              
                              value===item?.phone ?
                              <>
                              {/* <IoCopy className='mx-1' style={{cursor:"pointer"}} onClick={()=>{copy(item?.emailid)}} color='black' /> */}
                              
                                {/* <IoCopy className='mx-1' style={{cursor:"pointer"}} onClick={()=>{copy(item?.phone)}} color='black' /> */}
                                <Tooltip title={!value ? '' : 'Text Copied !'}><IoCopy className='mx-1' style={{cursor:"pointer"}} onClick={()=>{copy(item?.phone)}} color='rgb(177 186 203)' /></Tooltip>
                              
                            </>:<IoCopy className='mx-1' style={{cursor:"pointer"}} onClick={()=>copy(item?.phone)} color='rgb(177 186 203)' />
                            }
                          {/* <img src={copyIcon} style={{cursor:"pointer"}} onClick={()=>copy(item?.phone)} className='mx-1'/> */}
                        </td>
                        <td>{item?.mail_id?.length <= 35 ? (
                              item?.mail_id
                            ) : (
                              <Tooltip placement="topLeft" zIndex={9999} title={item?.mail_id}>
                                <span role="button">
                                  {item?.mail_id?.slice(0, 34).trim().split("").join("") +
                                    "..."}
                                </span>
                              </Tooltip>
                            )}
                            {
                              value===item?.mail_id ?
                              <>
                                {/* <IoCopy className='mx-1' style={{cursor:"pointer"}} onClick={()=>{copy(item?.mail_id)}} color='black' /> */}
                                <Tooltip title={!value ? '' : 'Text Copied !'}>
                                  <IoCopy className='mx-1' style={{cursor:"pointer"}} onClick={()=>{copy(item?.mail_id)}} color='rgb(177 186 203)' />
                                </Tooltip>
                              </>
                             :<IoCopy className='mx-1' style={{cursor:"pointer"}} onClick={()=>copy(item?.mail_id)} color='rgb(177 186 203)' />
                            }
                            </td>
                            {/* <img src={copyIcon} onClick={()=>copy(item?.mail_id)} style={{cursor:"pointer",opacity:".2"}} className='mx-1'/> */}
                      </tr>
              })
            }
            {/* <tr> */}
              {/* <td>{item?.billing_party_name.length <= 56 ? (
                    item?.billing_party_name
                  ) : (
                    <Tooltip placement="topLeft" zIndex={9999} title={item?.billing_party_name}>
                      <span role="button">
                        {item?.billing_party_name?.slice(0, 57).trim().split("").join("") +
                          "..."}
                      </span>
                    </Tooltip>
                  )}</td> */}
              {/* <td>Sales</td>
              <td>123456789015756767
                <img src={copyIcon} style={{cursor:"pointer"}} onClick={()=>copy("123456789015756767")} className='mx-1'/>
              </td>
              <td>waseem.freightsystems.com <img src={copyIcon} onClick={()=>copy("waseem.freightsystems.com ")} style={{cursor:"pointer"}} className='mx-1'/></td>
            </tr>
            <tr>
              <td>Akram</td>
              <td>Customer Service</td>
              <td>12345678901
                <img src={copyIcon} onClick={()=>copy("12345678901")} style={{cursor:"pointer"}} alt="" className='mx-1'/>
              </td>
              <td>Akram.freightsystems.com<img src={copyIcon} onClick={()=>copy("Akram.freightsystems.com<img")} style={{cursor:"pointer"}} className='mx-1'/></td>
            </tr> */}
          </tbody>
      </div>
  )
}

export default KeyAccountManagers