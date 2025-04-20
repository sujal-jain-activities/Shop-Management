import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className='w-full h-auto bg-zinc-900 flex justify-center items-center p-5 mt-5'>

        <div className='w-full h-auto flex flex-col item-center gap-2 sm:hidden'>
            <h1>Contact us</h1>
            <div className='phone flex gap-2 item-center'>
              <span className='flex item-center mt-1 text-green-500'><FaPhoneAlt/></span>
              <a href=""><p>+91 7999631562</p></a>
            </div>
            <h1 className='mt-4'>Email</h1>
            <div className='phone flex gap-2 item-center'>
              <span className='flex item-center mt-1 text-orange-400'><MdEmail/></span>
              <p>Sujalshoecollection@gmail.com</p>
            </div>
            <h1 className='mt-4'>Instagram</h1>
            <div className='phone flex gap-2 item-center'>
              <span className='flex item-center mt-1 text-red-400'><GrInstagram /></span>
              <a href="https://www.instagram.com/sujaljain016?igsh=ZGlteHVqaGN5OWJ1"target='_blank'><p>sujaljain016</p></a>
            </div>
        </div>

      <div className='w-full h-auto  items-center  gap-2 hidden sm:flex sm:block'>
          <div className='phone  w-[33%] h-20'>
          <div className='flex justify-center items-center gap-2 mt-3'>
                <h4 className='text-sm sm:text-xl sm:font-semibold'>Phone </h4>
                <span className='text-sm text-green-500'><FaPhoneAlt /></span>
                </div>
                <p className='text-sm text-center'>+91 7999631562</p>
          </div>
          <div className='Email  w-[33%] h-20'>
          <div className='flex justify-center items-center gap-2 mt-3'>
                <h4 className='text-sm sm:text-xl sm:font-semibold'>Email </h4>
                <span className='text-sm text-orange-400'><MdEmail /></span>
                </div>
                <p className='text-sm text-center'>sujalshoecollection@gmail.com</p>
          </div>
          <div className='PhoneNo  w-[33%] h-20'>
          <div className='flex justify-center items-center gap-2 mt-3'>
                <h4 className='text-sm sm:text-xl sm:font-semibold'>Instagram </h4>
                <span className='text-sm text-red-400'><GrInstagram /></span>
                </div>
                <a href="https://www.instagram.com/sujaljain016?igsh=ZGlteHVqaGN5OWJ1" target='_blank'><p className='text-sm text-center'>Sujaljain016</p></a>
          </div>
      </div>
    </div>
  )
}

export default Footer
