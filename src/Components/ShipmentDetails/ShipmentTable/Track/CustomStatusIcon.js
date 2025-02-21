import React from 'react'
import './CustomStatusIcon.css'
import cargo from '../../../../assets/Cargo.svg'
import tick from '../../../../assets/Tick.svg'

const CustomStatusIcon = ({complete,active}) => {
  return (
    <>
        {
          complete && <div className='tick'>
                      <img src={tick} alt="" />
                  </div>
        }
        {
           active && 
                      <>
                          <div className="ship_icon">
                          
                          </div>
                          <div className='cargo'>
                              <img src={cargo} alt="" />
                          </div>
                      </>
        }
    </>
  )
}

export default CustomStatusIcon