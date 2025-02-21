import React from "react";
import './Modal.css'
 
const Modal = ({ isOpen, children,width,height }) => {
    if(!isOpen){
        return null
    }
  return (
    <div className="modal_background">
            <div className="modal_card" style={{width:`${width}`,height:`${height}`}}>
                {children}
            </div>
        </div>
  )
}

export default Modal