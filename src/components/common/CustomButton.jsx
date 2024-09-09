import React from 'react'

const CustomButton = ({btnTitle,handleSubmit, disabled}) => {
  return (
    <button disabled={disabled} onClick={handleSubmit} className={`bg-primary rounded-full w-full p-1.5 text-white font-poppins text-sm font-medium ${disabled && 'opacity-50'}`}>
      {btnTitle}
    </button>
  )
}

export default CustomButton
