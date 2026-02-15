import React, { useState } from 'react'
import OverlayMenu from './OverlayMenu';
import Logo from '../assets/aadilogo.png'
import { FiMenu } from 'react-icons/fi';
import { motion, scale } from 'motion/react';

const Navbar = () => {
  let [menuOpen,setMenuOpen]=useState(false);
  let [visible,setVisible]=useState(true);
  return (
    <>
    <nav className={`fixed top-0 left-0 w-full overflow-hidden flex z-50 justify-between items-center px-6 py-4 transition-transform duration-300 ${visible ? ' translate-y-0' : ' -translate-y-full'}`}>
      <div className='flex items-center space-x-2'>
        <img src={Logo} alt="" className='w-12 h-12' />
        <div className='text-2xl text-white font-bold hidden sm:block'>Aditya Rao</div>
      </div>
      <div className="block lg:absolute lg:left-1/2 lg:transform lg:translate-x-1/2"><button className='text-white text-3xl focus:outline-none cursor-pointer font-bold' onClick={()=>{
        setMenuOpen(true)}}><FiMenu/></button></div>
     <div className='hidden lg:block'>
      <motion.a whileHover={{scale:1.2,opacity:0.8}} className='bg-linear-to-r from-pink-600 via-blue-300 to-blue-400 text-white px-4 py-2 rounded-full font-bold shadow-lg' href="#contact">Reach Out</motion.a>
     </div>
      </nav>
    <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

export default Navbar