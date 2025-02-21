import React from 'react'

const CustomButton = () => {
  return (
    <Link 
        className='btn_save ms-auto'>
            Save & Next 
        <span className='ms-2'><HiArrowRightCircle size={22} color='white' /></span>
        </Link>
  )
}

export default CustomButton