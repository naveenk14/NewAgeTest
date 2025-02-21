import React, { useEffect, useRef, useState } from 'react'
import './Password.css'
import { Checkbox, Flex, Form } from 'antd'
import PasswordFields from './PasswordFields'
import PasswordRules from './PasswordRules'
import PasswordChangeSuccess from '../Modals/PasswordChangeSuccess'
import PasswordMismatchModal from '../Modals/PasswordMismatchModal'
import { UpdatePasswordService } from '../../../Services/UpdatePasswordService'
import { useDispatch, useSelector } from 'react-redux'
import { UpdatePasswordAction } from '../../../Redux/Actions/UpdatePasswordAction'
import PasswordInvalidModal from '../Modals/PasswordInvalidModal'

const Password = () => {

//   const [passwordInput, setPasswordInput] = useState(
//     {
//       old_password:"",
//       new_password:"",
//       confirm_password:"",
//   }
// )

const [open,setOpen] = useState(false)
const [openinvalid,setOpeninvalid] = useState(false)
const [opensuccess,setOpensuccess] = useState(false)
const dispatch = useDispatch();
const [form] = Form.useForm();


const Password = useSelector((state) => state.UpdatePassword);
console.log("password",Password)
const passwordResponse = Password?.uploadData
console.log(passwordResponse)

const hasPageBeenRendered = useRef(false)

useEffect(() => {
  console.log("call dispatch")
  if(hasPageBeenRendered.current){
    if(passwordResponse?.statuscode == "201"){
      console.log("invalid")
      setOpeninvalid(true)
    }
    else if(passwordResponse?.statuscode == "200"){
      console.log("success")
      form.resetFields()
      setOpensuccess(true)
      }
  }
    hasPageBeenRendered.current = true;
}, [passwordResponse])



const onFinish = ({old_password,confirm_password,new_password}) => {
  console.log('Success:', old_password);
  console.log('Success:', confirm_password);
  const passwords = {
    old_password: old_password,
    confirm_password: confirm_password
  }

  if(new_password === confirm_password){
    console.log("proceed")
    dispatch(UpdatePasswordAction(passwords))
  }
  else{
    console.log("mismatch")
    setOpen(true)
  }
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

  // const [checkboxvalues,setCheckboxValues] = useState(
  //   {
  //     googlelogin:false,
  //     manuallogin:false
  //   }
  // )
  // console.log(checkboxvalues)

  // const onChange = (e) => {
  //   setCheckboxValues((prev)=>{
  //     return {
  //       ...prev,[e.target.name]:e.target.checked
  //     }
  //   });
  // };

//   const handleChange =(e)=>{
//     setPasswordInput((prev)=>{
//         return {
//             ...prev,[e.target.name]:e.target.value
//         }
//     })
// }

  // const handleSubmit =(e)=>{
  //   e.preventDefault()
  //   console.log(passwordInput)
  // }

  return (
    <>
      <div className="password_description">
            <p className='m-0'>Manage Your Login Options & Password </p>
            <p className='m-0'>You can Manage Your Login Options or change your account password from this page. </p>
      </div>
      {/* <Flex className='mb-3'>
        <Checkbox name="googlelogin" onChange={onChange}
            style={{
              fontWeight:"500",
              fontSize:"13px",
              lineHeight:"19px",
              letterSpacing:".01em",
              color:"#29333D",
              marginRight:"30px"
            }}
        >Use Google account to login</Checkbox>
        <Checkbox name="manuallogin" onChange={onChange}
            style={{
              fontWeight:"500",
              fontSize:"13px",
              lineHeight:"19px",
              letterSpacing:".01em",
              color:"#384656",
            }}
        >Use Email/Phone & password</Checkbox>
      </Flex> */}
      
     {/* {
      checkboxvalues.manuallogin && <div className="row m-0 profile_password_row">
                                        <PasswordFields handleChange={handleChange} />
                                        <PasswordRules />
                                    </div>
     } */}
      <div className="row m-0 profile_password_row">
                                        <PasswordFields onFinish={onFinish} onFinishFailed={onFinishFailed} form={form} />
                                        {/* <PasswordRules /> */}
      </div>
      <PasswordMismatchModal open={open} close={()=>setOpen(false)} />
      <PasswordInvalidModal open={openinvalid} close={()=>setOpeninvalid(false)} />
      <PasswordChangeSuccess open={opensuccess} close={()=>setOpensuccess(false)} />
    </>

  )
}

export default Password