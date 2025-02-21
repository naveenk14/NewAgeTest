import React from 'react'
import './CustomCheckBox.css'

const CustomCheckBox = ({children,styleofChild,...props}) => {
  return (
    <label className="containers" style={{fontSize:"15px",color:"#666"}}>
        <div className="checkerbox">
            <input type="checkbox" className='hide_default' {...props} />
            <span className="checkmark"></span>
        </div>
        <div className="child ms-4" style={styleofChild}>
            {children}
        </div>
    </label>
  )
}

export default CustomCheckBox