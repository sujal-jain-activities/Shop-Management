import React from 'react'
import { useState } from "react";
import { NavLink } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FaInfo } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const MySidebar = ({ slide, setSlide }) => {
  const [showToast, setShowToast] = useState(false);
  const handleCopyNo = async () => {
    try {
      await navigator.clipboard.writeText("+91 7999631562");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000); // Hide after 2 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("sujalshoecollection@gmail.com");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000); // Hide after 2 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <div
      className={`fixed top-0 z-150 h-full w-64 bg-zinc-900 text-white sm:hidden transition-all duration-4500 
        ${slide ? 'right-0' : '-right-full'} rounded-l-2xl`}>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">ShoePlaza</h2>
          <IoClose  onClick={() => setSlide(false)} className="cursor-pointer items-center mt-1 mr-4 font-bold text-2xl" />
        </div>
        <ul className="mt-4 space-y-2">
          <li>
            <NavLink to="/" onClick={() => setSlide(false)} className="flex items-center p-2 text-lg text-gray-300 hover:text-white">
              <span className="mr-2"><IoHome />              </span> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" onClick={() => setSlide(false)} className="flex items-center p-2 text-lg text-gray-300 hover:text-white">
              <span className="mr-2"><FaInfo />              </span> About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Shopping" onClick={() => setSlide(false)} className="flex items-center p-2 text-lg text-gray-300 hover:text-white">
              <span className="mr-2"><FaShoppingCart />              </span> Shopping
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" onClick={() => setSlide(false)} className="flex items-center p-2 text-lg text-gray-300 hover:text-white">
              <span className="mr-2"><IoIosContact />              </span> Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="#" onClick={() => setSlide(false)} className="flex items-center p-2 text-lg text-gray-300 hover:text-white">
              <span className="mr-2">⚙️</span> Settings
            </NavLink>
          </li>
        </ul>
        <div className="absolute bottom-4 left-4 ">
          <div className='flex items-center gap-18 mb-5 bg-zinc-800 p-4 rounded-2xl '>
              <span><a href="https://www.instagram.com/sujaljain016?igsh=ZGlteHVqaGN5OWJ1" target='_blank'><p className='text-lg text-center text-pink-300'><GrInstagram /></p></a></span>
              <span><MdEmail onClick={handleCopyEmail} className="cursor-pointer text-orange-400 hover:underline"/></span>
              <span><FaPhoneAlt onClick={handleCopyNo} className="cursor-pointer text-green-600 hover:underline"/></span>
              {showToast && (
        <div className="absolute top-[60px] left-10 bg-zinc-500 text-white px-4 py-2 rounded shadow-lg text-sm">
          Copied to clipboard!
        </div>
      )}
          </div>
          <p className="text-sm text-gray-400">© 2023 ShoePlaza. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default MySidebar;
