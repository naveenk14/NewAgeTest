import React, { useState } from 'react'
import './CreatePasswordModal.css'
import { Button, Flex, Form, Input, Space } from 'antd'
import { GoLock } from "react-icons/go";
import { VscClose } from 'react-icons/vsc';

const CreatePasswordModal = ({setOpen}) => {

  const [passwordinputs, setPasswordinputs] = useState(
    {
      newpass:"",
      confirmpass:""
    }
  )

  //This is for getting input values
  const handleChange=(e)=>{
    setPasswordinputs((prev)=>{
      return {...prev,[e.target.name]:e.target.value}
    })
  }

  //This is OnSubit Function

  const onFinish =()=>{
    if(passwordinputs.newpass && passwordinputs.confirmpass){
      setOpen(false)
    }
  }

  return (
    <div className='create_password_modal p-5' style={{position:"relative"}}>
      <p className='m-0'>Create a Password</p>
      <p className='m-0'>You need to create a password before you unlink your FSL Account from your social login</p>
      <Form layout="vertical" autoComplete="off" onFinish={()=>onFinish()} >
          <Form.Item
              hasFeedback
              label="New Password"
              name="NewPassword"
              validateTrigger="onBlur"
              >
              <Input size="large" placeholder="Enter Password" prefix={<GoLock />} name="newpass" value={passwordinputs.newpass} onChange={handleChange} />
              {/* disabled={isReadOnly} defaultValue={apiData?.name} value={shipperinputs.name} onChange={handleChange} */}
          </Form.Item>
          <Form.Item
              hasFeedback
              label="Confirm Password"
              name="ConfirmPassword"
              validateTrigger="onBlur"
              >
              <Input size="large" placeholder="Enter Password" prefix={<GoLock />} name="confirmpass" value={passwordinputs.confirmpass} onChange={handleChange} />
              {/* disabled={isReadOnly} defaultValue={apiData?.name} value={shipperinputs.name} onChange={handleChange} */}
          </Form.Item>
          <Flex justify='end'>
              <Button size="large" className='me-4' onClick={()=>setOpen(false)}>Cancel</Button>
              <Button size="large" style={{color:"white",backgroundColor:"#D40E0E"}} htmlType='submit'>Save</Button>
          </Flex>
      </Form>
      <VscClose size={22} color='#fff' role='button' style={{position:"absolute",right:"-25px",top:"1px"}} onClick={()=>setOpen(false)} />
    </div>
  )
}

export default CreatePasswordModal