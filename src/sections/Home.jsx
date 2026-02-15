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
    <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3}} id='home' className='w-full min-h-screen bg-neutral-950 relative overflow-hidden'>
      <ParticlesBackground/>
      <CustomCursor/>
      <div className="absolute inset-0">
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
      <div className="relative overflow-hidden z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2">
        <div className="flex overflow-hidden flex-col justify-center h-full text-center lg:text-left relative">
          <div className="w-full lg:pr-24 mx-auto max-w-[48rem] mt-20 md:mt-8">
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:2}} className='mb-3 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-semibold tracking-wide min-h-[1.6em]'>
            <span className='text-linear-to-r from-orange-400 via-purple-600 to-red-600 animate-bounce'>
              {roles[index].substring(0,subIndex)}
            </span>
            <motion.span className='w-[1px] text-4xl text-white font-medium shadow-lg animate-pulse'>|</motion.span>
            </motion.div>
            <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:1,delay:2}} className='flex flex-col text-3xl lg:text-4xl text-transparent bg-linear-to-r from-pink-400 via-red-500 to-blue-600 bg-clip-text drop-shadow-lg mt-6 md:mt-2'>Hello, I'm <span className='text-3xl text-white md:text-4xl lg:text-5xl lg:whitespace-nowrap'>Aditya Rao</span></motion.h1>
            <motion.p initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:2.3}} className='text-white mt-3 mx-auto lg:mx-0 lg:text-lg max-w-2xl'>
              I am a passionate Full-Stack Developer with expertise in building dynamic and responsive web applications. With a strong foundation in both frontend and backend technologies, I create seamless user experiences and robust server-side solutions.
            </motion.p>
          <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.5,delay:2.6}} className='mt-20 md:mt-7 flex justify-center lg:justify-start gap-4'>
            <motion.a whileTap={{scale:0.8}} download className='text-white bg-linear-to-r p-2 rounded-full font-bold from-blue-500 via-blue-700 to-blue-800 hover:bg-amber-800 hover:scale-110' href="./Aditya_Rao_Resume.docx">Download Resume</motion.a>
            <a href="https://github.com/aadi23042003?tab=repositories" target='_blank'><motion.img src={github} alt="GitHub Logo" className='w-8 h-8 p-1 bg-blue-900 rounded shadow-2xl'/></a>
          </motion.div>
          </div>
        </div>
        <div>
          <div className='relative top-1/2 opacity-40 -translate-y-1/2 pointer-events-none translate-x-1/2' style={{width:"min(25vw,410px)",height:"min(60vh,760px)",borderRadius:"50%",filter:"blur(100px)",opacity:0.4,background:"conic-gradient(from 0deg,#1cd8d2,#00bf8f,#302b63,#1cd8d2"}}/>
          <motion.img initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:2.5}} src={avatar} alt="Profile Image" className='hidden md:block absolute -translate-y-1/2 h-[80vh] w-96 top-1/2 right-0 translate-x-0 pointer-events-none select-none'></motion.img>
        </div>
        
      </div>
    </motion.section>
  )
}
export default Home