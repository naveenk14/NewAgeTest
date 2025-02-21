import React from 'react'
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { VscClose } from 'react-icons/vsc';

const PasswordMismatchModal = ({ open, close }) => {


  return (
    <Dialog
            open ={open}
            onClose ={close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            maxWidth="xs"
            fullWidth={true}
            id='address_title'
            style={{padding:"0px 30px"}}
        >
         <DialogTitle id="alert-dialog-title">
          <p className='p-1' style={{
              fontWeight:"600",
              fontSize:"22px",
              lineHeight:"24px",
              letterSpacing:".01em",
              color:"#181E25",
              marginBottom:"0px",
              textAlign:"center"
          }}>Password Mismatch !</p>
           {/* <p className='mx-1' style={{
            color:"#181E25",
            fontWeight:"400",
            fontSize:"12px",
            letterSpacing:".01em",
            lineHeight:"23px",
            textAlign:"center"
            }}>Please check your datas are correct ?</p> */}
          <VscClose size={22} color='#ffff' onClick={close} style={{position:"absolute",top:"0px",right:"-25px",cursor:"pointer"}} />
        </DialogTitle> 
        <DialogContent>
            {/* <Form layout="vertical" autoComplete="off">
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
          </Flex> */}
          <p className='mx-1 m-0' style={{
            color:"#181E25",
            fontWeight:"400",
            fontSize:"12px",
            letterSpacing:".01em",
            lineHeight:"23px",
            textAlign:"center"
            }}>Please check your datas are correct ?</p>
        </DialogContent>


        </Dialog>
  )
}

export default PasswordMismatchModal