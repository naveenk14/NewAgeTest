import React from 'react'
import lockIcon from '../../../assets/Loack.svg'
import { Button, Form, Input } from 'antd'

const PasswordFields = ({onFinish,onFinishFailed,form}) => {
  return (
    <div className="col-5 form_content p-0">
        <Form layout="vertical" autoComplete="off" onFinish={onFinish}
    onFinishFailed={onFinishFailed} form={form} >
            <Form.Item
              hasFeedback
              label="Old Password"
              name="old_password"
              validateTrigger="onBlur"
              rules={[{
                required:true,
                message: 'Please enter old password !',
                },]}
            
            >
              <Input.Password size="large" placeholder="Enter password" prefix={<img src={lockIcon}></img>} name="old_password"  />
            </Form.Item>
          {/* </Form>
        <Form layout="vertical" autoComplete="off"> */}
            <Form.Item
              hasFeedback
              label="New password"
              name="new_password"
              validateTrigger="onBlur"
              rules={[{
                required:true,
                message: 'Please enter new password !',
                },]}
            >
              <Input.Password size="large" placeholder="Enter password" prefix={<img src={lockIcon}></img>} name="new_password" />
            </Form.Item>
          {/* </Form>
        <Form layout="vertical" autoComplete="off"> */}
            <Form.Item
              hasFeedback
              label="Confirm password"
              name="confirm_password"
              validateTrigger="onBlur"
              rules={[{
                required:true,
                message: 'Please enter confirm password !',
                },]}
            >
              <Input.Password size="large" placeholder="Enter password" prefix={<img src={lockIcon}></img>} name="confirm_password" />
            </Form.Item>
            <div className="save_btn">
                <Button htmlType="submit" className='save_button' >Update</Button>
            </div>
          </Form>
          {/* <div className="save_btn">
            <button className='save_button' onClick={(e)=>handleSubmit(e)}>Update</button>
          </div> */}
      </div>
  )
}

export default PasswordFields