import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const Button = () => {
  return (
    <div className='w-40 h-15 text-center flex justify-center gap-1.5 items-center rounded-2xl border-2 border-white  text-sm font-semibold hover:border-blue-600 '>
      Start Exploring <FaArrowRight />

    </div>
  )
}

export default Button
