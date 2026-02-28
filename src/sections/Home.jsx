import { section } from 'motion/react-client'
import React, { useEffect, useMemo, useState } from 'react'
import ParticlesBackground from '../components/ParticlesBackground'
import CustomCursor from '../components/CustomCursor'
import { motion } from 'motion/react'
import avatar from '../assets/mmmyy.png'
import github from '../assets/githubb.png'
const Home = () => {
  const roles=useMemo(()=>['Full-Stack Developer','Frontend Developer','Backend Developer','Python Developer','React Developer'],[])
  let [index,setIndex]=useState(0);
  let [subIndex,setSubIndex]=useState(0);
  let [deleting,setDeleting]=useState(false);
  useEffect(() => {
    let current=roles[index]
    let timeout=setTimeout(() => {
      if(!deleting && subIndex<current.length){
        setSubIndex(v=>v+1);
      }
      else if(!deleting && subIndex===current.length){
        setTimeout(()=>{
          setDeleting(true);
        },1500)
      }
      else if(deleting && subIndex>0){
        setSubIndex(v=>v-1);
      }
      else if(deleting && subIndex===0){
        setDeleting(false);
        setIndex((index+1)%roles.length);
      }
    }
    ,deleting?40:60)
    return ()=>clearTimeout(timeout);
},[index,subIndex,deleting]);
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3}} id='home' className='w-full h-screen bg-neutral-950 relative overflow-hidden'>
      <ParticlesBackground/>
      <CustomCursor/>
      <div className="absolute inset-0 pointer-events-none">
        <div className='absolute -top-20 -left-32
        w-[70vw] sm:w-[500vw] md:w-[40vw]
        h-[70vh] sm:h-[50vh] md:h-[40vh]
        max-w-[500] max-h-[500]
        rounded-full bg-linear-to-r from-cyan-100 via-blue-400 to-blue-600 
        opacity-30 sm:opacity-20 md:opacity-10
        blur-[100px] sm:blur-[130px] md:blur-[100px]
        animate-pulse
        '>
        </div>
        <div className='absolute -bottom-28 -right-40
        w-[70vw] sm:w-[z-500vw] md:w-[40vw]
        h-[70vh] sm:h-[50vh] md:h-[40vh]
        max-w-[500] max-h-[500]
        rounded-full bg-linear-to-r from-cyan-100 via-blue-400 to-blue-600 
        opacity-30 sm:opacity-20 md:opacity-10
        blur-[100px] sm:blur-[130px] md:blur-[100px]
        animate-pulse delay-300
        '></div>
      </div>
     <div className='mt-12 md:mt-16 flex justify-center items-center h-[90vh]'>
      <div className='flex ps-8 flex-col w-[100%] md:w-[50%] h-[100%] justify-center items-center p-3'>
        <h1 className='text-white text-2xl md:3xl font-semibold'>{roles[index].substring(0,subIndex)} <span className='text-white text-3xl'>|</span></h1>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4'>Hi, I'm</h1>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-transparent mb-4 bg-linear-to-r from-pink-500 via-pink-700 to-purple-600 bg-clip-text'>Aditya Rao</h1>
        <p className='text-lg text-white'>I am a passionate Full-Stack Developer with expertise in building dynamic and responsive web applications. With a strong foundation in both frontend and backend technologies, I create seamless user experiences and robust server-side solutions.</p>
      
        <div className='flex gap-4 mt-6'>
          <a download href="./Aditya_Rao_Resume.docx" className='p-2 cursor-pointer font-semibold hover:scale-110 bg-blue-600 rounded-full text-white shadow-lg'>My Resume</a>
          <a href="https://github.com/aadi23042003?tab=repositories" target='_blank'><motion.img src={github} alt="GitHub Logo" className='w-8 h-8 p-1 bg-blue-900 rounded shadow-2xl'/></a>
        </div>
      </div>
      <div className='justify-center items-center hidden md:flex md:w-[50%] h-[100%] bg-transparent'>

        <motion.img src={avatar} alt="My Avatar" className='w-84 h-[70%] object-cover' />

        <motion.img src={avatar} alt="My Avatar" className='w-84 h-[70%] object-cover' />

      </div>
     </div>
    </motion.section>
  )
}
export default Home