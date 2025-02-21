import React, { useEffect, useState } from 'react'
import './UploadDocuments.css'
import TextArea from 'antd/es/input/TextArea'

const CargoRequirements = () => {

    const [textCount,setTextCount] = useState(250)
    const [textInput,setTextInput] = useState("")
    useEffect(()=>{
        const length = Math.abs(textInput.length - 250)
        setTextCount(length)
    },[textInput])

  return (
    <div className='cargo_require_section' >
        <div className="row cargo_require_row">
            <div className="col-12 p-0">
                <div className="left_details d-flex align-items-start">
                    <span className='me-2'>3</span>
                    <div className="Shipper_title">
                        <p className='m-0 mb-2'>Specify if there is any special cargo requirements</p>
                        <p className='m-0'>Skip if no special requirements.</p>
                    </div>
                </div>
                <div className="right_details">
                    <div className="textarea_description d-flex justify-content-between" style={{width:"50%",paddingBottom:"5px"}}>
                        <p className="m-0" style={{fontWeight:"500",fontSize:"13px",lineHeight:"19px",letterSpacing:"1%",color:"#67788E"}}>if any</p>
                        <p className='m-0' style={{fontWeight:"500",fontSize:"13px",lineHeight:"19px",letterSpacing:"1%",color:"#67788E"}}>{textCount}/250</p>
                    </div>
                    <TextArea style={{width:"50%"}} placeholder='Type here...' rows={4} maxLength={250} value={textInput} onChange={(e)=>setTextInput(e.target.value)} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CargoRequirements