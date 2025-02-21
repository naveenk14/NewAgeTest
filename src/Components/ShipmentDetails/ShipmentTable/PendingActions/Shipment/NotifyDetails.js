import React, { useState } from 'react'
import './ShipperDetails.css'
import { Form, Input } from 'antd'
import { HiArrowRightCircle,  HiOutlineGlobeAsiaAustralia } from 'react-icons/hi2'
import { MdOutlineMail } from 'react-icons/md'
import { FiFlag } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { GlobalOutlined } from '@ant-design/icons'
import user from '../../../../../assets/Name.svg'
import office from '../../../../../assets/Company Name.svg'
import zipcode from '../../../../../assets/Zip Code.svg'
import taxid from '../../../../../assets/Tax ID.svg'
import address from '../../../../../assets/Address.svg'
import email from '../../../../../assets/Email.svg'
import phone from '../../../../../assets/PhoneGlobe.svg'
import city from '../../../../../assets/City.svg'
import country from '../../../../../assets/Country.svg'
import Edit from '../../../../../assets/Edit.svg'
import Tick from '../../../../../assets/Component 27.svg'
import CustomCheckBox from '../../Track/CustomCheckBox'
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'

const NotifyDetails = ({openNotify,setOpenNotify,setOpenPickup}) => {

    // const [view,setView] = useState(true)
    const [notifyinputs,setNotifyinputs] = useState(
        {
            name:"",
            companyname:"",
            email:"",
            phonenumber:"",
            address:"",
            city:"",
            zipcode:"",
            taxid:"",
            country:""
        }
    
    )

    // This is for AlreadyExist data
    const [apiData,setApiData] = useState({
            name:"nks",
            companyname:"nks",
            email:"nks",
            phonenumber:"nks",
            address:"nks",
            city:"nks",
            zipcode:"nks",
            taxid:"nks",
            country:"nks"
    })

    const obj = Object.entries(apiData)
    let isNotViewable = false
    let isReadOnly = false


    for(const [key] of obj){
        if(apiData[key]==="")
            isNotViewable = true
        else{
            isReadOnly=true
        }
   }

    const handleChange =(e)=>{
        setNotifyinputs((prev)=>{
            return {
                ...prev,[e.target.name]:e.target.value
            }
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(notifyinputs)
        setOpenNotify(false)
        setOpenPickup(true)
    }

    //Function to trigger an Next Logic
    const handleNext = () =>{
        console.log("clicked")
        setOpenNotify(false)
        setOpenPickup(true)
    }

  return (
    <div className='notify_section' >
    <div className="row delivery_section_row mx-1">
        <div className="col-12 p-0 d-flex justify-content-between align-items-center mb-2">
            <div className="left_details d-flex align-items-start">
                <span className='me-2'>3</span>
                <div className="Shipper_title">
                    <p className='m-0 mb-2'>Notify Details</p>              
                    {/* This is for Change the description according to input values */}
                    {
                        isNotViewable && <p className='m-0'>Enter notify details</p>
                    }
                </div>
            </div>
            <div className="right_details me-4">
                    <img className='me-2' src={Tick} alt="complete" />
                    {/* <img src={Edit} alt="edit"  onClick={()=>setOpenNotify((prev)=>!prev)} style={{cursor:"pointer"}} /> */}
                    {/* {
                        !open ? <BiSolidDownArrow onClick={()=>setOpenNotify((prev)=>!prev)} style={{cursor:"pointer"}} />:
                        <BiSolidUpArrow onClick={()=>setOpenNotify((prev)=>!prev)} style={{cursor:"pointer"}} />
                    } */}
                    
                    {/* This is for Changing the Icon According to Input values*/}
                    {
                    !isNotViewable?
                        !openNotify ? <BiSolidDownArrow size={16} onClick={()=>setOpenNotify((prev)=>!prev)} style={{cursor:"pointer"}} />:
                        <BiSolidUpArrow size={16} onClick={()=>setOpenNotify((prev)=>!prev)} style={{cursor:"pointer"}} />
                    :
                     <img src={Edit} alt="edit"  onClick={()=>setOpenNotify((prev)=>!prev)} style={{cursor:"pointer"}} />
                   }
            </div>
        </div>
        {
            openNotify && 
            <>        
                <div className="row" style={{padding:"0px 18px"}}>
                    {/* <div className="row w-100 mb-3">
                        <div className="col-6 my-2">
                            <CustomCheckBox children={"Same as consignee"} styleofChild={{fontWeight:"400",color:"#181E25",fontSize:"14px",LineHeight:"24px",letterSpacing:".01em"}} />
                        </div>
                        <div className="col-6">
                            <p className="m-0 add_saved_address">+ Add From Saved Addresses</p>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-6">
                        <Form layout="vertical" autoComplete="off">
                            <Form.Item
                                hasFeedback
                                label="Name"
                                name="Name"
                                validateTrigger="onBlur"
                                rules={[{
                                    required: true,
                                    },]}
                                >
                                <Input size="large" placeholder="Type here" prefix={<img src={user}></img>} name="name" disabled={isReadOnly} defaultValue={apiData?.name} value={notifyinputs.name} onChange={handleChange} />
                            </Form.Item>
                        </Form>
                        </div>
                        <div className="col-6">
                        <Form layout="vertical" autoComplete="off">
                            <Form.Item
                                hasFeedback
                                label="Company Name"
                                name="Company Name"
                                validateTrigger="onBlur"
                                rules={[{
                                    required: true,
                                    },]}
                                >
                                <Input size="large" placeholder="Type here" prefix={<img src={office}></img>} name="companyname" disabled={isReadOnly} defaultValue={apiData?.companyname} value={notifyinputs.companyname} onChange={handleChange} />
                            </Form.Item>
                        </Form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                        <Form layout="vertical" autoComplete="off">
                            <Form.Item
                                hasFeedback
                                label="Email"
                                name="Email"
                                validateTrigger="onBlur"
                                rules={[{
                                    required: true,
                                    },]}
                                >
                                <Input size="large" placeholder="Johndee@gmail.com" prefix={<img src={email}></img>} name="email" disabled={isReadOnly} defaultValue={apiData?.email} value={notifyinputs.email} onChange={handleChange} />
                            </Form.Item>
                            </Form>
                        </div>
                        <div className="col-6">
                            <Form layout="vertical" autoComplete="off">
                                <Form.Item
                                    hasFeedback
                                    label="Phone Number"
                                    name="Phone Number"
                                    validateTrigger="onBlur"
                                    rules={[{
                                    required: true,
                                    },]}
                                    >
                                    <Input size="large" placeholder="Mobile Number" prefix={<img src={phone}></img>} name="phonenumber" disabled={isReadOnly} defaultValue={apiData?.phonenumber} value={notifyinputs.phonenumber} onChange={handleChange} />
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Form layout="vertical" autoComplete="off">
                                <Form.Item
                                    hasFeedback
                                    label="Address"
                                    name="Address"
                                    validateTrigger="onBlur"
                                    rules={[{
                                    required: true,
                                    },]}
                                    >
                                    <Input size="large" placeholder="Lorem Ipsum" prefix={<img src={address}></img>} name="address" disabled={isReadOnly} defaultValue={apiData?.address} value={notifyinputs.address} onChange={handleChange} />
                                </Form.Item>
                            </Form>
                        </div>
                        <div className="col-6">
                        <Form layout="vertical" autoComplete="off">
                            <Form.Item
                                hasFeedback
                                label="City"
                                name="City"
                                validateTrigger="onBlur"
                                rules={[
                                    {
                                    required: true,
                                    },
                                ]}
                                >
                                <Input size="large" placeholder="Type here" prefix={<img src={city}></img>} name="city" disabled={isReadOnly} defaultValue={apiData?.city} value={notifyinputs.city} onChange={handleChange} />
                            </Form.Item>
                        </Form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Form layout="vertical" autoComplete="off">
                                <Form.Item
                                    hasFeedback
                                    label="Zipcode"
                                    name="Zipcode"
                                    validateTrigger="onBlur"
                                    rules={[{
                                    required: true,
                                    },]}
                                    >
                                    <Input size="large" placeholder="Type here" prefix={<img src={zipcode}></img>} name="zipcode" disabled={isReadOnly} defaultValue={apiData?.zipcode} value={notifyinputs.zipcode} onChange={handleChange} />
                                </Form.Item>
                            </Form>
                        </div>
                        <div className="col-6">
                        <Form layout="vertical" autoComplete="off">
                            <Form.Item
                                hasFeedback
                                label="Tax ID"
                                name="Tax ID"
                                validateTrigger="onBlur"
                                rules={[{
                                    required: true,
                                    },]}
                                >
                                <Input size="large" placeholder="Type here" prefix={<img src={taxid}></img>} name="taxid" disabled={isReadOnly} defaultValue={apiData?.taxid} value={notifyinputs.taxid} onChange={handleChange} />
                            </Form.Item>
                        </Form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                        <Form layout="vertical" autoComplete="off">
                            <Form.Item
                                hasFeedback
                                label="Country"
                                name="Country"
                                validateTrigger="onBlur"
                                rules={[{
                                    required: true,
                                    },]}
                                >
                                <Input size="large" placeholder="Type here" prefix={<img src={country}></img>} name="country" disabled={isReadOnly} defaultValue={apiData?.country} value={notifyinputs.country} onChange={handleChange} />
                            </Form.Item>
                        </Form>
                        </div>
                        <div className="col-6">
                        </div>
                    </div>
                </div>
                <div className="row" style={{padding:"0px 41px"}}>
                    <div className="btn_save_group d-flex align-items-center">
                    {/*This is for Change Button Behaviour according to input values */}
                    {
                            !isNotViewable ?<Link onClick={()=>handleNext()} className='btn_save ms-auto'>Next<span className='ms-2'><HiArrowRightCircle size={22} color='white' /></span></Link>:
                        
                        <Link onClick={(e)=>handleSubmit(e)} className='btn_save ms-auto'>Save & Next<span className='ms-2'><HiArrowRightCircle size={22} color='white' /></span></Link>
                        }
                        {/* <Link className='btn_save ms-auto'>Next<span className='ms-2'><HiArrowRightCircle size={22} color='white' /></span></Link> */}
                    </div>
                </div>
            </>
        }
    </div>
</div>
  )
}

export default NotifyDetails