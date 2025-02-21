import { Button, Flex, Form, Input } from 'antd'
import React, { useState } from 'react'
import './AddressesModal.css'
import { VscClose } from 'react-icons/vsc'
import user from '../../../assets/Name.svg'
import office from '../../../assets/Company Name.svg'
import email from '../../../assets/Email.svg'
import phone from '../../../assets/PhoneGlobe.svg'
import tax from '../../../assets/Tax ID.svg'
import { LuBox } from "react-icons/lu";
import { Dialog, DialogContent,DialogTitle } from '@mui/material'

const AddressesModal = ({open,close,setAddressModal, setAddressTitle}) => {

  const [addressinputs, setAddressinputs] = useState(
    {
     name:"",
     company_name:"",
     email:"",
     phone_number:"",
     tax_id:"",
     country:"",
     address:"",
     code:"",
     city:""
    }
)
// console.log(addressinputs)

const handleSubmit = () =>{
  setAddressModal(false)
  setAddressTitle(true)
}

  const handleChange =(e)=>{
    setAddressinputs((prev)=>{
        return {
            ...prev,[e.target.name]:e.target.value
        }
    })
}
  return (
        <Dialog 
          open= {open}
          onClose ={close}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          id='address_modal'
        >
        <DialogTitle id="alert-dialog-title">
          <p className='p-1' style={{
              fontWeight:"600",
              fontSize:"19px",
              lineHeight:"24px",
              letterSpacing:".01em",
              color:"#181E25",
          }}>Add New Address</p>
          <VscClose size={22} color='#ffff' onClick={close} style={{position:"absolute",top:"0px",right:"-25px",cursor:"pointer"}} />
        </DialogTitle> 
        
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-description"> */}
              <div className="row address_modal_row" style={{display:"flex", justifyContent:"space-between"}}>
              <div className="col-5">
                  <Form layout="vertical" autoComplete="off" style={{width:"120%"}}>
                      <Form.Item
                        hasFeedback
                        label="Name"
                        name="name"
                        validateTrigger="onBlur"
                        rules={[{
                          required:true,
                        },]}
                      >
                        <Input size="large" placeholder="Enter name here" prefix={<img src={user}></img>} name="name" value={addressinputs.name} onChange={handleChange} />
                      </Form.Item>
                  </Form>
                  <Form layout="vertical" autoComplete="off" style={{width:"120%"}}>
                      <Form.Item
                        hasFeedback
                        label="Email"
                        name="email"
                        validateTrigger="onBlur"
                        rules={[{
                          required:true,
                        },]}
                      >
                        <Input size="large" placeholder="Johndee@gmail.com" prefix={<img src={email}></img>} name="email" value={addressinputs.email} onChange={handleChange} />
                      </Form.Item>
                  </Form>
                  <Form layout="vertical" autoComplete="off" style={{width:"120%"}}>
                      <Form.Item
                        hasFeedback
                        label="Tax ID"
                        name="tax_id"
                        validateTrigger="onBlur"
                        rules={[{
                          required:true,
                        },]}
                      >
                        <Input size="large" placeholder="123456" prefix={<img src={tax}></img>} name="tax_id" value={addressinputs.tax_id} onChange={handleChange} />
                      </Form.Item>
                  </Form>
                </div>
              <div className="col-5" style={{margin:"0px 40px"}}>
                <Form layout="vertical" autoComplete="off" style={{width:"120%"}}>
                  <Form.Item
                    hasFeedback
                    label="Company Name"
                    name="company_name"
                    validateTrigger="onBlur"
                    rules={[{
                      required:true,
                    },]}
                  >
                    <Input size="large" placeholder="Enter company name" prefix={<img src={office}></img>} name="company_name" value={addressinputs.company_name} onChange={handleChange} />
                  </Form.Item>
                </Form>
                <Form layout="vertical" autoComplete="off" style={{width:"120%"}}>
                  <Form.Item
                    hasFeedback
                    label="Phone number"
                    name="phone_number"
                    validateTrigger="onBlur"
                    rules={[{
                      required:true,
                    },]}
                  >
                    <Input size="large" placeholder="mobile number" prefix={<img src={phone}></img>} name="phone_number" value={addressinputs.phone_number} onChange={handleChange} />
                  </Form.Item>
                </Form>
                <Form layout="vertical" autoComplete="off" style={{width:"120%"}}>
                  <Form.Item
                    hasFeedback
                    label="Country"
                    name="country"
                    validateTrigger="onBlur"
                    rules={[{
                      required:true,
                    },]}
                  >
                    <Input size="large" placeholder="india" prefix={<LuBox size={18} color='#666' />} name="country" onChange={handleChange} />
                  </Form.Item>
                </Form>
              </div>
            </div>
            <div className="col-6 address_label">
              <Form layout="vertical" autoComplete="off" style={{width:"200%"}}>
                    <Form.Item
                      hasFeedback
                      label="Address"
                      name="address"
                      validateTrigger="onBlur"
                      rules={[{
                        required:true,
                      },]}
                    >
                      <Input size="large" placeholder="A-202, BKC" prefix={<LuBox size={18} color='#666'/>} name="address" value={addressinputs.address} onChange={handleChange} />
                    </Form.Item>
              </Form>
            </div>
            <div className="row" style={{display:"flex", justifyContent:"space-between"}}>
              <div className="col-5">
                <Form layout="vertical" autoComplete="off" style={{width:"120%"}}>
                    <Form.Item
                      hasFeedback
                      label="City"
                      name="city"
                      validateTrigger="onBlur"
                      rules={[{
                        required:true,
                      },]}
                    >
                      <Input size="large" placeholder="Type here" prefix={<LuBox size={18} color='#666' />} name="city" value={addressinputs.city} onChange={handleChange} />
                    </Form.Item>
                </Form>
              </div>
              <div className="col-5" style={{margin:"0px 40px"}}>
                <Form layout="vertical" autoComplete="off" style={{width:"120%"}}>
                    <Form.Item
                      hasFeedback
                      label="Zip Code"
                      name="code"
                      validateTrigger="onBlur"
                      rules={[{
                        required:true,
                      },]}
                    >
                      <Input size="large" placeholder="type here" prefix={<LuBox size={18} color='#666' />} name="code" value={addressinputs.code} onChange={handleChange} />
                    </Form.Item>
                </Form>
              </div>
            </div>
              <Flex justify='end'>
                  <Button size="large" className='me-4'>Cancel</Button>
                  <Button size="large" style={{color:"white",backgroundColor:"#D40E0E"}} onClick={() => handleSubmit()}>Add</Button>
            </Flex>
        </DialogContent>
        </Dialog>
  )
}

export default AddressesModal