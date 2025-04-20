import React from 'react'
import Mybutton from '../Components/UI/Mybutton'; // with uppercase 'M'
import About from './About'
import Shopping from './Shopping'
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';
import { Slider } from "../Components/UI/Slider";
import Contact from './Contact';
import MySidebar from '../Components/UI/MySidebar';
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 1
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 }
};


const Home = () => {
  return (
    <>
    <MySidebar/>
      <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className='body w-full h-[100vh] mt-5 flex justify-center sm:h-[80vh]'>
        <div className='herosection w-full mt-5 sm:w-[65rem] flex justify-center sm:justify-between' >
          <div>
          <motion.h1 
          variants={childVariants}
          className='absolute top-40 font-semibold text-2xl z-100 w-60 text-center sm:static sm:w-100 sm:text-3xl'>
          Step into Style. Walk with Confidence.
          </motion.h1>
          <motion.p 
          variants={childVariants}
          className='absolute top-70 font-semibold text-lg z-100 w-60 text-center sm:static sm:w-90 sm:mt-10 sm:ml-10 sm:text-xl'>Find your perfect fit with our latest collection of stylish and comfortable shoes. Whether it's for the streets or the spotlight, we've got something for every step.</motion.p>
          <div className='absolute top-130 left-[50%] -translate-x-[50%] sm:static sm:ml-53 sm:mt-10'>
              <motion.button
             variants={childVariants}
              ><NavLink to="/Shopping"><Mybutton/></NavLink></motion.button>
          </div>
          </div>
          <div className='img flex  items-center flex-col gap-5 sm:mr-20'>
          <motion.img
          initial={{ opacity: 0,x:40 }}
          animate={{ opacity: 1,x:0,transition: { duration: 1,staggerChildren:6 } }}
          className='object-cover h-100 z-1 blur-sm sm:blur-none rounded-xl' src="https://i.pinimg.com/originals/cd/89/c6/cd89c6d9e836870420fdb4236f36bb2b.jpg" alt="" />
        </div>
        </div>
      </motion.div>
      <Slider/>

      <div className='about overflow-visible  h-auto'>
      <About/>
      </div>
      <div>
        
      </div>
    </>
  )
}

export default Home
