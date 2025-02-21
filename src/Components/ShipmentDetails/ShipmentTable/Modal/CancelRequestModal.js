import React, { useEffect, useState } from "react";
import "./CancelRequestModal.css";
import { VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";

const CancelRequestModal = ({ handleReqClose }) => {

  const [forminputs,setForminputs] = useState({
    radioOn:"gotbetterprice"
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
    <div className="cancel_request_modal p-5" style={{ position: "relative" }}>
      <div className="modal_request_header text-center">
        <h5>
          Our team has received the cancellation request:
          <Link className="text-decoration-none">#204869</Link>
        </h5>
        <p>While our team works on cancellation, please share the reason.</p>
      </div>
      <div
        className="modal_cancel_icon flex-center-end"
        style={{
          position: "absolute",
          right: "-30px",
          top: "0",
          cursor: "pointer",
        }}
      >
        <VscClose size={22} color="#ffff" onClick={() => handleReqClose()} />
      </div>
      <div className="modal_request_body mt-5" style={{ position: "relative" }}>
        <div className="radio-item">
          <input
            type="radio"
            className="form-check-input"
            name="radioOn"
            value="gotbetterprice"
            id="option1"
            onChange={handleChange}
          />
          <label htmlFor="option1">
            <p>Got better price on another website</p>
          </label>
        </div>
        <div className="radio-item">
          <input
            type="radio"
            className="form-check-input"
            name="radioOn"
            value="shipmentnotready"
            id="option2"
            onChange={handleChange}
          />
          <label htmlFor="option2">
            <p>Shipment is not ready</p>
          </label>
        </div>
        <div className="radio-item">
          <input
            type="radio"
            className="form-check-input"
            name="radioOn"
            value="transittimelong"
            id="option3"
            onChange={handleChange}
          />
          <label htmlFor="option3">
            <p>Transit time is too long</p>
          </label>
        </div>
        <div className="radio-item">
          <input
            type="radio"
            className="form-check-input"
            name="radioOn"
            value="otherreason"
            id="option4"
            onChange={handleChange}
          />
          <label htmlFor="option4">
            <p>Other reason</p>
          </label>
        </div>
      </div>
      {
            forminputs?.radioOn==='otherreason' &&
                <div className="other_type w-100" style={{padding:"13px 0px 0px"}}>
                    <div className="textarea_description d-flex justify-content-between" >
                        <p className="" style={{fontWeight:"500",fontSize:"13px",lineHeight:"19px",letterSpacing:"1%",color:"#67788E",marginBottom:"5px"}}>Tell us more about your document type</p>
                        <p className='m-0' style={{fontWeight:"500",fontSize:"13px",lineHeight:"19px",letterSpacing:"1%",color:"#67788E"}}>{textCount}/250</p>
                    </div>
                    <TextArea placeholder='Type here...' rows={4} maxLength={250} onChange={(e)=>setTextInput(e.target.value)} />
                </div>
        }
      <div className="modal_request_button">
        <button className="request_submit_btn" onClick={()=>handleReqClose()}>Submit</button>
      </div>
    </div>
  );
};

export default CancelRequestModal;
