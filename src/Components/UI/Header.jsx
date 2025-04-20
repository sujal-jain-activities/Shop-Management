import  {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { TiThMenu } from "react-icons/ti";
import { motion } from "framer-motion";
import { AppSidebar } from "../../Components/UI/SideNavbar"
import { SidebarTrigger } from "../UI/sidebar" // Make sure import path is correct
import MySidebar from './MySidebar';

const containervarient = {
  hidden:{opacity:0,y:-20},
  show:{
    opacity:1,y:0,
    transtion:{
      duration:3,
      staggerChildren:0.3
    }
  }
}
const childvarient = {
  hidden:{opacity:0,y:-20},
  show:{opacity:1,y:0}
}


const Header = () => {
  const [slide, setSlide] = useState(false)
  return (
    <>
      <motion.div 
      variants={containervarient}
      initial="hidden"
      animate="show"
      className=' w-full  flex justify-center items-center '>
        <div className='bg-zinc-800 p-5 sm:mt-4 sm:rounded-xl flex w-full justify-between items-center gap-2 sm:w-[65rem]'>
            <motion.div variants={childvarient} initial="hidden" animate="show" className='Logo  font-semibold text-lg pr-5 sm:text-xl'>
              <NavLink to="/">
                  <h1>ShoePlaza</h1>
              </NavLink>
            </motion.div>
            <div className='menu flex justify-between items-center font-semibold text-lg pr-5'>
              <div className='sm:hidden'>
          <TiThMenu onClick={()=>setSlide(!slide)}/>

          {slide && <MySidebar slide={slide} setSlide={setSlide} />}
              </div>
                <motion.ul variants={childvarient} initial="hidden" animate="show" className='flex justify-between  items-center gap-7 text-sm sm:text-lg '>
                  <li className='hidden sm:block'><NavLink to="/" className={({isActive})=>
                      isActive ? 'text-blue-600': 'text-white'
                  }>Home</NavLink></li>
                  <li className='hidden sm:block'><NavLink to="/About" className={({isActive})=>
                      isActive ? 'text-blue-600': 'text-white'
                  }>About</NavLink></li>
                  <li className='hidden sm:block'><NavLink to="/Shopping" className={({isActive})=>
                      isActive ? 'text-blue-600': 'text-white'
                  }>Shopping</NavLink></li>
                  <li className='hidden sm:block'><NavLink to="/Contact" className={({isActive})=>
                      isActive ? 'text-blue-600': 'text-white'
                  }>Contact</NavLink></li>
                </motion.ul>
            </div>
        </div>

        
      </motion.div>
    </>
  )
}

export default Header
