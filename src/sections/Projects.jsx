import React, { useEffect, useMemo, useRef, useState } from 'react'
import pro1 from '../assets/pro1.png'
import pro2 from '../assets/pro2.png'
import { AnimatePresence, useMotionValueEvent, useScroll,motion } from 'motion/react';
import { h3 } from 'motion/react-client';
const useMobile=(query=('max-width:768px'))=>{
  const [isMobile,setIsMobile]=useState(typeof window !== 'undefined' && window.matchMedia(query).matches);
  useEffect(()=>{
    if(typeof window === 'undefined') return;
    const mediaQuery=window.matchMedia(query);
    const handleChange=(e)=>{
      setIsMobile(e.matches);
    }
    mediaQuery.addEventListener('change',handleChange);
    setIsMobile(mediaQuery.matches);
    return ()=>{
      mediaQuery.removeEventListener('change',handleChange);
    }
  },[query])
  return isMobile;
}
const Projects = () => {
  const isMobile=useMobile();
  const screenRef=useRef(null);
  const projects=useMemo(()=>[
    {
      title:'Online Book Store',
      link:'https://aadi23042003.pythonanywhere.com/',
      bgColor:'bg-linear-to-r from-neutral-950 via-neutral-800 to-neutral-900',
      image:pro1,
    },
    {
      title:'Online Appointment System',
      link:'https://aditya979453.pythonanywhere.com/',
      bgColor:'bg-linear-to-r from-neutral-900 via-neutral-800 to-neutral-900',
      image:pro2,
    }
  ],[isMobile])
  const {scrollYProgress}=useScroll({
    target:screenRef,
    offset:["start start","end end"],
  });
  const thresholds = projects.map((_, i) => (i + 1) / projects.length);

  const [activeIndex,setActiveIndex]=useState(0);
  useMotionValueEvent(scrollYProgress,'change',(latest)=>{
    const index=thresholds.findIndex(threshold=>latest<=threshold);
    setActiveIndex(index===-1?thresholds.length-1:index);
  })
  const activeProject=projects[activeIndex];
  return (
    <div id='projects' ref={screenRef} className={`text-white relative ${activeProject.bgColor}`} style={{height:`${100*projects.length}vh`,backgroundColor:activeProject.bgColor,transition:'background-color 0.5s ease-in-out'}}>
      <div className='absolute rounded-full bg-blue-500 animate-pulse -top-3 -left-10 blur-[100px] h-20 w-20 opacity-30'/>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
      <h2 className={`text-4xl font-semibold z-10 text-center text-transparent bg-linear-to-r from-neutral-300 via-neutral-400 to-neutral-500 bg-clip-text ${isMobile ? 'mt-8' : 'mt-12'}`}>My Projects</h2>
      
      <div className={`relative overflow-hidden w-full flex flex-1 justify-center items-center ${isMobile ? '-mt-4' : ''}`}>
        {projects.map((item,index)=>(
          <div key={index} style={{width:'85%',maxWidth:'1200px'}} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${index===activeIndex ? 'opacity-100 z-20 scale-100' : 'opacity-0 z-0 sm:z-10 scale-75'}`}>
            <AnimatePresence mode='wait'>
              {index===activeIndex && (
                <motion.h3 key={item.title} initial={{opacity:0,y:-30}} animate={{opacity:1,y:0}} exit={{opacity:0,y:30}} transition={{duration:0.5,ease:'easeOut'}} style={{zIndex:5,textAlign:isMobile?'center':'left'}} className={`block md:ms-28 select-none text-center text-transparent text-2xl md:text-2xl lg:text-3xl bg-linear-to-r from-neutral-400 via-blue-300 to-green-300 relative bg-clip-text sm-top-20 sm:left-[35%] lg:left-[-5%] sm:mb-0  italic font-semibold ${isMobile? '-mt-24' : ''}`}>
                  {item.title}
                </motion.h3>
                )}
              <br />
            </AnimatePresence>
            <div style={{zIndex:10,transition:"box-shadow 250ms ease"}} className={`relative w-[90%] h-[80%] md:w-[75%] md:h-[60%] mx-auto flex flex-col`}>
              <img src={item.image} alt={item.title} className='w-full h-full select-none pointer-events-none object-cover rounded-lg md:shadow-[0_2px_15px_5px] md:drop-shadow-2xl mb-5' style={{position:'relative',zIndex:10,filter:'drop-shadow(0px,16px 40px rgba(0,0,0,0.65)',transition:'filter 200ms ease'}} loading='lazy'/>
              <a rel='noopener noreferer' href={item.link} target='__blank' className='bg-cyan-100 text-black font-bold rounded p-3 w-[130px] hover:scale-110'>View Project</a>
            </div>
          </div>
        ))}
      </div>
      </div>

    </div>
  )
}
export default Projects