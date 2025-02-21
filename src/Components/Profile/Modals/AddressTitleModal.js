import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import { Button, Flex, Form, Input } from 'antd'
import React, { useState } from 'react'
import { VscClose } from 'react-icons/vsc'
import './AddressTitleModal.css'

const AddressTitleModal = ({open,close, setAddressTitle}) => {
    const [addressTitleInput, setAddressTitleInput] = useState({
      title:""
    })

    console.log(addressTitleInput)

    const handleChange = (e) => {
        setAddressTitleInput ((prev) =>{
            return {
                ...prev,[e.target.name]:e.target.value
            }
        })
    }

    const handleSubmit = () => {
      setAddressTitle(false)
    }
  return (
        <Dialog
            open ={open}
            onClose ={close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="sm"
            fullWidth={true}
            id='address_title'
        >
         <DialogTitle id="alert-dialog-title">
          <p className='p-1' style={{
              fontWeight:"600",
              fontSize:"19px",
              lineHeight:"24px",
              letterSpacing:".01em",
              color:"#181E25",
              marginBottom:"0px"
          }}>Address Title</p>
           <p className='mx-1' style={{
            color:"#181E25",
            fontWeight:"400",
            fontSize:"12px",
            letterSpacing:".01em",
            lineHeight:"23px"
            }}>Add a title for your new address</p>
          <VscClose size={22} color='#ffff' onClick={close} style={{position:"absolute",top:"0px",right:"-25px",cursor:"pointer"}} />
        </DialogTitle> 
        <DialogContent>
            <Form layout="vertical" autoComplete="off">
                <Form.Item
                   hasFeedback
                   label="Title"
                   name="title"
                   validateTrigger="onBlur"
                >
                  <Input size="large"  placeholder="Mumbai Branch Address" name="title" value={addressTitleInput.title} onChange={handleChange} />
             </Form.Item>
          </Form>
          <Flex justify='end'>
            <Button size="large" style={{color:"white", backgroundColor:"#D40E0E"}} onClick={() => handleSubmit()}>Save</Button>
          </Flex>
        </DialogContent>


        </Dialog>
  )
}

export default AddressTitleModal