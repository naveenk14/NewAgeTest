import React, { useEffect, useState } from 'react'
import './UploadDocuments.css'
import TextArea from 'antd/es/input/TextArea'

const DocumentType = () => {


    const [forminputs,setForminputs] = useState({
        radioOn:"Packinglist"
    })

    const handleChange =(e)=>{
        setForminputs((prev)=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }

    //This is for decrease count logic of text area
    const [textCount,setTextCount] = useState(250)
    const [textInput,setTextInput] = useState("")
    useEffect(()=>{
        const length = Math.abs(textInput.length - 250)
        setTextCount(length)
    },[textInput])

    

  return (
    <div className='document_type_section' >
        <div className="row document_type_row">
            <div className="col-12 p-0">
                <div className="left_details d-flex align-items-start">
                    <span className='me-2'>1</span>
                    <div className="Shipper_title">
                        <p className='m-0 mb-2'>Document Type</p>
                        <p className='m-0'>Shipper contact details added.</p>
                    </div>
                </div>
                <div className="right_details radio_list">
                    <div className="radio_item">
                        <input type="radio" id='packing' name="radioOn" value="PackingList" onChange={handleChange} />
                        <label htmlFor="packing">Packing List</label>
                    </div>
                    <div className="radio_item">
                        <input type="radio" id='commercial' name="radioOn" value="CommercialInvoice" onChange={handleChange} />
                        <label htmlFor="commercial">Commercial Invoice</label>
                    </div>
                    <div className="radio_item">
                        <input type="radio" id='cargo' name="radioOn" value="CargoPicture" onChange={handleChange} />
                        <label htmlFor="cargo">Cargo Picture</label>
                    </div>
                    <div className="radio_item">
                        <input type="radio" id='other' name="radioOn" value="OtherType" onChange={handleChange} />
                        <label htmlFor="other" >Other Type</label>
                    </div>
                </div>
                {
                    forminputs?.radioOn==='OtherType' &&
                <div className="other_type" style={{padding:"10px 21px 0px"}}>
                    <div className="textarea_description d-flex justify-content-between" style={{width:"50%"}}>
                        <p className="" style={{fontWeight:"500",fontSize:"13px",lineHeight:"19px",letterSpacing:"1%",color:"#67788E",marginBottom:"5px"}}>Tell us more about your document type</p>
                        <p className='m-0' style={{fontWeight:"500",fontSize:"13px",lineHeight:"19px",letterSpacing:"1%",color:"#67788E"}}>{textCount}/250</p>
                    </div>
                    <TextArea style={{width:"50%"}} placeholder='Type here...' rows={4} maxLength={250} onChange={(e)=>setTextInput(e.target.value)} />
                </div>
                }
            </div>
        </div>
    </div>
  )
}

export default DocumentType