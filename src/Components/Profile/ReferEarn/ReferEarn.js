import React from 'react'
import './ReferEarn.css'
import { Button, Form, Input, Space } from 'antd'

const ReferEarn = () => {
  return (
    <div className='refer_inputs'>
      <p
        style={{
          fontWeight:"700",
          fontSize:"16px",
          lineHeight:"23px",
          letterSpacing:".01em",
          color:"#181E25",
          marginBottom:"20px"
        }}
      >Referrals</p>
      <Form layout="vertical" autoComplete="off" style={{marginBottom:"20px"}}>
          <Form.Item
              hasFeedback
              label="Invite by Email"
              name="Name"
              validateTrigger="onBlur"
              >
                <Space.Compact style={{ }}>
                  <Input placeholder='Add Email addresses' />
                  <Button type="primary">Invite</Button>
                </Space.Compact>
              {/* <Input size="large" placeholder="Type here" prefix={<img src={user}></img>} name="name" disabled={isReadOnly} defaultValue={apiData?.name} value={shipperinputs.name} onChange={handleChange} /> */}
      </Form.Item>
      </Form>
      <Form layout="vertical" autoComplete="off">
          <Form.Item
              hasFeedback
              label="Share the referral link"
              name="Name"
              validateTrigger="onBlur"
              >
                <Space.Compact style={{ }}>
                  <Input placeholder='https://www.freightsystems-india.com/referral=5986247859' />
                  <Button type="primary">Copy Link</Button>
                </Space.Compact>
              {/* <Input size="large" placeholder="Type here" prefix={<img src={user}></img>} name="name" disabled={isReadOnly} defaultValue={apiData?.name} value={shipperinputs.name} onChange={handleChange} /> */}
      </Form.Item>
      </Form>
    </div>
  )
}

export default ReferEarn